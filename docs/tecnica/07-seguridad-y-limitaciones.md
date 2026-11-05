# 07 · Seguridad y límites de confianza

Las fichas de cargos, las remuneraciones y las decisiones pueden contener información sensible. El piloto utiliza un cliente de base de datos con privilegios elevados y requiere controles de autorización antes de trabajar con datos confidenciales.

## Controles actuales

- [`src/lib/supabase-public.server.ts`](../../src/lib/supabase-public.server.ts) crea un cliente de datos en el servidor con `SUPABASE_SERVICE_ROLE_KEY`, una credencial de privilegios elevados.
- Las migraciones posteriores revocan acceso de `anon` y `authenticated` a las tablas principales y habilitan RLS. Estas restricciones protegen accesos directos que usen esos roles, **pero no sustituyen permisos de las funciones que usan rol de servicio**.
- [`src/start.ts`](../../src/start.ts) configura un middleware CSRF para server functions. [`auth-attacher.ts`](../../src/integrations/supabase/auth-attacher.ts) adjunta un token desde el cliente **si existe sesión**.
- [`requireSupabaseAuth`](../../src/integrations/supabase/auth-middleware.ts) está disponible como middleware, pero las funciones de negocio no lo aplican de forma general ni comprueban permisos por empresa/cargo antes de usar la clave de servicio.
- El payload semántico excluye los sueldos y el tamaño de empresa. Las descripciones y los atributos del cargo sí se envían al proveedor de IA.

## Limitaciones

| Área                     | Limitación actual                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| Acceso a datos           | Las funciones privilegiadas carecen de controles generales de aislamiento por usuario u organización. |
| Historial de decisiones  | El `upsert` puede sustituir la decisión de una ejecución sin conservar la versión anterior.           |
| Reproducción de cálculos | No se guardan por ejecución los pesos globales motor/IA ni los motivos de todos los descartes.        |
| Escrituras compuestas    | El reemplazo de la preselección utiliza consultas separadas y puede quedar incompleto ante un fallo.  |

## Qué resolver antes de tratar datos reales

1. **Exigir autenticación y autorización en cada función del servidor**, con alcance por usuario/organización, antes de utilizar la credencial privilegiada. La protección CSRF no cumple esa función.
2. Revisar los permisos y las políticas **realmente aplicadas** en Supabase, además de los archivos de migración del repositorio.
3. Conservar las claves privadas fuera del cliente, logs y repositorio. Proteger las operaciones de eliminación/reinicio masivo.
4. Definir respaldo, recuperación, retención de datos y autorización para transferir contenido a proveedores externos de IA.
5. Hacer consistentes las escrituras compuestas, particularmente el reemplazo de la preselección. Agregar registro de cambios si la decisión puede editarse.
6. Probar accesos no autorizados con una base de prueba antes de compartir un despliegue externo.

La [guía de RLS de Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security) explica el alcance de las políticas de acceso y el uso de claves de servicio.

[Arquitectura](01-arquitectura.md) · [Puesta en marcha](../desarrollo/01-entorno-y-despliegue.md) · [Prioridades](../desarrollo/03-evolucion-y-prioridades.md)
