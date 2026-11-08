# 03 · Evolución y prioridades

Las siguientes prioridades buscan preparar el piloto para un uso más amplio y mejorar la trazabilidad de las homologaciones.

## Una visión mayor con dependencias que no se pueden saltar

El método de comparación podría aplicarse más adelante a **habilidades frente a vacantes**, **entregables de proyectos frente a profesionales independientes** y, con precauciones adicionales, apoyo al **reclutamiento**. Esta visión no constituye un módulo ya implementado ni sustituye la necesidad de consolidar primero Homologa.

Secuencia sugerida: **seguridad y trazabilidad del piloto → validación de la homologación → autoorientación con datos sintéticos → pruebas de servicios independientes → eventual selección de terceros con auditoría especial**. [Argumento de mercado](../general/04-vision-de-plataforma.md) · [Arquitectura especializada](../tecnica/08-arquitectura-de-expansion.md) · [Pilotos y métricas](06-expansion-y-pilotos.md).

## Prioridad alta — Seguridad y operación

Exigir identidad y autorización en cada función privilegiada, definir si habrá una sola organización o varias, limitar las operaciones destructivas y verificar la instalación, el respaldo y la restauración de la base.

## Prioridad alta — Coherencia del historial

Guardar por ejecución la versión de las reglas y los pesos globales motor/IA que efectivamente generaron `score_final`. Si se quiere poder explicar descartes antiguos, persistir también los motivos. Decidir si una confirmación se puede corregir y, en ese caso, cómo dejar historial de modificaciones en vez de solo reemplazar una fila.

## Prioridad media — Escrituras y pruebas

Hacer atómica la sustitución de la preselección (o definir recuperación comprobable). Añadir pruebas automatizadas del motor y de los lectores de planillas, además de verificaciones de autorización e integración con una base de prueba. Separar incidentes de proveedor de IA de errores de lógica o datos.

## Prioridad media — Validación económica sin promesas

Antes de comunicar reducciones de tiempo, retorno o escalabilidad comercial, medir duración tradicional y asistida **incluyendo revisión humana**, errores, coste real de llamadas IA, coste de datos y horas profesionales. No tratar las cifras del pitch como resultados de producción. [Protocolo de medición y viabilidad](04-viabilidad-y-metricas.md).

## Prioridad media — Validación y accesibilidad

Trabajar con pares de cargos revisados por especialistas, evaluar las explicaciones y los errores del sistema, y probar el recorrido con personas que no participaron en su construcción. Revisar navegación con teclado, contraste, legibilidad y compatibilidad con lectores de pantalla.

[Roadmap](../../roadmap.md) · [Experiencia formativa](../formativa/README.md)
