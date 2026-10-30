# 03 — Recorrido y estados

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** general / técnica.

## Recorrido operativo y estados

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

1. Importar planillas y revisar identidades/campos.
2. Elegir cargo interno, criterios y pesos.
3. Ejecutar filtros y cálculo sobre candidatos.
4. Revisar interpretación, preseleccionar y seleccionar.
5. Consultar benchmark y exportar la decisión con su contexto.

### Confirmación y resultado

El sueldo no homologa: no forma parte del score ni de la inferencia de equivalencia.

Preseleccionar varios y elegir finalmente uno son estados distintos; el score no es una aprobación humana.

En formularios/operaciones, distinguir captura, revisión, confirmación, resultado y fallo. Cancelar una previsualización no debe anunciar un cambio no confirmado; cuando existe una operación persistente, su recuperación sigue el contrato específico. En juegos, las fases de simulación se definen en el núcleo y la vista refleja esas transiciones.

### Criterio de aceptación del recorrido

Tiempo de homologación revisada, concordancia entre analistas y proporción de decisiones reproducibles; no se presume exactitud por tener un score.

Validar inicio, camino principal, error relevante, cancelación y reapertura según la plataforma; registrar también los escenarios aún no ejecutados. Para Espejo · Homologa, atender especialmente: datos incompletos o encuestas sin procedencia.

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
