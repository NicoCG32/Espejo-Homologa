# 01 · Propósito, problema y alcance

## El problema

Una descripción de cargo rara vez viene con un equivalente exacto en una encuesta. Los nombres pueden cambiar entre organizaciones, el detalle de las funciones puede ser desigual y, cuando la comparación depende solamente del nombre o del sueldo, cuesta explicar por qué se eligió una referencia.

Espejo permite poner ambas fichas frente a frente, **compararlas por su contenido** y registrar los criterios y la decisión del analista.

El enfoque surgió del trabajo de **Claudia Peña** y **Pablo Guzmán** en **Duplas Intergeneracionales Tech**. Claudia aportó el conocimiento del problema y probó el prototipo; Pablo llevó esas necesidades a la implementación. [Historia de la dupla](../formativa/README.md).

## Para quién está pensado

Está pensado para profesionales que analizan cargos y remuneraciones y para quienes necesitan revisar cómo se llegó a una decisión. La evaluación del piloto debe realizarse con datos de prueba hasta completar los [controles de acceso pendientes](../tecnica/07-seguridad-y-limitaciones.md).

## Qué hace y qué no hace

| Incluido en el piloto | Fuera del alcance actual |
| --- | --- |
| Comparación de cargos internos contra cargos de referencia | Equivalencia jurídica o laboral automática |
| Criterios ponderados y descartes explícitos | Garantizar una equivalencia «correcta» con un score |
| Lectura semántica como apoyo | Sustituir al profesional que confirma |
| Preselección múltiple y una referencia definitiva por ejecución | Homologar simultáneamente varios definitivos en una misma ejecución |
| Bandas de encuesta por tamaño, fuente y año si están disponibles | Calcular una remuneración recomendada o modificar el salario |
| Historial y exportación de la decisión | Permisos granulares, aislamiento por cliente o auditoría inmutable |

## Contenido del cargo y bandas salariales

Primero se estudia el contenido del cargo. Después, quien analiza selecciona una referencia. **La remuneración no es un criterio del motor ni un dato enviado al análisis semántico.** Una vez que existe contexto para comparar, las bandas salariales sirven como consulta, nunca como prueba de equivalencia.

La [validación con analistas](../desarrollo/03-evolucion-y-prioridades.md) es una de las próximas etapas: permitirá medir la consistencia de las comparaciones y revisar los casos ambiguos.

[Ver recorrido del analista](02-recorrido-del-analista.md) · [Volver al índice](../README.md).
