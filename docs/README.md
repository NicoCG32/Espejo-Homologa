# Documentación — Espejo: Homologa

<!-- DOCUMENTACION:indice-niveles-2026-10-29:BEGIN -->

## Documentación por cuatro niveles — 2026-10-29

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

| Nivel                      | Pregunta principal                                                    | Lectura                                                  |
| -------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------- |
| 1. General                 | Qué problema, para quién, qué solución y por qué lo eligió el creador | 00, 02, 03 y 16                                          |
| 2. Técnica                 | Cómo funciona, entidades, persistencia y ejecución                    | 01, 04, 05, 06, 07, 08 y 09                              |
| 3. Desarrollo del proyecto | Cómo se llegó, por qué corresponde y qué cuesta continuar             | 17, 15 y 18                                              |
| 4. Académica/formativa     | Qué se entregó en un curso y a qué etapa pertenece                    | [Documentación académica/formativa](academica/README.md) |

### Rutas por lector

- **Dirección/cliente/responsable:** 00 → 16 → 01 → 15 → 18.
- **Desarrollo/técnica:** 01 → 04 → 05 → 06 → 09; complementar con las guías especializadas conservadas.
- **Producto/operaciones:** 00 → 02 → 03 → 07 → 08 → 17.
- **Académica/formativa:** contexto de 16 y catálogo del nivel 4 cuando corresponda; contrastar luego con la arquitectura vigente.

| Capítulo | Documento                                                                          | Nivel                   |
| -------- | ---------------------------------------------------------------------------------- | ----------------------- |
| 00       | [Problemática, cliente y solución](00-problematica-cliente-y-valor.md)             | general                 |
| 01       | [Arquitectura por niveles](01-arquitectura-general.md)                             | técnica                 |
| 02       | [Catálogo funcional](02-funcionalidades.md)                                        | general / técnica       |
| 03       | [Recorrido y estados](03-flujo-de-usuario.md)                                      | general / técnica       |
| 04       | [Dominio, entidades y persistencia](04-base-de-datos.md)                           | técnica                 |
| 05       | [Reglas y núcleo](05-motor-o-nucleo-de-negocio.md)                                 | técnica                 |
| 06       | [Integraciones y asistencia](06-capa-de-ia-o-analisis.md)                          | técnica                 |
| 07       | [Diseño y accesibilidad](07-diseno-e-identidad.md)                                 | técnica / producto      |
| 08       | [Salidas y entregables](08-exportacion-e-informes.md)                              | técnica                 |
| 09       | [Puesta en marcha y distribución](09-instalacion-y-despliegue.md)                  | técnica                 |
| 15       | [Justificación, proyección y escalabilidad](15-escalabilidad-y-nuevos-mercados.md) | desarrollo del proyecto |
| 16       | [Motivación personal y contexto](16-motivacion-y-contexto.md)                      | general                 |
| 17       | [Etapas y metodología](17-desarrollo-y-metodologia.md)                             | desarrollo del proyecto |
| 18       | [Escenarios económicos CLP / USD](18-analisis-economico-clp-usd.md)                | desarrollo del proyecto |

Los nuevos capítulos complementan las fuentes especializadas existentes; no reemplazan contratos detallados por resúmenes. Los originales académicos se conservan intactos. La documentación del desarrollo describe etapas/metodología del producto y no contiene instrucciones o conversaciones internas.
<!-- DOCUMENTACION:indice-niveles-2026-10-29:END -->

Documentación técnica y funcional del piloto. Cada archivo cubre una capa del sistema y puede
leerse por separado.

**Rutas de lectura:**

- **Negocio, dirección o inversión:** 00 → 15 → 02.
- **Técnica:** 01 → 02 → 03 y después el resto según necesidad.

## Índice

| #   | Documento                                                                   | Contenido                                                                         |
| --- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 00  | [**Problemática, cliente y valor**](./00-problematica-cliente-y-valor.md)   | **Dolor, arquetipos de cliente, solución, justificación y viabilidad**            |
| 01  | [Arquitectura](./01-arquitectura.md)                                        | Stack, capas, límites cliente/servidor, estructura de carpetas                    |
| 02  | [Funcionalidades](./02-funcionalidades.md)                                  | Qué hace cada pestaña de la aplicación                                            |
| 03  | [Flujo de homologación](./03-flujo-homologacion.md)                         | Paso a paso del recorrido profesional y del cálculo                               |
| 04  | [Base de datos](./04-base-de-datos.md)                                      | Tablas, enums, relaciones, índices y seguridad                                    |
| 05  | [Importación de Excel](./05-importacion-excel.md)                           | Formatos aceptados, validación, empresas automáticas                              |
| 06  | [Motor determinístico](./06-motor-deterministico.md)                        | Criterios, pesos, descartes y cálculo del score                                   |
| 07  | [Análisis semántico](./07-analisis-semantico.md)                            | Contrato con la IA, restricciones y persistencia                                  |
| 08  | [Dependencias](./08-dependencias.md)                                        | Librerías usadas y para qué                                                       |
| 09  | [Deploy y entorno](./09-deploy-y-entorno.md)                                | Variables, secretos, publicación y desarrollo local                               |
| 10  | [Mantenimiento y operación](./10-mantenimiento.md)                          | Reinicio de datos, migraciones, diagnóstico                                       |
| 11  | [Normalización de experiencia y formación](./11-normalizacion.md)           | Ficha mínima, caché por huella, degradación                                       |
| 12  | [Resiliencia de la IA](./12-resiliencia-ia.md)                              | Reintentos, proveedor de respaldo, mensajes al usuario                            |
| 13  | [Decisión, benchmark y exportación](./13-decision-benchmark-exportacion.md) | Dos etapas, mercado y salida a Excel                                              |
| 14  | [Identidad visual y experiencia](./14-identidad-y-experiencia.md)           | Metáfora del espejo, tono, estados y responsive                                   |
| 15  | [**Escalabilidad y reclutamiento**](./15-escalabilidad-y-reclutamiento.md)  | **Apunte estratégico:** otros usos del motor, pros, contras y potencia del modelo |

> **Destacado:** el motor es un calce genérico _perfil requerido ↔ perfiles disponibles_.
> Ver el [capítulo 15](./15-escalabilidad-y-reclutamiento.md) para su extensión a reclutamiento,
> movilidad interna y planes de carrera.

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

<!-- INDICE:uso-y-licencia -->

## Uso, distribución y condiciones

- [Entrada y descargas](../README.md).
- [Licencia, créditos y reutilización](../LICENSING.md).
