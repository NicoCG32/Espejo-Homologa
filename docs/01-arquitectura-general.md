# 01 — Arquitectura por niveles

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** técnica.

## Arquitectura del sistema por niveles

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

### Nivel 1 — Contexto y fronteras de ejecución

```text
[Analista: planillas / criterios] -> [React / TanStack Start]
                                             | RPC validado
                                             v
                                    [Funciones servidor]
                                      |             |
                                      v             v
                               [Motor puro]    [Análisis semántico]
                                      |             |
                                      +------v------+
                                  [PostgreSQL / resultados]
                                             |
                                [Selección y benchmark / Excel-PDF]
```

Importa planillas, conserva empresas/cargos/diccionario, aplica filtros y ponderaciones determinísticas, añade lectura semántica de candidatos y separa preselección de selección final. El sueldo se consulta al final como referencia de mercado, sin participar en la homologación.

### Nivel 2 — Componentes y responsabilidades

| Componente    | Responsabilidad                     | Fuente                                                                    |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| RPC           | Validación y orquestación servidor  | [src/lib/homologacion.functions.ts](../src/lib/homologacion.functions.ts) |
| Núcleo        | Cálculo y descartes determinísticos | [src/lib/motor.server.ts](../src/lib/motor.server.ts)                     |
| Normalización | Experiencia/formación y huella      | [src/lib/normalizacion.server.ts](../src/lib/normalizacion.server.ts)     |
| Semántica     | Comparación asistida de candidatos  | [src/lib/semantica.server.ts](../src/lib/semantica.server.ts)             |
| Persistencia  | Migraciones y seguridad del esquema | [drizzle/migrations](../drizzle/migrations)                               |

Las flechas del contexto representan comunicación/flujo. No se deduce una dependencia de código o transacción compartida sólo porque dos componentes intercambien datos.

### Nivel 3 — Dominio, contratos y adaptadores

PostgreSQL gestionado y acceso desde funciones servidor según contrato actual. Criterios usados, estados y resultados se persisten para trazabilidad. Un NULL salarial significa dato no disponible, no cero. Revisar migraciones y políticas efectivamente aplicadas; no afirmar seguridad de producción sólo por tener SQL en Git.

- El sueldo no homologa: no forma parte del score ni de la inferencia de equivalencia.
- Los campos obligatorios pueden descartar candidatos antes de ponderarlos.
- Los pesos de la ejecución deben quedar capturados para reproducirla.

Consultar [04-base-de-datos.md](04-base-de-datos.md) para entidades, cardinalidades y representación; [05-motor-o-nucleo-de-negocio.md](05-motor-o-nucleo-de-negocio.md) para invariantes. En un prototipo, las piezas rotuladas propuestas no son clases implementadas.

### Nivel 4 — Despliegue y distribución

**Destino:** Webpage con servidor.

```text
[Revisión de fuente] -> [Verificación de su plataforma] -> [Build / artefacto]
                                                                  |
                                                          [Instalación / hosting]
                                                                  |
                                                          [Usuario y sus datos]
```

La persistencia y los servicios del contexto anterior conservan sus propias fronteras. Distribuir un APK no incorpora automáticamente el servidor, una PWA no acredita un instalador y el firmware requiere dispositivo. El capítulo [09-instalacion-y-despliegue.md](09-instalacion-y-despliegue.md) concreta la puesta en marcha.

### Calidad y límites arquitectónicos

- Datos incompletos o encuestas sin procedencia
- Confundir ranking de similitud con decisión salarial
- Latencia/costos y variación de respuesta semántica
- Aislamiento y recuperación de resultados

No se publican garantías de latencia, disponibilidad o escala sin medición para la revisión/entorno concretos. Un diagrama explica responsabilidades; no es una certificación de ejecución o seguridad del servicio desplegado.

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
