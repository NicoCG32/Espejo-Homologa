<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="branding/banners/espejo-banner-oscuro.svg" />
  <img src="branding/banners/espejo-banner-claro.svg" alt="Espejo · Homologa: dos perspectivas de un mismo cargo" width="100%" />
</picture>

# Espejo · Homologa

**Comparar por contenido. Decidir con criterio.**

**Espejo · Homologa** es un piloto web para profesionales que comparan cargos internos con referencias de encuestas salariales. Combina criterios ponderados y análisis asistido por IA para apoyar la decisión del analista, registrar los resultados y consultar bandas salariales. La referencia definitiva la confirma el profesional.

[![Estado: piloto](https://img.shields.io/badge/Estado-Piloto-52647A?style=flat-square)](docs/general/01-proposito-y-alcance.md) [![React 19](https://img.shields.io/badge/React-19-1F6285?style=flat-square&logo=react)](package.json) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](package.json) [![Calidad](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml/badge.svg)](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml)

[Documentación](docs/README.md) · [Cómo funciona](docs/general/02-recorrido-del-analista.md) · [Arquitectura](docs/tecnica/01-arquitectura.md) · [Proyecto en GitHub](https://github.com/NicoCG32/Espejo-Homologa)

</div>

## Por qué existe

Cuando dos cargos tienen nombres distintos, no necesariamente hacen trabajos distintos. También ocurre lo contrario: compartir un nombre no garantiza equivalencia. Desarrollamos **Espejo · Homologa** para ayudar a comparar cargos internos con referencias de una encuesta, documentar los criterios y dejar la decisión final en manos de quien conoce el contexto.

El piloto combina un **motor determinístico**, un **análisis semántico asistido por IA** y una **decisión del analista**. La remuneración queda fuera del cálculo de similitud: se consulta como información de mercado, no como argumento para declarar que dos cargos son equivalentes.

## El origen y las personas detrás

El proyecto nació en **Duplas Intergeneracionales Tech**, una experiencia de aprendizaje de Desafío Latam vinculada al Fondo 55+ Entel. La dupla estuvo formada por **Claudia Peña**, economista con experiencia en recursos humanos, y **Pablo Guzmán**, estudiante de Ingeniería Civil en Computación e Informática. Claudia aportó los criterios del rubro, las pruebas y la retroalimentación; Pablo condujo la implementación mediante prompts e iteraciones con Lovable, ChatGPT y GitHub. Contamos con tutoría semanal de **Gricel Sepúlveda**.

La experiencia de la dupla y la metodología del curso están en [el origen de Espejo](docs/formativa/README.md).

## Lo que hace el piloto

1. Permite cargar empresas, cargos internos, referencias y bandas salariales desde planillas, con revisión previa de los datos.
2. Compara el contenido con criterios configurables y conserva los pesos usados en cada ejecución.
3. Interpreta semánticamente los candidatos admitidos por el motor, cuando el servicio de IA está disponible.
4. Deja **preseleccionar varios** candidatos y confirmar **uno** como referencia definitiva para la ejecución.
5. Presenta las bandas P25, P50, P75 y promedio según el tamaño escogido, y permite obtener informes Excel/PDF desde el historial.

El proyecto está en etapa de piloto. Para trabajar con información confidencial o desplegarlo en producción, revisa los [controles de acceso pendientes](docs/tecnica/07-seguridad-y-limitaciones.md).

## Cómo leer la documentación

| Área | Para quién | Punto de partida |
| --- | --- | --- |
| **General** | Personas que quieren entender o utilizar la propuesta | [Propósito](docs/general/01-proposito-y-alcance.md) · [Recorrido del analista](docs/general/02-recorrido-del-analista.md) |
| **Técnica** | Quienes necesitan revisar el funcionamiento y sus límites | [Arquitectura](docs/tecnica/01-arquitectura.md) · [Datos y relaciones](docs/tecnica/02-dominio-y-datos.md) |
| **Desarrollo** | Quienes van a ejecutar, mantener o extender el código | [Entorno local](docs/desarrollo/01-entorno-y-despliegue.md) · [Pruebas](docs/desarrollo/02-validacion-y-mantenimiento.md) |
| **Formativa** | Quienes quieren conocer el origen y lo aprendido | [Contexto](docs/formativa/README.md) |

**[Índice completo con diagramas y rutas de lectura](docs/README.md)**

## Tecnologías principales

React 19 · TypeScript · TanStack Start/Router · Vite · Tailwind CSS 4 · PostgreSQL mediante Supabase · Gemini con respaldo Groq · Excel (`xlsx`). El código de la aplicación utiliza funciones de servidor para sus operaciones de datos.

## Ejecutarlo localmente

Con Bun instalado y las variables de entorno configuradas:

```bash
bun install --frozen-lockfile
bun run dev
```

Las operaciones sobre cargos y ejecuciones requieren una base configurada; el análisis IA requiere credenciales del proveedor. Consulta [instalación y despliegue](docs/desarrollo/01-entorno-y-despliegue.md) para configurar las variables públicas y los secretos del servidor.

## Licencia y autoría

[Licencia](LICENSE) · [Alcance no comercial y créditos](LICENSING.md) · [Avisos](NOTICE) · [Identidad visual](branding/README.md). El uso comercial adicional requiere el acuerdo indicado en la licencia y sus condiciones complementarias.
