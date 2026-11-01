# 02 · Validación, pruebas y mantenimiento

El mantenimiento combina comprobaciones automáticas de código con pruebas del flujo en una base de prueba y revisiones de los resultados con analistas.

## Escenarios de validación

| Área | Escenario mínimo | Resultado que hay que observar |
| --- | --- | --- |
| Calidad estática | Lint, TypeScript y build | Sin errores en CI |
| Importación | Archivo válido, sin código, duplicados y encabezados distintos | Vista previa, rechazo de filas inválidas y aviso de duplicados |
| Motor | Peso 0, dato ausente, criterio obligatorio y empate | Score y descarte reproducibles con entradas fijas |
| IA | Respuesta válida, 429/503, error no transitorio y JSON inválido | Reintentos sólo elegibles, respaldo cuando corresponda, motor conservado |
| Decisión | Seleccionar varios, confirmar uno, alterar la preselección | Un definitivo por ejecución y candidatos coherentes |
| Historial | Ejecución antigua sin preselección, IA fallida y bandas ausentes | Interpretación explícita de ausencias |
| Informes | Excel y ventana de impresión PDF, con o sin sueldo interno | Los gráficos muestran sólo valores de encuesta; las tablas conservan la comparación y no se recalculan scores |
| Seguridad | Solicitudes sin sesión y accesos ajenos | Rechazo comprobable antes de usar rol de servicio |
| Migraciones | Crear desde cero y actualizar base existente en copia | Esquema y restricciones alineados con funciones |
| Recuperación | Respaldo, reinicio y restauración de prueba | Recuperación verificada sin perder datos de referencia |

El CI ejecuta lint, TypeScript y compilación. La automatización de los escenarios de negocio de esta tabla está pendiente; las primeras prioridades son el motor, la importación y el control de acceso.

## Archivos de referencia

- **Motor y semántica:** `src/lib/motor.server.ts`, `normalizacion.server.ts`, `semantica.server.ts`, `gemini-retry.server.ts`.
- **Flujo de negocio:** `src/lib/homologacion.functions.ts` y `src/components/decision-form.tsx`.
- **Carga y salida:** `src/lib/cargos-import.ts`, `src/lib/exportacion.ts` y rutas de cargos/historial.
- **Datos:** ambas carpetas de migraciones y `src/integrations/supabase/types.ts`.
- **Interfaz:** `src/routes`, `src/components`, `src/styles.css` y `branding/`.

## Diagnóstico de problemas

- **IA:** comprueba la cuota, la configuración del modelo y el formato de la respuesta.
- **Importación:** revisa los encabezados, los códigos y la vista previa antes de guardar.
- **Acceso a datos:** revisa la sesión y los permisos del servidor; mantén la clave de servicio fuera del navegador.
- **Cambios de negocio:** revisa el cálculo, los datos guardados y la presentación del resultado.

[Decisiones pendientes](03-evolucion-y-prioridades.md) · [Arquitectura](../tecnica/01-arquitectura.md).
