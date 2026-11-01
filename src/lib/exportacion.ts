// Exportaciones de una homologación cerrada. Sólo leen datos persistidos:
// nunca recalculan el motor ni llaman a la IA.
import { formatFecha } from "@/lib/format";

export type FilaCandidato = {
  nombre: string;
  codigo: string;
  empresa: string;
  definitivo: boolean;
  motor: number | null; // 0–1
  semantico: number | null; // 0–100
  final: number | null; // 0–1
};

export type DatosInforme = {
  cargo: {
    codigo: string;
    nombre: string;
    empresa: string;
    area: string;
    subarea: string;
    nivel: string;
    sueldo: number | null;
  };
  referencia: { nombre: string; codigo: string; empresa: string };
  decision: { analista: string; fecha: string | null; comentario: string; tamano: string };
  ia: { modelo: string; confianza: number | string | null; explicacion: string };
  banda: {
    p25: number | null;
    p50: number | null;
    p75: number | null;
    promedio: number | null;
    fuente: string;
    anio: string | number | null;
  } | null;
  candidatos: FilaCandidato[];
  fechaEjecucion: string | null;
};

const num = (v: unknown) => (v == null || v === "" || Number.isNaN(Number(v)) ? null : Number(v));

export function brechas(d: DatosInforme) {
  const s = d.cargo.sueldo;
  const b = d.banda;
  return (["P25", "P50", "P75", "Promedio"] as const).map((k) => {
    const enc = num(
      b ? (k === "Promedio" ? b.promedio : b[k.toLowerCase() as "p25" | "p50" | "p75"]) : null,
    );
    const dif = s != null && enc != null ? s - enc : null;
    const pct = dif != null && enc ? (dif / enc) * 100 : null;
    return { k, enc, emp: s, dif, pct };
  });
}

export function nombreArchivo(d: DatosInforme, ext: string) {
  const n =
    d.cargo.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Za-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 60) || "cargo";
  const f = new Date(d.fechaEjecucion ?? Date.now()).toISOString().slice(0, 10);
  return `homologacion_${n}_${f}.${ext}`;
}

