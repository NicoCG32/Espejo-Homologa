# 01 · Entorno local y despliegue

La aplicación utiliza **React, TypeScript y TanStack Start**, con Supabase para persistencia. Para ejecutar el recorrido completo se necesita una base de datos configurada y, para las funciones de IA, credenciales del proveedor.

## Requisitos y comandos

Instala Bun y utiliza las versiones de referencia indicadas en el [workflow de calidad](../../.github/workflows/calidad.yml). El archivo `bun.lock` fija las dependencias.

```bash
bun install --frozen-lockfile
bun run dev
```

Para realizar las comprobaciones definidas en [CI](../../.github/workflows/calidad.yml):

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

`bun run preview` inicia una vista previa del artefacto compilado. Las operaciones con la base y los proveedores de IA requieren pruebas de integración adicionales.

## Configuración

| Variable                        | Uso                                                | Exposición                                   |
| ------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| `SUPABASE_URL`                  | API de Supabase para el servidor.                  | Configuración servidor.                      |
| `SUPABASE_SERVICE_ROLE_KEY`     | Cliente privilegiado usado por funciones servidor. | **Secreta. Nunca `VITE_`.**                  |
| `SUPABASE_PUBLISHABLE_KEY`      | Cliente Supabase / middleware de autenticación.    | Clave publicable, no reemplaza autorización. |
| `VITE_SUPABASE_URL`             | URL pública que utiliza el cliente en navegador.   | Pública.                                     |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Clave publicable de cliente.                       | Pública.                                     |
| `GEMINI_API_KEY`                | Normalización y análisis semántico.                | **Secreta.**                                 |
| `GEMINI_MODEL`                  | Identificador del modelo solicitado (opcional).    | Configuración servidor.                      |
| `GROQ_API_KEY`                  | Respaldo cuando se agotan reintentos elegibles.    | **Secreta.**                                 |
| `LOVABLE_DB_MIGRATION_URL`      | Conexión configurada para Drizzle Kit.             | **Secreta** si contiene contraseña.          |

Usa [`.env.example`](../../.env.example) como referencia para la configuración de tu proyecto. La integración con Lovable mantiene `.env` versionado con las variables públicas de compilación. Los secretos del servidor se configuran en el gestor de secretos del despliegue o en `.env.local` para desarrollo local; este último queda ignorado por Git. Nunca asignes el prefijo `VITE_` a una credencial privada.

`LOVABLE_CRON_SECRET` se utiliza en los módulos auxiliares de autenticación de tareas programadas. El modelo indicado por `GEMINI_MODEL` debe estar disponible para la cuenta y tener cuota suficiente.

## Cómo abordar la base desde cero

Las migraciones se distribuyen entre [`supabase/migrations`](../../supabase/migrations), con las tablas iniciales y sus ampliaciones, y [`drizzle/migrations`](../../drizzle/migrations), con cambios adicionales. El archivo [`drizzle/schema.ts`](../../drizzle/schema.ts) está intencionalmente vacío y no permite reconstruir el esquema.

El repositorio aún no define un comando único de instalación de la base. Antes de crear un entorno de prueba:

1. Revisa las dependencias entre las migraciones de ambas carpetas.
2. Define y registra la secuencia de aplicación.
3. Confirma tablas, enums, columnas, índices, restricciones y permisos.
4. Carga datos de prueba y ejecuta el recorrido de importación, comparación, decisión e informes.

## Qué necesita un despliegue

El despliegue necesita ejecutar el servidor de TanStack Start, servir los recursos públicos, conservar los secretos fuera del navegador y permitir comunicación con Supabase, Gemini y Groq. La configuración Vite utiliza el paquete de Lovable.

**Antes de compartir un entorno con datos reales:** resolver autorización del servidor, confirmar permisos y políticas RLS aplicados, probar escenarios de fallos, respaldo y recuperación. El hecho de que las funciones corran en servidor no basta para aislar usuarios.

[Arquitectura](../tecnica/01-arquitectura.md) · [Seguridad](../tecnica/07-seguridad-y-limitaciones.md) · [Pruebas](02-validacion-y-mantenimiento.md)
