import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { getEjecucion } from "@/lib/homologacion.functions";
import { formatFecha, formatSueldo } from "@/lib/format";
import { DecisionForm } from "@/components/decision-form";
import { BenchmarkPanel } from "@/components/benchmark-panel";
import { VistaEspejo } from "@/components/vista-espejo";
import { ordenarPorPuntaje } from "@/components/score-chip";
import { DetailSkeleton } from "@/components/loading-skeleton";
import { toast } from "sonner";
import { abrirInformePdf, exportarExcel, type DatosInforme } from "@/lib/exportacion";


function pct(v: number | null | undefined) {
  return v == null ? "—" : `${(Number(v) * 100).toFixed(1)}%`;
}

export const Route = createFileRoute("/historial/$id")({
  head: () => ({
    meta: [
      { title: "Detalle de homologación — Espejo: Homologa" },
      { name: "description", content: "Resultados de una ejecución de homologación y comparación salarial." },
      { property: "og:title", content: "Detalle de homologación — Espejo: Homologa" },
      { property: "og:description", content: "Resultados y comparación salarial de una homologación." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EjecucionDetalle,
});

function EjecucionDetalle() {
  const { id } = Route.useParams();
  const get = useServerFn(getEjecucion);
  const { data, isLoading } = useQuery({
    queryKey: ["ejecucion", id],
    queryFn: () => get({ data: { id } }),
  });

  if (isLoading) return <DetailSkeleton />;
  if (!data?.ejecucion) return <p className="text-sm text-muted-foreground">Ejecución no encontrada.</p>;

  const { ejecucion } = data;
  const resultados = data.resultados ?? [];
  const cargo = ejecucion.cargos;
  const sueldoInterno = cargo?.sueldo != null ? Number(cargo.sueldo) : null;
  const analisis = data.analisis;
  const decision = data.decision;
  const preseleccion = data.preseleccion ?? [];
  const scoresDecision = (decision?.scores_utilizados ?? null) as {
    score_deterministico: number | null;
    score_semantico: number | null;
    score_final: number | null;
  } | null;
  void sueldoInterno;

  const validada = (analisis?.respuesta_validada ?? null) as {
    candidato_recomendado_id: string;
    score_semantico: number;
    confianza: number;
    similitudes: string[];
    diferencias: string[];
    explicacion_breve: string;
  } | null;

  // Exportaciones: sólo leen datos ya persistidos, nunca recalculan ni llaman a la IA.
  const n = (v: unknown) => (v == null || v === "" || Number.isNaN(Number(v)) ? null : Number(v));
  function datosInformeSync(): DatosInforme | null {
    if (!decision) return null;
    const bandas = data?.bandas ?? [];
    const banda = decision.tamano_empresa
      ? bandas.find((b) => b.tipo_empresa === decision.tamano_empresa)
      : undefined;

    type Fila = {
      candidato_id: string;
      nombre: string;
      codigo: string;
      empresa: string;
      scores: {
        score_deterministico?: number | null;
        score_semantico?: number | null;
        score_final?: number | null;
      };
    };
    const desdeResultado = (id: string) => resultados.find((r) => r.candidato_id === id);
    const filas: Fila[] = preseleccion.length
      ? preseleccion.map((p) => {
          const r = desdeResultado(p.candidato_id);
          const s = (p.scores_utilizados ?? {}) as Fila["scores"];
          return {
            candidato_id: p.candidato_id,
            nombre: p.cargos?.nombre ?? r?.cargos?.nombre ?? "",
            codigo: p.cargos?.codigo_cargo ?? r?.cargos?.codigo_cargo ?? "",
            empresa: p.cargos?.empresas?.nombre ?? r?.cargos?.empresas?.nombre ?? "",
            scores: {
              score_deterministico: s.score_deterministico ?? r?.score_deterministico ?? null,
              score_semantico: s.score_semantico ?? r?.score_semantico ?? null,
              score_final: s.score_final ?? r?.score_final ?? null,
            },
          };
        })
      : [
          {
            candidato_id: decision.candidato_id,
            nombre: decision.cargos?.nombre ?? "",
            codigo: decision.cargos?.codigo_cargo ?? "",
            empresa: decision.cargos?.empresas?.nombre ?? "",
            scores: {
              score_deterministico: scoresDecision?.score_deterministico ?? null,
              score_semantico: scoresDecision?.score_semantico ?? null,
              score_final: scoresDecision?.score_final ?? null,
            },
          },
        ];


    return {
      cargo: {
        codigo: cargo?.codigo_cargo ?? "", nombre: cargo?.nombre ?? "", empresa: cargo?.empresas?.nombre ?? "",
        area: cargo?.nombre_area ?? "", subarea: cargo?.nombre_subarea ?? "", nivel: cargo?.nivel_jerarquico ?? "",
        sueldo: cargo?.sueldo != null ? Number(cargo.sueldo) : null,
      },
      referencia: {
        nombre: decision.cargos?.nombre ?? "", codigo: decision.cargos?.codigo_cargo ?? "",
        empresa: decision.cargos?.empresas?.nombre ?? "",
      },
      decision: {
        analista: decision.usuario ?? "", fecha: decision.fecha ?? null,
        comentario: decision.comentario ?? "", tamano: decision.tamano_empresa ?? "",
      },
      ia: { modelo: analisis?.modelo ?? "", confianza: validada?.confianza ?? null, explicacion: validada?.explicacion_breve ?? "" },
      banda: banda
        ? { p25: n(banda.p25), p50: n(banda.p50), p75: n(banda.p75), promedio: n(banda.promedio), fuente: banda.fuente ?? "", anio: banda.anio ?? null }
        : null,
      candidatos: filas.map((f) => ({
        nombre: f.nombre, codigo: f.codigo, empresa: f.empresa,
        definitivo: f.candidato_id === decision.candidato_id,
        motor: n(f.scores.score_deterministico), semantico: n(f.scores.score_semantico), final: n(f.scores.score_final),
      })).sort((a, b) => (b.final ?? b.motor ?? -1) - (a.final ?? a.motor ?? -1)),
      fechaEjecucion: ejecucion.fecha ?? null,
    } satisfies DatosInforme;
  }
  async function exportar() {
    const d = datosInformeSync();
    if (d) await exportarExcel(d);
  }
  function exportarPdf() {
    const d = datosInformeSync();
    if (d && !abrirInformePdf(d)) toast.error("Permite ventanas emergentes para generar el informe PDF.");
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link to="/historial" className="text-sm text-muted-foreground hover:underline">
        ← Historial
      </Link>
      <h1 className="text-2xl font-semibold">{cargo?.nombre ?? "Ejecución"}</h1>
      <div className="text-sm text-muted-foreground">
        {cargo?.empresas?.nombre ?? "—"} · {formatFecha(ejecucion.fecha)} · Estado: {ejecucion.estado}
      </div>
      {cargo?.descripcion && <p className="text-sm">{cargo.descripcion}</p>}
      <div className="rounded-lg border p-4 text-sm">
        Sueldo del cargo interno: <strong>{formatSueldo(cargo?.sueldo)}</strong>
      </div>

      {analisis && (
        <section className="rounded-lg border p-4 text-sm">
          <h2 className="mb-2 text-lg font-medium">Análisis semántico</h2>
          {analisis.estado !== "OK" || !validada ? (
            <p className="text-destructive">
              El análisis semántico no pudo ejecutarse: {analisis.error_mensaje ?? "error desconocido"}.
              Los resultados determinísticos se mantienen sin cambios.
            </p>
          ) : (
            <div className="space-y-2">
              <p>
                Candidato recomendado:{" "}
                <strong>
                  {resultados.find((r) => r.candidato_id === validada.candidato_recomendado_id)?.cargos
                    ?.nombre ?? validada.candidato_recomendado_id}
                </strong>{" "}
                · score semántico {validada.score_semantico} · confianza {validada.confianza}
              </p>
              <p className="text-muted-foreground">{validada.explicacion_breve}</p>
              <p className="text-xs text-muted-foreground">
                Modelo {analisis.modelo} · prompt {analisis.prompt_version}
              </p>
            </div>
          )}
        </section>
      )}

      <section className="space-y-2">
        <h2 className="text-lg font-medium">Resultados</h2>
        {!resultados.length ? (
          <p className="text-sm text-muted-foreground">Sin resultados para esta homologación.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground">
              <tr>
                <th className="border-b py-2">Candidato</th>
                <th className="border-b py-2">Score motor</th>
                <th className="border-b py-2">Score semántico</th>
                <th className="border-b py-2">Score final</th>
              </tr>
            </thead>
            <tbody>
              {ordenarPorPuntaje(resultados, (r) =>
                r.score_final != null
                  ? Number(r.score_final) * 100
                  : r.score_semantico != null
                    ? Number(r.score_semantico)
                    : r.score_deterministico != null
                      ? Number(r.score_deterministico) * 100
                      : null,
              ).map((r) => (
                <tr key={r.id}>
                  <td className="border-b py-2">
                    {r.cargos?.nombre ?? "—"}
                    <div className="text-xs text-muted-foreground">
                      {r.cargos?.empresas?.nombre ?? ""}
                    </div>
                  </td>
                  <td className="border-b py-2">{pct(r.score_deterministico)}</td>
                  <td className="border-b py-2">
                    {r.score_semantico == null ? "Pendiente" : `${r.score_semantico}%`}
                  </td>
                  <td className="border-b py-2">
                    {r.score_final == null ? "Pendiente" : pct(r.score_final)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="rounded-lg border p-4 text-sm">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-medium">Decisión del analista</h2>
          {decision && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted"
                onClick={exportar}
              >
                Exportar Excel
              </button>
              <button
                type="button"
                className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted"
                onClick={exportarPdf}
              >
                Informe PDF
              </button>
            </div>
          )}
        </div>
        {decision ? (
          <div className="space-y-1">
            <p>
              Cargo homologado:{" "}
              <strong>{decision.cargos?.nombre ?? decision.candidato_id}</strong>
              {decision.cargos?.empresas?.nombre ? ` — ${decision.cargos.empresas.nombre}` : ""}
            </p>
            <p className="text-muted-foreground">
              Confirmado por {decision.usuario} · {formatFecha(decision.fecha)}
            </p>
            {decision.comentario && <p>{decision.comentario}</p>}
            <p className="text-xs text-muted-foreground">
              Scores al momento de decidir: motor {pct(scoresDecision?.score_deterministico)} · IA{" "}
              {scoresDecision?.score_semantico == null
                ? "—"
                : `${scoresDecision.score_semantico}%`}{" "}
              · final {pct(scoresDecision?.score_final)}
            </p>
            {preseleccion.length > 0 && (
              <div className="mt-3">
                <p className="mb-1 font-medium">Candidatos preseleccionados</p>
                <ul className="space-y-1">
                  {ordenarPorPuntaje(preseleccion, (p) => {
                    const s = (p.scores_utilizados ?? {}) as {
                      score_deterministico?: number | null;
                      score_semantico?: number | null;
                      score_final?: number | null;
                    };
                    return s.score_final != null
                      ? Number(s.score_final) * 100
                      : s.score_semantico != null
                        ? Number(s.score_semantico)
                        : s.score_deterministico != null
                          ? Number(s.score_deterministico) * 100
                          : null;
                  }).map((p) => {
                    const s = (p.scores_utilizados ?? {}) as {
                      score_deterministico?: number | null;
                      score_semantico?: number | null;
                      score_final?: number | null;
                    };
                    const definitivo = p.candidato_id === decision.candidato_id;
                    return (
                      <li
                        key={p.candidato_id}
                        className={`border-b py-1 ${definitivo ? "font-semibold text-primary" : ""}`}
                      >
                        {p.cargos?.nombre ?? p.candidato_id}
                        {p.cargos?.empresas?.nombre ? ` — ${p.cargos.empresas.nombre}` : ""}
                        {definitivo ? " · Definitivo" : ""}
                        <div className="text-xs font-normal text-muted-foreground">
                          Motor {pct(s.score_deterministico)} · Semántico{" "}
                          {s.score_semantico == null ? "—" : `${s.score_semantico}%`} · Final{" "}
                          {pct(s.score_final)}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {(() => {
              const def = resultados.find((r) => r.candidato_id === decision.candidato_id)?.cargos;
              if (!cargo || !def) return null;
              return (
                <section className="espejo-block">
                  <h3>Vista espejo: cargo interno frente al cargo homologado</h3>
                  <VistaEspejo
                    etiquetaB="Cargo homologado"
                    interno={{
                      nombre: cargo.nombre,
                      codigo_cargo: cargo.codigo_cargo,
                      empresa_nombre: cargo.empresas?.nombre ?? null,
                      nombre_area: cargo.nombre_area,
                      nombre_subarea: cargo.nombre_subarea,
                      nivel_jerarquico: cargo.nivel_jerarquico,
                      requisitos_formacion: cargo.requisitos_formacion,
                      experiencia_requerida: cargo.experiencia_requerida,
                      descripcion: cargo.descripcion,
                    }}
                    candidato={{
                      nombre: def.nombre,
                      codigo_cargo: def.codigo_cargo,
                      empresa_nombre: def.empresas?.nombre ?? null,
                      nombre_area: def.nombre_area,
                      nombre_subarea: def.nombre_subarea,
                      nivel_jerarquico: def.nivel_jerarquico,
                      requisitos_formacion: def.requisitos_formacion,
                      experiencia_requerida: def.experiencia_requerida,
                      descripcion: def.descripcion,
                    }}
                  />
                </section>
              );
            })()}
          </div>

        ) : (
          <DecisionForm
            ejecucionId={id}
            candidatos={resultados.map((r) => ({
              id: r.candidato_id,
              nombre: r.cargos?.nombre ?? r.candidato_id,
              empresa: r.cargos?.empresas?.nombre ?? null,
              score_deterministico: r.score_deterministico,
              score_semantico: r.score_semantico,
              score_final: r.score_final,
            }))}
            sugerido={validada?.candidato_recomendado_id ?? null}
            sueldoInterno={cargo?.sueldo ?? null}
            interno={
              cargo
                ? {
                    nombre: cargo.nombre,
                    codigo_cargo: cargo.codigo_cargo,
                    empresa_nombre: cargo.empresas?.nombre ?? null,
                    nombre_area: cargo.nombre_area,
                    nombre_subarea: cargo.nombre_subarea,
                    nivel_jerarquico: cargo.nivel_jerarquico,
                    requisitos_formacion: cargo.requisitos_formacion,
                    experiencia_requerida: cargo.experiencia_requerida,
                    descripcion: cargo.descripcion,
                  }
                : undefined
            }
            fichas={Object.fromEntries(
              resultados
                .filter((r) => r.cargos)
                .map((r) => [
                  r.candidato_id,
                  {
                    nombre: r.cargos!.nombre,
                    codigo_cargo: r.cargos!.codigo_cargo,
                    empresa_nombre: r.cargos!.empresas?.nombre ?? null,
                    nombre_area: r.cargos!.nombre_area,
                    nombre_subarea: r.cargos!.nombre_subarea,
                    nivel_jerarquico: r.cargos!.nivel_jerarquico,
                    requisitos_formacion: r.cargos!.requisitos_formacion,
                    experiencia_requerida: r.cargos!.experiencia_requerida,
                    descripcion: r.cargos!.descripcion,
                  },
                ]),
            )}
          />
        )}
      </section>

      {decision && (
        <section className="rounded-lg border p-4 text-sm">
          <h2 className="mb-2 text-lg font-medium">Comparación salarial</h2>
          <BenchmarkPanel
            ejecucionId={id}
            cargoInterno={cargo?.nombre ?? ""}
            cargoReferencia={decision.cargos?.nombre ?? decision.candidato_id}
            sueldoInterno={cargo?.sueldo ?? null}
            bandas={data.bandas ?? []}
            tamanoGuardado={(decision.tamano_empresa as "P" | "M" | "G" | null) ?? null}
          />
        </section>
      )}

    </div>
  );
}
