# Documentación de Espejo · Homologa

Piloto web de homologación de cargos por contenido, con cálculo determinístico, análisis semántico y benchmark salarial separados.

## Documentación por cuatro tipos

| Tipo                    | Qué encontrarás                                                 | Por dónde empezar                                                                                                                                |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| General                 | Problemática, público, solución y motivación personal           | [Propuesta](00-problematica-cliente-y-valor.md) · [Origen](16-motivacion-y-contexto.md)                                                          |
| Técnica                 | Arquitectura, dominio, datos, interfaz y puesta en marcha       | [Arquitectura](01-arquitectura-general.md) · [Instalación](09-instalacion-y-despliegue.md)                                                       |
| Desarrollo del proyecto | Etapas, metodología, justificación, proyección y costos CLP/USD | [Metodología](17-desarrollo-y-metodologia.md) · [Proyección](15-escalabilidad-y-nuevos-mercados.md) · [Costos](18-analisis-economico-clp-usd.md) |
| Académica/formativa     | Contexto del curso, informes y anexos de la etapa formativa     | [Catálogo académico](academica/README.md)                                                                                                        |

## Rutas de lectura

- **Conocer el proyecto:** [propuesta](00-problematica-cliente-y-valor.md) → [motivación](16-motivacion-y-contexto.md) → [funcionalidades](02-funcionalidades.md).
- **Utilizarlo o desplegarlo:** [recorrido](03-flujo-de-usuario.md) → [instalación](09-instalacion-y-despliegue.md).
- **Desarrollar o contribuir:** [arquitectura](01-arquitectura-general.md) → [dominio y datos](04-base-de-datos.md) → [reglas](05-motor-o-nucleo-de-negocio.md).
- **Evaluar su evolución:** [metodología](17-desarrollo-y-metodologia.md) → [proyección](15-escalabilidad-y-nuevos-mercados.md) → [costos](18-analisis-economico-clp-usd.md).

## Tabla de contenidos

| Capítulo | Documento                                                                          |
| -------- | ---------------------------------------------------------------------------------- |
| 00       | [Problemática, cliente y propuesta de valor](00-problematica-cliente-y-valor.md)   |
| 01       | [Arquitectura por niveles](01-arquitectura-general.md)                             |
| 02       | [Funcionalidades por pestaña](02-funcionalidades.md)                               |
| 03       | [Recorrido y estados](03-flujo-de-usuario.md)                                      |
| 04       | [Base de datos](04-base-de-datos.md)                                               |
| 05       | [Reglas y núcleo](05-motor-o-nucleo-de-negocio.md)                                 |
| 06       | [Integraciones y asistencia](06-capa-de-ia-o-analisis.md)                          |
| 07       | [Diseño y accesibilidad](07-diseno-e-identidad.md)                                 |
| 08       | [Salidas y entregables](08-exportacion-e-informes.md)                              |
| 09       | [Puesta en marcha y distribución](09-instalacion-y-despliegue.md)                  |
| 15       | [Justificación, proyección y escalabilidad](15-escalabilidad-y-nuevos-mercados.md) |
| 16       | [Motivación personal y contexto](16-motivacion-y-contexto.md)                      |
| 17       | [Etapas y metodología](17-desarrollo-y-metodologia.md)                             |
| 18       | [Escenarios económicos CLP / USD](18-analisis-economico-clp-usd.md)                |

## Guías especializadas

- [Arquitectura](01-arquitectura.md).
- [Flujo de homologación](03-flujo-homologacion.md).
- [Importación de planillas](05-importacion-excel.md).
- [Motor determinístico](06-motor-deterministico.md).
- [Análisis semántico](07-analisis-semantico.md).
- [Dependencias](08-dependencias.md).
- [Deploy y entorno](09-deploy-y-entorno.md).
- [Mantenimiento y operación](10-mantenimiento.md).
- [Normalización de experiencia y formación](11-normalizacion.md).
- [Resiliencia de la IA](12-resiliencia-ia.md).
- [Decisión, benchmark y exportación](13-decision-benchmark-exportacion.md).
- [Identidad visual y experiencia](14-identidad-y-experiencia.md).
- [Escalabilidad: de la homologación al reclutamiento](15-escalabilidad-y-reclutamiento.md).

- [**Problemática, cliente y valor**](./00-problematica-cliente-y-valor.md).
- [Arquitectura](./01-arquitectura.md).
- [Funcionalidades](./02-funcionalidades.md).
- [Flujo de homologación](./03-flujo-homologacion.md).
- [Base de datos](./04-base-de-datos.md).
- [Importación de Excel](./05-importacion-excel.md).
- [Motor determinístico](./06-motor-deterministico.md).
- [Análisis semántico](./07-analisis-semantico.md).
- [Dependencias](./08-dependencias.md).
- [Deploy y entorno](./09-deploy-y-entorno.md).
- [Mantenimiento y operación](./10-mantenimiento.md).
- [Normalización de experiencia y formación](./11-normalizacion.md).
- [Resiliencia de la IA](./12-resiliencia-ia.md).
- [Decisión, benchmark y exportación](./13-decision-benchmark-exportacion.md).
- [Identidad visual y experiencia](./14-identidad-y-experiencia.md).
- [**Escalabilidad y reclutamiento**](./15-escalabilidad-y-reclutamiento.md).
- [capítulo 15](./15-escalabilidad-y-reclutamiento.md).

## Principios que rigen el proyecto

1. **Sin datos ficticios.** Nada se inventa ni se completa automáticamente.
2. **El sueldo no homologa.** La remuneración es informativa; nunca entra al score ni a la IA.
3. **El motor manda.** La IA sólo interpreta candidatos ya preseleccionados por reglas.
4. **El código manda sobre el nombre.** Áreas, subáreas y niveles se identifican por código; se
   conserva el nombre original de cada fuente.
5. **La IA traduce, no juzga.** En la normalización convierte texto a datos; no decide equivalencias.
6. **Reproducibilidad.** La ponderación aplicada se guarda en cada ejecución.
7. **Separación estricta** entre base de datos, lógica de negocio y presentación.

## El núcleo obligatorio del producto

Identidad (espejo / reflejo) · UX guiada paso a paso · robustez percibida · control del analista ·
accesibilidad · responsive completo. Todo lo demás —autenticación, multiempresa, predicción
salarial, analítica avanzada, multilenguaje— es opcional y no está implementado.

## Uso y distribución

[Presentación y descargas](../README.md) · [Licencia y créditos](../LICENSING.md).