export async function exportarExcel(d: DatosInforme) {
  const XLSX = await import("xlsx");
  const libro = XLSX.utils.book_new();
  const resumen: (string | number | null)[][] = [
    ["Espejo · Homologa — Resumen de homologación"],
    [],
    ["Cargo interno", d.cargo.nombre],
    ["Código", d.cargo.codigo],
    ["Empresa", d.cargo.empresa],
    ["Área / Subárea", `${d.cargo.area} / ${d.cargo.subarea}`],
    ["Nivel jerárquico", d.cargo.nivel],
    [],
    ["Referencia homologada", d.referencia.nombre],
    ["Código referencia", d.referencia.codigo],
    ["Empresa referencia", d.referencia.empresa],
    [],
    ["Analista responsable", d.decision.analista],
    ["Fecha de cierre", d.decision.fecha ? formatFecha(d.decision.fecha) : ""],
    ["Comentario", d.decision.comentario],
    ["Tamaño de empresa (benchmark)", d.decision.tamano],
    [],
    ["Modelo IA", d.ia.modelo],
    ["Confianza IA", d.ia.confianza ?? ""],
    ["Explicación IA", d.ia.explicacion],
  ];
  const h1 = XLSX.utils.aoa_to_sheet(resumen);
  h1["!cols"] = [{ wch: 30 }, { wch: 80 }];
  XLSX.utils.book_append_sheet(libro, h1, "Resumen");

  const cand = [
    ["Código", "Cargo", "Empresa", "Selección", "Score motor", "Score semántico", "Score final"],
    ...d.candidatos.map((c) => [
      c.codigo,
      c.nombre,
      c.empresa,
      c.definitivo ? "Definitivo" : "Preseleccionado",
      c.motor != null ? c.motor : "",
      c.semantico != null ? c.semantico / 100 : "",
      c.final != null ? c.final : "",
    ]),
  ];
  const h2 = XLSX.utils.aoa_to_sheet(cand);
  for (let r = 1; r < cand.length; r++)
    for (const c of ["E", "F", "G"]) {
      const cell = h2[`${c}${r + 1}`];
      if (cell && typeof cell.v === "number") cell.z = "0.0%";
    }
  h2["!cols"] = [
    { wch: 14 },
    { wch: 40 },
    { wch: 28 },
    { wch: 16 },
    { wch: 13 },
    { wch: 15 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(libro, h2, "Candidatos y scores");

  const rows: (string | number | null)[][] = [
    ["Estadígrafo", "Encuesta", "Remuneración empresa", "Diferencia", "Brecha %"],
  ];
  brechas(d).forEach((b, i) => {
    const r = i + 2;
    rows.push([
      b.k,
      b.enc ?? "No disponible",
      b.emp ?? "No informada",
      b.enc != null && b.emp != null ? `=C${r}-B${r}` : "No disponible",
      b.enc != null && b.emp != null && b.enc !== 0 ? `=(C${r}-B${r})/B${r}` : "No disponible",
    ]);
  });
  rows.push(
    [],
    ["Fuente", d.banda?.fuente ?? ""],
    ["Año", d.banda?.anio ?? ""],
    ["Tamaño", d.decision.tamano],
  );
  const h3 = XLSX.utils.aoa_to_sheet(rows);
  for (let r = 2; r <= 5; r++) {
    for (const c of ["B", "C", "D"]) {
      const x = h3[`${c}${r}`];
      if (x) {
        if (typeof x.v === "string" && x.v.startsWith("=")) {
          x.f = x.v.slice(1);
          x.t = "n";
          delete x.v;
        }
        if (x.t === "n") x.z = "$#,##0;($#,##0);-";
      }
    }
    const e = h3[`E${r}`];
    if (e && typeof e.v === "string" && e.v.startsWith("=")) {
      e.f = e.v.slice(1);
      e.t = "n";
      delete e.v;
      e.z = "0.0%";
    }
  }
  h3["!cols"] = [{ wch: 14 }, { wch: 16 }, { wch: 22 }, { wch: 16 }, { wch: 12 }];
  XLSX.utils.book_append_sheet(libro, h3, "Comparación salarial");

  XLSX.writeFile(libro, nombreArchivo(d, "xlsx"));
}

const esc = (s: unknown) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!,
  );
const clp = (v: number | null) =>
  v == null ? "No disponible" : `$${Math.round(v).toLocaleString("es-CL")}`;
const pc = (v: number | null, f = 1) => (v == null ? "—" : `${(v * f).toFixed(1)}%`);

function grafico(d: DatosInforme) {
  // La remuneración interna sólo figura en la tabla de brechas, nunca en el gráfico.
  // Así, el gráfico representa únicamente los cuatro estadígrafos de la encuesta.
  const items = brechas(d);
  const valoresEncuesta = items.map((item) => item.enc).filter((v): v is number => v != null);
  if (!valoresEncuesta.length) return `<p class="muted">Sin datos de mercado para graficar.</p>`;

  const max = Math.max(...valoresEncuesta, 1) * 1.15;
  const ancho = 640;
  const alto = 238;
  const base = 188;
  const alturaUtil = 155;
  const columna = ancho / items.length;
  const anchoBarra = 58;
  const barras = items
    .map((item, indice) => {
      const centro = indice * columna + columna / 2;
      const nombre = `<text x="${centro}" y="${base + 23}" text-anchor="middle" font-size="12" fill="#334155">${item.k}</text>`;
      if (item.enc == null) {
        return `<text x="${centro}" y="${base - 12}" text-anchor="middle" font-size="11" fill="#64748B">Sin dato</text>${nombre}`;
      }
      const altura = (Math.max(0, item.enc) / max) * alturaUtil;
      const x = centro - anchoBarra / 2;
      const y = base - altura;
      return `<rect x="${x}" y="${y}" width="${anchoBarra}" height="${altura}" fill="#1E3A8A" rx="3"/><text x="${centro}" y="${Math.max(15, y - 8)}" text-anchor="middle" font-size="11" fill="#334155">${esc(clp(item.enc))}</text>${nombre}`;
    })
    .join("");

  return `<div class="muted">Bandas de encuesta · ${esc(d.decision.tamano || "Tamaño no indicado")}</div>
  <svg viewBox="0 0 ${ancho} ${alto}" width="100%" role="img" aria-label="Gráfico de los estadígrafos P25, P50, P75 y promedio de la encuesta"><line x1="0" y1="${base}" x2="${ancho}" y2="${base}" stroke="#CBD5E1"/>${barras}</svg>`;
}

export function abrirInformePdf(d: DatosInforme) {
  const w = window.open("", "_blank");
  if (!w) return false;
  const logo = new URL(
    "/brand/espejo-logo-horizontal-claro.svg?v=3",
    window.location.origin,
  ).toString();
  const filas = brechas(d)
    .map(
      (b) =>
        `<tr><td>${b.k}</td><td>${clp(b.enc)}</td><td>${b.emp == null ? "No informada" : clp(b.emp)}</td><td>${b.dif == null ? "No disponible" : clp(b.dif)}</td><td>${b.pct == null ? "No disponible" : `${b.pct.toFixed(1)}%`}</td></tr>`,
    )
    .join("");
  const cand = d.candidatos
    .map(
      (c) =>
        `<tr class="${c.definitivo ? "def" : ""}"><td>${esc(c.nombre)}<div class="muted">${esc(c.codigo)} · ${esc(c.empresa)}</div></td><td>${c.definitivo ? "Definitivo" : "Preseleccionado"}</td><td>${pc(c.motor, 100)}</td><td>${c.semantico == null ? "—" : `${c.semantico}%`}</td><td>${pc(c.final, 100)}</td></tr>`,
    )
    .join("");
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(nombreArchivo(d, "pdf"))}</title>
<style>
@page{size:A4;margin:14mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:Arial,Helvetica,sans-serif;color:#0F172A;font-size:11px;margin:0}
header{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #1E3A8A;padding-bottom:10px;margin-bottom:14px}
header img{height:54px;object-fit:contain}h1{font-size:18px;margin:0;color:#1E3A8A}h2{font-size:13px;color:#1E3A8A;margin:16px 0 6px;border-bottom:1px solid #E2E8F0;padding-bottom:3px}
.muted{color:#64748B;font-size:10px}.espejo{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.card{border:1px solid #CBD5E1;border-radius:6px;padding:10px;break-inside:avoid}.card b{display:block;font-size:12px;margin:3px 0}
.tag{font-size:9px;text-transform:uppercase;letter-spacing:.06em;color:#0D9488;font-weight:700}
table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:5px 6px;border-bottom:1px solid #E2E8F0}th{background:#F1F5F9;font-size:10px}
tr{break-inside:avoid}tr.def td{background:#FEF9C3;font-weight:600}
.legend{display:flex;gap:16px;justify-content:center;font-size:10px}.legend i{display:inline-block;width:10px;height:10px;margin-right:4px;border-radius:2px}
.firma{margin-top:36px;display:flex;justify-content:space-between;gap:30px;break-inside:avoid}.firma div{flex:1;border-top:1px solid #0F172A;padding-top:4px;text-align:center}
.nota{font-size:9px;color:#64748B;margin-top:14px}
</style></head><body>
<header><div><h1>Informe ejecutivo de homologación</h1><div class="muted">Generado ${esc(formatFecha(new Date().toISOString()))}</div></div><img src="${logo}" alt="Espejo Homologa"></header>
<div class="espejo">
<div class="card"><span class="tag">Cargo interno</span><b>${esc(d.cargo.nombre)}</b>${esc(d.cargo.codigo)} · ${esc(d.cargo.empresa)}<div class="muted">${esc(d.cargo.area)} / ${esc(d.cargo.subarea)} · Nivel ${esc(d.cargo.nivel)}</div></div>
<div class="card"><span class="tag">Referencia homologada</span><b>${esc(d.referencia.nombre)}</b>${esc(d.referencia.codigo)} · ${esc(d.referencia.empresa)}<div class="muted">Benchmark: ${esc(d.decision.tamano || "—")}${d.banda?.fuente ? ` · ${esc(d.banda.fuente)}` : ""}${d.banda?.anio ? ` ${esc(d.banda.anio)}` : ""}</div></div>
</div>
<h2>Benchmark · valores de encuesta</h2>${grafico(d)}
<h2>Comparación salarial y brechas</h2>
<table><thead><tr><th>Estadígrafo</th><th>Encuesta</th><th>Remuneración empresa</th><th>Diferencia</th><th>Brecha %</th></tr></thead><tbody>${filas}</tbody></table>
<h2>Candidatos evaluados</h2>
<table><thead><tr><th>Cargo</th><th>Selección</th><th>Motor</th><th>Semántico</th><th>Final</th></tr></thead><tbody>${cand}</tbody></table>
${d.ia.explicacion ? `<h2>Análisis semántico</h2><p>${esc(d.ia.explicacion)}</p><div class="muted">Modelo ${esc(d.ia.modelo)} · confianza ${esc(d.ia.confianza)}</div>` : ""}
<h2>Decisión del analista</h2><p>${esc(d.decision.comentario || "Sin comentario.")}</p>
<div class="firma"><div>${esc(d.decision.analista || "Analista")}<div class="muted">Analista responsable</div></div><div>${esc(d.decision.fecha ? formatFecha(d.decision.fecha) : "")}<div class="muted">Fecha de cierre</div></div></div>
<p class="nota">La remuneración informa la decisión humana; no participa en la homologación ni en los puntajes.</p>
<script>const i=document.querySelector('img');const go=()=>setTimeout(()=>window.print(),200);i.complete?go():(i.onload=go,i.onerror=go);</script>
</body></html>`;
  w.document.open();
  w.document.write(html);
  w.document.close();
  return true;
}
