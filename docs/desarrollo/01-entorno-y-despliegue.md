# 01 · Entorno local y despliegue

## Antes de empezar

La aplicación usa TypeScript, React y TanStack Start. Se desarrolla con Bun, se compila con Vite y se conecta a una base PostgreSQL mediante Supabase.

## Arranque local

```bash
bun install --frozen-lockfile
bun run dev
```

Para comprobar cambios antes de proponerlos:

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

El workflow [`.github/workflows/calidad.yml`](../../.github/workflows/calidad.yml) ejecuta estas tres comprobaciones en cada cambio a `main` y en las solicitudes de incorporación.

## Variables del entorno

### Configuración pública y secretos en Lovable

El `.env` raíz contiene la URL, el identificador del proyecto y la clave publicable de Supabase, con sus variantes `VITE_*`. Se mantiene versionado para que Lovable pueda compilar y generar vistas previas. Consulta la [guía de Secrets de Lovable](https://docs.lovable.dev/features/secrets) para distinguir las variables públicas de los secretos del servidor.

Usa [`.env.example`](../../.env.example) como plantilla para otro entorno y reemplaza sus valores de ejemplo. Guarda las claves privadas en el gestor de secretos del despliegue y, para desarrollo local, en `.env.local`, que Git ignora. Nunca antepongas `VITE_` a un secreto: ese prefijo lo expone al navegador. Comprueba que las funciones TanStack Start reciban las variables de servidor que necesitan.

La configuración de Lovable, los workflows, las migraciones y `bun.lock` se versionan. Las dependencias, builds, logs, cachés y credenciales locales quedan fuera de Git.

| Variable | Ubicación | Para qué se usa |
| --- | --- | --- |
| `SUPABASE_URL` | Servidor | URL de la API de datos |
| `SUPABASE_SERVICE_ROLE_KEY` | **Secreto de servidor** | Cliente privilegiado de datos |
| `SUPABASE_PUBLISHABLE_KEY` | Pública según diseño del cliente | Cliente de autenticación, si se configura |
| `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID` | Compilación cliente | Configuración pública del cliente Supabase |
| `GEMINI_API_KEY` | **Secreto de servidor** | Normalización y análisis semántico |
| `GEMINI_MODEL` | Servidor, opcional | Identificador del modelo configurado |
| `GROQ_API_KEY` | **Secreto de servidor** | Respaldo ante fallos transitorios elegibles |

Configura `GEMINI_MODEL` con un modelo disponible en tu cuenta y comprueba su cuota antes de ejecutar análisis.

## Base de datos

El esquema está repartido entre [`supabase/migrations`](../../supabase/migrations) y [`drizzle/migrations`](../../drizzle/migrations). La primera serie crea las tablas originales y la segunda incorpora cambios que usa la aplicación actual. Falta un procedimiento unificado de instalación desde cero; antes de conectar una base nueva, revisa el orden de ambas series y comprueba las tablas y columnas en un entorno de prueba.

## Publicación

El despliegue debe ejecutar las funciones de servidor junto con los recursos web y permitir conexiones a Supabase y a los proveedores de IA. Antes de publicar, comprueba las variables del entorno, las migraciones aplicadas, los permisos de acceso y la recuperación ante errores.

Usa datos de prueba hasta completar los [requisitos para manejar información real](../tecnica/07-seguridad-y-limitaciones.md).

[Arquitectura de despliegue](../tecnica/01-arquitectura.md) · [Pruebas](02-validacion-y-mantenimiento.md).
