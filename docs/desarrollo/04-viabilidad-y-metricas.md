# 04 · Cómo validar eficiencia, escalabilidad y rentabilidad

[← Desarrollo](../README.md) · [Pitch](../formativa/02-pitch-y-vision.md) · [Propuesta de valor](../general/03-propuesta-de-valor.md)

El pitch comunicó un **potencial** de ahorro de tiempo y de reducción del riesgo de escoger referencias inadecuadas. Este capítulo explica cómo convertir esos beneficios en evidencia y cómo estudiar un modelo económico sin fabricar clientes, ingresos o resultados.

**Investigación externa posterior (8 de noviembre de 2026):** [fuentes de Buk, Mercer, WTW, OCDE, INE, SII, NBER/OIT; tiempo reportado de 2–3 minutos, costos públicos de Gemini/Supabase y escenarios CLP](05-evidencia-externa-y-escenarios.md). Ese análisis separa cada cifra según procedencia: fuente publicada, declaración, cálculo o hipótesis.

## Distinguir declaración, hipótesis y medición

| Indicador del pitch | Qué sabemos | Evidencia todavía necesaria |
| --- | --- | --- |
| **2 horas por homologación** | Se utilizó como referencia en la lámina 2 | Muestra de procesos reales, definición de inicio/fin, mediana y dispersión |
| **Hasta 15 % de desviación de mercado** | Cifra ilustrada en la lámina 2 con texto «Mercer, 2024» | Publicación exacta, página, población y método de cálculo; no se ha validado esa cita en el repositorio |
| **Hasta 80 % menos tiempo por cargo** | Se propuso como impacto potencial en la lámina 7 | Experimento antes/después o comparación controlada con casos equivalentes, incluyendo revisión humana |

**Ninguno es hoy un KPI medido de Espejo.** No deben colocarse en el README como logros alcanzados, ni en propuestas comerciales sin aclarar la condición hipotética.

**Dato nuevo comunicado por Pablo:** con el flujo de Espejo y las fichas disponibles, una homologación justificada tarda **aproximadamente 2–3 minutos**. Es una **observación reportada**, no resultado de una muestra cronometrada. Tomando el punto medio 2,5 min y comparándolo con 15, 30, 60 y 120 minutos manuales **solo como hipótesis**, las reducciones matemáticas serían 83,33 %, 91,67 %, 95,83 % y 97,92 %. [Supuestos, horas y equilibrio económico](05-evidencia-externa-y-escenarios.md).

## Protocolo reproducible para una prueba con especialistas

1. Obtener autorización para trabajar con **fichas sintéticas o debidamente anonimizadas**, y confirmar permisos de uso de encuestas.
2. Definir un conjunto de **pares de cargos con distintos grados de dificultad**. Registrar decisiones de referencia y discrepancias entre especialistas antes de mirar scores.
3. Realizar un flujo tradicional y uno asistido por Espejo, con **los mismos entregables y las mismas reglas de calidad**, alternando el orden para limitar aprendizaje o fatiga.
4. Medir tiempo total **incluyendo** revisión, corrección de datos, fallos de IA y preparación del informe. No limitarse al tiempo de ejecución del motor.
5. Registrar tiempo de lectura y decisión del experto, número de candidatos descartados, cambios de criterio y **errores de equivalencia detectados**.
6. Reportar tamaño de muestra, medianas, rangos, casos fallidos y acuerdos/discrepancias. No extrapolar de diez ejemplos a todo un sector.
7. Registrar coste de procesamiento, intervención profesional, alojamiento, datos, soporte y riesgos de confidencialidad.

Claudia puede aportar criterio sobre pertinencia de equivalencias dentro de su experiencia profesional, sin que eso signifique que haya validado automáticamente **todas** las decisiones del algoritmo.

## Fórmulas de evaluación, no resultados

Para un periodo y muestra explícitos:

```text
Ahorro de tiempo por caso = tiempo tradicional - tiempo asistido (con revisión)
Reducción relativa (%) = 100 × ahorro / tiempo tradicional
Horas netas liberadas = número de casos × ahorro promedio por caso
Costo variable por caso = costo IA + infraestructura marginal + revisión humana
Contribución por caso = ingreso efectivamente cobrado por caso - costo variable
Resultado operativo del periodo = ingresos efectivos - costos variables - costos fijos
Punto de equilibrio (casos) = costos fijos / contribución positiva por caso
```

