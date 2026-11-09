# 04 · Cómo validar eficiencia, escalabilidad y rentabilidad

[← Desarrollo](../README.md) · [Pitch](../formativa/02-pitch-y-vision.md) · [Propuesta de valor](../general/03-propuesta-de-valor.md)

El pitch propuso reducir el tiempo de análisis y el riesgo de escoger referencias inadecuadas. Este capítulo define cómo medir esos beneficios y evaluar la viabilidad del servicio.

Las [fuentes y escenarios económicos](05-evidencia-externa-y-escenarios.md) reúnen referencias del mercado, costos de proveedores y cálculos con supuestos explícitos, con fecha de corte al 8 de noviembre de 2026.

## Distinguir declaración, hipótesis y medición

| Indicador del pitch                     | Qué sabemos                                             | Evidencia todavía necesaria                                                                             |
| --------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **2 horas por homologación**            | Se utilizó como referencia en la lámina 2               | Muestra de procesos reales, definición de inicio/fin, mediana y dispersión                              |
| **Hasta 15 % de desviación de mercado** | Cifra ilustrada en la lámina 2 con texto «Mercer, 2024» | Publicación exacta, página, población y método de cálculo; no se ha validado esa cita en el repositorio |
| **Hasta 80 % menos tiempo por cargo**   | Se propuso como impacto potencial en la lámina 7        | Experimento antes/después o comparación controlada con casos equivalentes, incluyendo revisión humana   |

Estas cifras siguen pendientes de validación con casos comparables.

Pablo reporta unos 2–3 minutos por homologación con fichas disponibles. El [análisis de sensibilidad](05-evidencia-externa-y-escenarios.md) utiliza esa observación como supuesto; el protocolo siguiente debe medir también preparación, revisión y correcciones.

## Protocolo reproducible para una prueba con especialistas

1. Obtener autorización para trabajar con **fichas sintéticas o debidamente anonimizadas**, y confirmar permisos de uso de encuestas.
2. Definir un conjunto de **pares de cargos con distintos grados de dificultad**. Registrar decisiones de referencia y discrepancias entre especialistas antes de mirar scores.
3. Realizar un flujo tradicional y uno asistido por Espejo, con **los mismos entregables y las mismas reglas de calidad**, alternando el orden para limitar aprendizaje o fatiga.
4. Medir tiempo total **incluyendo** revisión, corrección de datos, fallos de IA y preparación del informe. No limitarse al tiempo de ejecución del motor.
5. Registrar tiempo de lectura y decisión del experto, número de candidatos descartados, cambios de criterio y **errores de equivalencia detectados**.
6. Reportar tamaño de muestra, medianas, rangos, casos fallidos y acuerdos/discrepancias. No extrapolar de diez ejemplos a todo un sector.
7. Registrar coste de procesamiento, intervención profesional, alojamiento, datos, soporte y riesgos de confidencialidad.

## Fórmulas de evaluación, no resultados

Para un periodo y muestra explícitos:

```text
Ahorro de tiempo por caso = tiempo tradicional - tiempo asistido (con revisión)
Reducción relativa (%) = 100 × ahorro / tiempo tradicional
Horas netas liberadas = número de casos × ahorro promedio en minutos / 60
Costo variable por caso = costo IA + infraestructura marginal + revisión humana
Contribución por caso = ingreso efectivamente cobrado por caso - costo variable
Resultado operativo del periodo = ingresos efectivos - costos variables - costos fijos
Punto de equilibrio (casos) = costos fijos / contribución positiva por caso
```

Estas expresiones ayudan a planificar un modelo de **consultoría, licencia o servicio**, pero **no prueban rentabilidad por sí solas**. El punto de equilibrio solo tiene sentido si el margen por caso es positivo y los costes están medidos. La disponibilidad de una opción gratuita de IA no asegura costo cero a escala.

## Diferenciar ahorro de tiempo, valor económico y utilidad

El tiempo liberado puede convertirse en **mayor capacidad para revisar casos**, reducción de costos o nuevos servicios vendidos. **No equivale automáticamente a ingresos ni a dinero ahorrado**. El escenario ilustrativo de 100 casos, valor hora hipotético $20.000 CLP, costo fijo $250.000 CLP/mes y variable $250 CLP/caso está desarrollado, con casos de equilibrio, en [Evidencia externa y escenarios](05-evidencia-externa-y-escenarios.md). Ninguno de estos parámetros es una cotización ni un costo de producción medido.

## Los costos que no se deberían omitir

| Categoría                   | Variable a registrar                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------ |
| **Experiencia profesional** | Horas de revisión, corrección, aclaraciones y elaboración de informe                             |
| **IA y cómputo**            | Llamadas de normalización y análisis por ejecución, tokens, errores, reintentos y tarifa vigente |
| **Base y alojamiento**      | Almacenamiento, backups, tráfico, despliegue, monitorización y plan de proveedores               |
| **Fuentes salariales**      | Licencias o contratos para utilizar y redistribuir encuestas y estadísticas                      |
| **Seguridad y privacidad**  | Aislamiento entre organizaciones, acceso, incidentes, retención y cumplimiento contractual       |
| **Venta y atención**        | Adquisición de clientes, formación, seguimiento y mantenimiento                                  |
| **Riesgo de calidad**       | Revisiones adicionales por falsas equivalencias, datos incompletos o fallos de proveedores       |

## Escenario simple de validación comercial

**La oportunidad total de la plataforma no es el número de trabajadores o empresas multiplicado por un precio hipotético.** Para cada mercado debemos identificar por separado el **comprador**, la **frecuencia del problema**, la **alternativa disponible**, la **disposición a pagar**, la **ruta de adquisición** y el costo de cumplir una entrega de calidad. El [estudio de mercado y competencia](07-estudio-de-mercado-y-posicionamiento.md) explica un dimensionamiento TAM/SAM/SOM de abajo hacia arriba sin mezclar clientes de compensaciones con postulantes y freelancers.

Antes de emitir una cifra de rentabilidad debemos responder con evidencias: **¿quién pagaría?, ¿por qué entregable?, ¿a qué tarifa?, ¿cuántos cargos por periodo?, ¿qué tiempo exige el experto?, ¿cuál es el costo de los datos y la IA?, ¿qué controles de seguridad se necesitan?**

Cuando existan respuestas, comparar tres situaciones sin mezclar supuestos:

- **Servicio manual profesional:** tiempo y calidad sin Espejo.
- **Servicio profesional asistido:** ahorro neto y consistencia **con** revisión humana.
- **Producto licenciado:** inversión, soporte, seguridad y mantenimiento de una plataforma de varias organizaciones, **todavía no implementada** como oferta lista para vender.

Una mejora de tiempo **no se transforma automáticamente en ingresos**: puede liberar capacidad, reducir costo operativo o mejorar un servicio, dependiendo del contrato y la demanda.

## Condiciones antes de decir «escalable»

Para administrar datos de organizaciones reales es indispensable corregir **autenticación, autorización por empresa, privilegios de servidor y trazabilidad histórica**, además de establecer derechos para las fuentes salariales. El código actual utiliza un cliente privilegiado; el middleware de autenticación existente no se exige en todas las operaciones del negocio.

El producto puede ser **una base interesante para consultoría especializada** sin ser todavía un SaaS multi-tenant listo para producción.

[Validación técnica](02-validacion-y-mantenimiento.md) · [Seguridad](../tecnica/07-seguridad-y-limitaciones.md) · [Hoja de ruta](03-evolucion-y-prioridades.md).
