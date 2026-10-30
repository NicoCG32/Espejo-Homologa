# 17 — Etapas y metodología

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** desarrollo del proyecto.

## Desarrollo del proyecto: etapas y método

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

Piloto formativo construido por incrementos de importación, reglas, semántica, decisión e informes. Los commits y capítulos existentes permiten reconstruir etapas, pero no certifican prácticas Scrum, usuarios contratados ni resultados de negocio no medidos.

### Etapas reconstruidas de fuentes

| Etapa               | Evidencia / alcance                                                           |
| ------------------- | ----------------------------------------------------------------------------- |
| Contexto formativo  | Duplas Intergeneracionales / DesafíoLatam con patrocinio Entel                |
| Motor e importación | Normalización de empresas, cargos y criterios                                 |
| Decisión y mercado  | Semántica, preselección/selección y benchmark                                 |
| Validación          | Probar reproducibilidad, decisiones y exportaciones con escenarios apropiados |

El cuadro distingue hechos documentados y pendientes. Un archivo de planificación describe intención; un commit confirma contenido de código/documentación; una prueba/artefacto con procedencia aporta evidencia de comportamiento. No son intercambiables.

### Ciclo de trabajo y decisión

1. Caracterizar una necesidad y un escenario observable.
2. Revisar contratos, datos y límites del alcance.
3. Implementar o prototipar el incremento apropiado a la etapa.
4. Verificar el recorrido y sus errores relevantes; conservar resultados negativos.
5. Decidir continuar, corregir, limitar o posponer y actualizar documentación vigente.

Este ciclo es una propuesta de continuidad compatible con el método descrito arriba; no se afirma que todas las etapas históricas se ejecutaran con idéntica ceremonia o duración.

### Cierre y continuidad

La entrega identifica fuente, plataforma, límites, guía de uso e integridad de datos/artefactos. Los informes académicos conservan su etapa, cuando aplican, y no se actualizan como si fueran manuales del runtime. La proyección no obliga a desarrollar extensiones antes de validar el núcleo.

Justificación y prioridades: [15-escalabilidad-y-nuevos-mercados.md](15-escalabilidad-y-nuevos-mercados.md). Esfuerzo futuro y operación: [18-analisis-economico-clp-usd.md](18-analisis-economico-clp-usd.md).

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