Estas expresiones ayudan a planificar un modelo de **consultoría, licencia o servicio**, pero **no prueban rentabilidad por sí solas**. El punto de equilibrio solo tiene sentido si el margen por caso es positivo y los costes están medidos. La disponibilidad de una opción gratuita de IA no asegura costo cero a escala.

## Diferenciar ahorro de tiempo, valor económico y utilidad

El tiempo liberado puede convertirse en **mayor capacidad para revisar casos**, reducción de costos o nuevos servicios vendidos. **No equivale automáticamente a ingresos ni a dinero ahorrado**. El escenario ilustrativo de 100 casos, valor hora hipotético $20.000 CLP, costo fijo $250.000 CLP/mes y variable $250 CLP/caso está desarrollado, con casos de equilibrio, en [Evidencia externa y escenarios](05-evidencia-externa-y-escenarios.md). Ninguno de estos parámetros es una cotización ni un costo de producción medido.

## Los costos que no se deberían omitir

| Categoría | Variable a registrar |
| --- | --- |
| **Experiencia profesional** | Horas de revisión, corrección, aclaraciones y elaboración de informe |
| **IA y cómputo** | Llamadas de normalización y análisis por ejecución, tokens, errores, reintentos y tarifa vigente |
| **Base y alojamiento** | Almacenamiento, backups, tráfico, despliegue, monitorización y plan de proveedores |
| **Fuentes salariales** | Licencias o contratos para utilizar y redistribuir encuestas y estadísticas |
| **Seguridad y privacidad** | Aislamiento entre organizaciones, acceso, incidentes, retención y cumplimiento contractual |
| **Venta y atención** | Adquisición de clientes, formación, seguimiento y mantenimiento |
| **Riesgo de calidad** | Revisiones adicionales por falsas equivalencias, datos incompletos o fallos de proveedores |

## Escenario simple de validación comercial

**La oportunidad total de la plataforma no es el número de trabajadores o empresas multiplicado por un precio hipotético.** Para cada mercado debemos identificar por separado el **comprador**, la **frecuencia del problema**, la **alternativa disponible**, la **disposición a pagar**, la **ruta de adquisición** y el costo de cumplir una entrega de calidad. El [estudio de mercado y competencia](07-estudio-de-mercado-y-posicionamiento.md) explica un dimensionamiento TAM/SAM/SOM de abajo hacia arriba sin mezclar clientes de compensaciones con postulantes y freelancers.

Antes de emitir una cifra de rentabilidad debemos responder con evidencias: **¿quién pagaría?, ¿por qué entregable?, ¿a qué tarifa?, ¿cuántos cargos por periodo?, ¿qué tiempo exige el experto?, ¿cuál es el costo de los datos y la IA?, ¿qué controles de seguridad se necesitan?**

Cuando existan respuestas, comparar tres situaciones sin mezclar supuestos:

- **Servicio manual profesional:** tiempo y calidad sin Espejo.
- **Servicio profesional asistido:** ahorro neto y consistencia **con** revisión humana.
- **Producto licenciado:** inversión, soporte, seguridad y mantenimiento de una plataforma de varias organizaciones, **todavía no implementada** como oferta lista para vender.

Una mejora de tiempo **no se transforma automáticamente en ingresos**: pueden liberar capacidad, reducir costo operativo o mejorar un servicio, dependiendo del contrato y la demanda.

## Condiciones antes de decir «escalable»

Para administrar datos de organizaciones reales es indispensable corregir **autenticación, autorización por empresa, privilegios de servidor y trazabilidad histórica**, además de establecer derechos para las fuentes salariales. El código actual utiliza un cliente privilegiado; el middleware de autenticación existente no se exige en todas las operaciones del negocio.

El producto puede ser **una base interesante para consultoría especializada** sin ser todavía un SaaS multi-tenant listo para producción.

[Validación técnica](02-validacion-y-mantenimiento.md) · [Seguridad](../tecnica/07-seguridad-y-limitaciones.md) · [Hoja de ruta](03-evolucion-y-prioridades.md).
