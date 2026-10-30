# 08 — Salidas y entregables

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** técnica.

## Salidas, respaldo e informes

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

Informes Excel/PDF vinculados a ejecuciones, selección y bandas persistidas. Una exportación no debe recalcular silenciosamente con pesos/proveedor nuevos. Datos salariales ausentes se mantienen como no disponibles.

### Separación de entregables

- **Resultado de uso:** información/experiencia que obtiene la persona al completar el recorrido.
- **Datos o respaldo:** sólo los formatos explícitamente implementados y su contrato de restauración.
- **Distribución:** aplicación, APK, ZIP o firmware, con fuente y versión; no incluye datos privados por defecto.
- **Documentación académica:** informes/anexos históricos, cuando el origen formativo aplica; se catalogan en su cuarto nivel, sin reescribirlos como especificación vigente.

Cuando un informe representa una decisión calculada, identificar resultados/datos de origen y sus versiones. Si la exportación recalcula por diseño, declararlo; no afirmar inmutabilidad inexistente. Para un proyecto sin exportador funcional, este texto delimita lo que falta y no lo presenta como disponible.

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
