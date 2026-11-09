# 01 · Propósito y alcance

Un mismo trabajo puede tener nombres distintos entre empresas y encuestas salariales. También puede ocurrir que dos cargos con el mismo nombre tengan responsabilidades diferentes. Comparar sus funciones y requisitos permite evaluar la equivalencia antes de contrastar remuneraciones.

Espejo ayuda al analista a ordenar esa comparación y justificar su elección. La aplicación llama _cargo interno_ al que se quiere homologar, y _cargo de referencia_ al que pertenece al catálogo con el que se contrasta.

## La propuesta

**Espejo · Homologa** compara fichas por nombre, descripción, área, subárea, código, nivel jerárquico, experiencia y formación, según los criterios habilitados. Primero aplica reglas ponderadas; después, si se solicita y hay un proveedor disponible, utiliza IA para interpretar los textos. La persona revisa los resultados y confirma la referencia que considera apropiada. El benchmark permite consultar la remuneración interna frente a las bandas de esa referencia.

El objetivo es apoyar la decisión profesional con reglas visibles, explicaciones semánticas y resultados que se puedan consultar. La [propuesta de valor](03-propuesta-de-valor.md) desarrolla su utilidad y posibilidades de expansión.

## Qué incluye hoy

| Incluye en el piloto        | Qué significa en la práctica                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Catálogos y carga de datos  | Empresas, cargos y referencias; importación de planillas con estructura reconocida.                        |
| Criterios configurables     | Pesos, criterios activos y obligatorios para ejecutar el motor.                                            |
| Comparación determinística  | Candidatos admitidos ordenados por score, más motivos de descarte durante la ejecución.                    |
| Análisis semántico opcional | Puntajes y explicaciones; si el servicio falla, el cálculo del motor se conserva.                          |
| Preselección y decisión     | Varios candidatos marcados; una referencia definitiva por ejecución, con nombre del analista y comentario. |
| Benchmark e informes        | Bandas P25, P50, P75 y promedio por tamaño; Excel y vista HTML para guardar/imprimir como PDF.             |

## Alcance del piloto

La confirmación de una homologación corresponde al analista. La ejecución `COMPLETADA` indica que terminó el motor; la elección profesional se registra por separado.

La aplicación se centra en comparar cargos y consultar referencias salariales. No cubre contratación, selección de personas ni fijación de remuneraciones.

Quedan pendientes la validación sistemática con especialistas y los [controles de acceso necesarios para tratar datos confidenciales](../tecnica/07-seguridad-y-limitaciones.md). Las funciones de IA dependen de la disponibilidad y las credenciales de los proveedores.

En [el recorrido del analista](02-recorrido-del-analista.md) se ve el proceso sin entrar en archivos de código. Para entender el cálculo concreto, sigue a [motor determinístico](../tecnica/03-motor-deterministico.md).
