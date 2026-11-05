# 02 · Validación y mantenimiento

El workflow de calidad ejecuta lint, comprobación de tipos y compilación. Los escenarios de esta guía forman el plan de pruebas funcionales y de integración pendiente; el proyecto todavía no dispone de una suite automatizada de dominio.

## Matriz mínima de pruebas

| Área             | Escenarios recomendados                                                           | Resultado que deberíamos comprobar                                                                   |
| ---------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Calidad estática | Lint, tipos, build                                                                | Se ejecutan sin fallos en el entorno correspondiente.                                                |
| Importación      | Hoja correcta, código ausente, duplicado, encabezado inesperado, banda faltante   | Avisos comprensibles y ausencia de datos inventados.                                                 |
| Motor            | Peso cero, dato incompleto, criterio obligatorio, igualdad y desempate            | Scores reproducibles para fichas fijas; descartes explicables.                                       |
| Normalización    | Ficha nueva, huella vigente, fallo de proveedor                                   | Reutilización cuando corresponde y fallback al texto original.                                       |
| IA               | Respuesta válida, 429/503, error no transitorio, JSON malformado, ID desconocido  | Reintentos solamente cuando toca; no se alteran scores del motor ante un fallo.                      |
| Decisión         | Marcar varios, elegir uno no marcado, guardar comentario, repetir confirmación    | Se rechazan IDs ajenos y se respeta una decisión por ejecución; revisar comportamiento del `upsert`. |
| Benchmark        | Bandas P/M/G, datos nulos, falta de sueldo, fuente/año                            | Gráfico solo con P25, P50, P75 y promedio; brechas sin estimaciones.                                 |
| Informes         | XLSX y ventana imprimible, sesión antigua sin preselección                        | Información coherente con el historial, sin nueva llamada IA.                                        |
| Seguridad        | Peticiones sin sesión, usuario de otra organización, operaciones de mantenimiento | Rechazo de operaciones no autorizadas.                                                               |
| Base             | Instalación de cero, upgrade, respaldo/restauración                               | Esquema y datos compatibles con las funciones.                                                       |

Ejecuta estos escenarios con datos controlados y registra el resultado, el entorno y la versión evaluada. Las comprobaciones de CI están definidas en [`.github/workflows/calidad.yml`](../../.github/workflows/calidad.yml).

## Mapa de mantenimiento

| Si se quiere cambiar…        | Mirar primero…                                                                                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pesos y reglas               | [`motor.server.ts`](../../src/lib/motor.server.ts) y [`criterios.functions.ts`](../../src/lib/criterios.functions.ts).                                                            |
| Flujo de decisión            | [`homologacion.functions.ts`](../../src/lib/homologacion.functions.ts), [`decision-form.tsx`](../../src/components/decision-form.tsx).                                            |
| Prompts y modelos integrados | [`normalizacion.server.ts`](../../src/lib/normalizacion.server.ts), [`semantica.server.ts`](../../src/lib/semantica.server.ts), [`groq.server.ts`](../../src/lib/groq.server.ts). |
| Planillas e informes         | [`cargos-import.ts`](../../src/lib/cargos-import.ts), [`exportacion.ts`](../../src/lib/exportacion.ts).                                                                           |
| Datos y permisos             | Migraciones de Supabase y Drizzle, [`supabase-public.server.ts`](../../src/lib/supabase-public.server.ts).                                                                        |
| Navegación y diseño          | [`src/routes`](../../src/routes), [`src/components`](../../src/components), [`branding`](../../branding).                                                                         |

## Pruebas de aceptación con especialistas

Utiliza pares de cargos revisados por especialistas y registra los motivos de cada equivalencia. Evalúa si las explicaciones, las fichas y las bandas resultan comprensibles para personas que no participaron en la construcción del sistema. Documenta las discrepancias entre los puntajes y el criterio profesional para orientar las mejoras del motor y de la interfaz.

[Pendientes](03-evolucion-y-prioridades.md) · [Riesgos](../tecnica/07-seguridad-y-limitaciones.md)
