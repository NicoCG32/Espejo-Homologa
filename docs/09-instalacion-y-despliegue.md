# 09 — Puesta en marcha y distribución

## Puesta en marcha y distribución por plataforma

**Disponibilidad:** Piloto web de homologación de cargos por contenido, con cálculo determinístico, análisis semántico y benchmark salarial separados.

**Destinos:** Webpage con servidor.

Utiliza el gestor de paquetes y las instrucciones de la guía de instalación de este repositorio.

| Script existente | Definición en package.json |
| ---------------- | -------------------------- |
| dev              | `vite dev`                 |
| build            | `vite build`               |
| preview          | `vite preview`             |
| lint             | `eslint .`                 |

### Secuencia de puesta en marcha

1. Preparar el runtime/editor y la configuración que indiquen las fuentes enlazadas; usar valores de prueba y restaurar el lockfile apropiado.
2. Ejecutar la modalidad local y sus comprobaciones existentes desde la carpeta indicada por esa guía. No confundir preview web con el runtime nativo o montaje físico.
3. Construir/instalar el artefacto de ese target y comprobar recorrido principal, error relevante y reapertura/actualización antes de declararlo entregado.

Ejecuta los comandos de comprobación antes de distribuir una compilación. Puedes consultar sus resultados remotos en la pestaña Actions del repositorio.

### Datos, servicios y distribución

PostgreSQL gestionado y acceso desde funciones servidor según contrato actual. Criterios usados, estados y resultados se persisten para trazabilidad. Un NULL salarial significa dato no disponible, no cero. Revisar migraciones y políticas efectivamente aplicadas; no afirmar seguridad de producción sólo por tener SQL en Git.

Despliega la aplicación junto con sus funciones servidor, la base de datos y la configuración del análisis semántico. Mantén los datos salariales y las credenciales de los proveedores fuera de los recursos públicos.

GitHub Releases distribuye los archivos de cada versión. Los servicios de servidor se despliegan por separado; consulta la guía de la plataforma para instalar o alojar la aplicación.

### Recuperación

Conservar el artefacto anterior y su procedencia. Retroceder código no revierte automáticamente datos o migraciones. Revisar compatibilidad de guardado/snapshot y restauración antes de instalar una versión antigua. Consulta las notas de la versión para conocer los requisitos y límites de la entrega.

## Código y documentación relacionada

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
