# 07 · Seguridad y límites del piloto

Las descripciones de cargos y las remuneraciones pueden contener información confidencial. El piloto necesita completar sus controles de acceso antes de trabajar con datos reales.

## Controles actuales

- El acceso habitual a PostgreSQL se realiza desde funciones de servidor mediante [`getDb()`](../../src/lib/supabase-public.server.ts), que utiliza `SUPABASE_SERVICE_ROLE_KEY`.
- Las migraciones incorporan RLS y revocan permisos a roles `anon` y `authenticated` para varias tablas. **Esto protege el acceso directo bajo esos roles, pero la clave de servicio puede omitir RLS**.
- Se configura middleware CSRF para solicitudes a funciones servidor en [`src/start.ts`](../../src/start.ts), y el cliente adjunta un token de Supabase cuando existe sesión.
- El middleware `requireSupabaseAuth` está definido, pero `src/start.ts` sólo registra `attachSupabaseAuth` para las funciones de servidor. Falta exigir la sesión y comprobar permisos en las operaciones de negocio.
- El modelo semántico recibe únicamente atributos de contenido de cargo y candidatos admitidos; se excluyen remuneración y tamaño.

## Limitaciones

| Área | Estado |
| --- | --- |
| Autorización | Las operaciones que usan el rol de servicio requieren comprobaciones explícitas de identidad y permisos. |
| Aislamiento por organización | Falta una política de pertenencia y acceso aplicada a los datos de cada cliente. |
| Historial | Las decisiones pueden actualizarse y los pesos híbridos no se versionan por ejecución. |
| Operación | Los respaldos y la restauración deben comprobarse en el entorno de despliegue. |

## Requisitos antes de manejar datos reales

1. Exigir autenticación y comprobar permisos **en cada operación de servidor** antes de usar credenciales privilegiadas; diseñar aislamiento por organización o restringir el piloto a un entorno verdaderamente controlado.
2. Revisar las tablas, políticas RLS, roles, privilegios y migraciones aplicadas en la instancia remota.
3. Gestionar secretos exclusivamente en el entorno del servidor y en un gestor de secretos; no enviar claves de servicio al cliente ni al repositorio.
4. Desactivar o proteger la función de reinicio masivo, definir respaldos verificables, restauración y límites de retención.
5. Revisar el tratamiento de datos transmitidos a proveedores externos de IA y la autorización para usarlos.
6. Incorporar pruebas de autorización, registros de acciones relevantes y un mecanismo de reversión/recuperación para operaciones compuestas.

[Prioridades de desarrollo](../desarrollo/03-evolucion-y-prioridades.md) · [Pruebas y mantenimiento](../desarrollo/02-validacion-y-mantenimiento.md).
