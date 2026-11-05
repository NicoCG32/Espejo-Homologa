# 02 · Cómo se usa Espejo

El recorrido parte de un cargo interno y termina con una referencia confirmada por el analista. Estas son las decisiones de cada etapa y la información que queda registrada.

## 1. Preparar los datos

Se registran las empresas, las fichas de cargos internos y el catálogo de referencia. Las fichas pueden contener códigos de área, subárea y cargo, nivel jerárquico, descripciones, experiencia y formación. Los datos pueden incorporarse desde formularios o archivos admitidos por los lectores de planillas. Conviene revisar nombres, códigos y campos vacíos **antes** de homologar.

## 2. Elegir el cargo y los pesos

En _Nueva homologación_ se elige un cargo interno y se revisan los criterios. Es posible dar mayor o menor peso a cada aspecto y dejar campos fuera mediante peso cero. Los criterios obligatorios funcionan como condiciones de descarte cuando no existe información o coincidencia en ese campo. La ejecución guarda los criterios usados.

## 3. Ejecutar la comparación

El motor contrasta el cargo interno con los cargos de referencia y devuelve candidatos admitidos con su score; muestra los motivos de descarte para los excluidos. En experiencia y formación puede usar fichas normalizadas por IA cuando están disponibles, o conservar la comparación textual como alternativa.

## 4. Pedir una segunda lectura, si conviene

El análisis semántico evalúa **solo los candidatos admitidos**, sin sueldo ni tamaño de empresa. Cuando responde correctamente aparecen score semántico y score combinado. Si falla, no desaparecen los resultados del motor y el analista puede seguir con la información disponible.

## 5. Preseleccionar y decidir

El analista puede **marcar varios candidatos** para compararlos con más detenimiento. Esta preselección queda guardada. Después elige **uno definitivo**, indica quién tomó la decisión y puede agregar un comentario y seleccionar el tamaño para el benchmark. Si hay una preselección guardada, el definitivo debe pertenecer a ella. La sugerencia de IA es informativa.

## 6. Revisar el benchmark y el historial

Con la decisión registrada, el historial permite consultar las bandas de la referencia elegida. El gráfico presenta únicamente **P25, P50, P75 y promedio** de encuesta; el sueldo interno se conserva en las fichas y tablas de brechas, no como otra barra. Los informes Excel y la vista de impresión para PDF toman los datos disponibles del historial, sin volver a ejecutar IA.

## Cuándo detenerse

- Si el catálogo está incompleto o no hay candidatos, revisa los criterios antes de interpretar un score bajo como incompatibilidad definitiva.
- Si el análisis semántico falla, trata el score final como **no disponible**, no como cero.
- Si no hay banda para un tamaño, no la reemplaces por otro tamaño ni por un promedio inventado.
- Si la referencia parece incorrecta a pesar de los scores, documenta por qué: **la decisión sigue siendo profesional**.

[Propósito y alcance](01-proposito-y-alcance.md) · [Actividad y estados](../tecnica/05-flujos-y-estados.md) · [Importación e informes](../tecnica/06-importacion-y-exportacion.md)
