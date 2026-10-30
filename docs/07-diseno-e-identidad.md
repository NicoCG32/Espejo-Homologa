# 07 — Diseño y accesibilidad

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** técnica / producto.

## Identidad y experiencia de uso

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

Identidad del espejo, marcas diferenciadas para presentación y navegación, tokens semánticos, skeletons que preservan layout y estados de espera de cálculo/IA. La UI debe separar claramente score, advertencia, preselección y decisión.

### Criterios verificables

- Estados vacíos, carga, confirmación y error distinguibles por texto además de color.
- Orden de foco, teclado y nombres accesibles cuando la plataforma los utilice.
- Legibilidad y controles suficientes para el dispositivo objetivo; considerar área segura y ciclo de vida en móvil.
- Evitar que animación, espera o respuesta tardía apliquen efectos ajenos a la selección vigente.

Son criterios de revisión, no certificaciones de accesibilidad ya obtenidas. La aceptación se registra por resolución/plataforma y recorrido; no se extrapola desde una captura aislada.

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
