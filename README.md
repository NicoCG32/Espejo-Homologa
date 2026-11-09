<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="branding/banners/espejo-banner-oscuro.svg" />
  <img src="branding/banners/espejo-banner-claro.svg" alt="Espejo · Homologa: comparación de cargos por contenido" width="100%" />
</picture>

# Espejo · Homologa

**Comparar por contenido. Decidir con criterio.**

[![Estado: piloto](https://img.shields.io/badge/Estado-Piloto-52647A?style=flat-square)](docs/general/01-proposito-y-alcance.md) [![React 19](https://img.shields.io/badge/React-19-24618A?style=flat-square&logo=react)](package.json) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](package.json) [![Calidad](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml/badge.svg)](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml)

[Documentación](docs/README.md) · [Recorrido del analista](docs/general/02-recorrido-del-analista.md) · [Visión de plataforma](docs/general/04-vision-de-plataforma.md) · [Origen y pitch](docs/formativa/README.md)

</div>

## Resumen ejecutivo

**Espejo · Homologa** es un piloto web que ayuda a comparar cargos internos con referencias de encuestas salariales. Combina criterios ponderados y análisis semántico asistido por IA; el analista revisa los candidatos y confirma la homologación. Conserva resultados y decisiones para consultar el historial, contrastar bandas salariales y generar informes Excel o PDF. La remuneración queda fuera del cálculo de similitud.

## Lo que se puede hacer

1. Administrar empresas, cargos internos y cargos de referencia; importar planillas y revisar su información antes de guardarla.
2. Ajustar criterios y pesos; ejecutar la comparación determinística, con explicación de coincidencias y diferencias.
3. Solicitar un análisis semántico de los candidatos admitidos y consultar los puntajes del motor, IA y combinado.
4. Preseleccionar varios candidatos, contrastar sus fichas y confirmar uno como referencia de la ejecución, dejando analista y comentario.
5. Consultar P25, P50, P75 y promedio por tamaño de empresa; revisar el historial y exportar Excel o una vista imprimible como PDF.

El proyecto está en etapa de piloto. Antes de utilizar información confidencial, deben resolverse los [controles de acceso pendientes](docs/tecnica/07-seguridad-y-limitaciones.md) y completar la [validación con especialistas](docs/desarrollo/02-validacion-y-mantenimiento.md).

## De Homologa a nuevas correspondencias

Homologa es el primer caso de una idea más amplia: relacionar necesidades con capacidades mediante criterios, evidencias y explicaciones que una persona pueda revisar. La visión de expansión propuesta por Pablo contempla orientación para postulaciones, definición de servicios independientes y desarrollo de competencias.

| Línea          | Propósito                                                                     | Estado                                     |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| **Homologa**   | Comparar cargos y consultar referencias salariales                            | Piloto implementado                        |
| **Postula**    | Relacionar habilidades demostradas con oportunidades laborales                | Propuesta futura                           |
| **Servicios**  | Aclarar necesidades, entregables y propuestas de profesionales independientes | Propuesta futura                           |
| **Evoluciona** | Explorar capacidades transferibles y rutas de formación                       | Propuesta futura                           |
| **Talento**    | Apoyar evaluaciones laborales con revisión humana                             | Propuesta futura con controles específicos |

Cada línea requiere modelos de datos, reglas y validación propios. La [visión de plataforma](docs/general/04-vision-de-plataforma.md), el [estudio de mercado](docs/desarrollo/07-estudio-de-mercado-y-posicionamiento.md) y la [arquitectura propuesta](docs/tecnica/08-arquitectura-de-expansion.md) desarrollan estas posibilidades. La [ruta de pilotos](docs/desarrollo/06-expansion-y-pilotos.md) comienza por consolidar Homologa.

## Cómo surgió

El proyecto nació en **Duplas Intergeneracionales Tech**, iniciativa formativa de **Desafío Latam** vinculada al **Fondo 55+ Entel**. **Claudia Peña**, economista con experiencia en recursos humanos y en el sector sanitario, aportó el problema, los criterios profesionales y las pruebas de uso. **Pablo Guzmán**, estudiante de Ingeniería Civil en Computación e Informática, condujo los prompts y las iteraciones técnicas con Lovable, ChatGPT y GitHub. La dupla contó con tutoría semanal de **Gricel Sepúlveda**.

Claudia y Pablo presentaron juntos el pitch final, centrado en apoyar el criterio del especialista: **«La IA no reemplaza al experto. Potencia su trabajo»**. La [historia de la dupla](docs/formativa/README.md) recoge esa experiencia; el [capítulo del pitch](docs/formativa/02-pitch-y-vision.md) conserva su propuesta y las cifras pendientes de validación.

## Guía de lectura

| Área           | Para empezar                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**    | [Propósito](docs/general/01-proposito-y-alcance.md) · [Recorrido](docs/general/02-recorrido-del-analista.md) · [Propuesta de valor](docs/general/03-propuesta-de-valor.md) · [Visión](docs/general/04-vision-de-plataforma.md)                                      |
| **Técnica**    | [Arquitectura](docs/tecnica/01-arquitectura.md) · [Datos](docs/tecnica/02-dominio-y-datos.md) · [Motor](docs/tecnica/03-motor-deterministico.md) · [Expansión](docs/tecnica/08-arquitectura-de-expansion.md)                                                        |
| **Desarrollo** | [Puesta en marcha](docs/desarrollo/01-entorno-y-despliegue.md) · [Validación](docs/desarrollo/02-validacion-y-mantenimiento.md) · [Viabilidad](docs/desarrollo/04-viabilidad-y-metricas.md) · [Mercado](docs/desarrollo/07-estudio-de-mercado-y-posicionamiento.md) |
| **Formativa**  | [Dupla](docs/formativa/README.md) · [Método](docs/formativa/01-metodologia-y-fuentes.md) · [Pitch](docs/formativa/02-pitch-y-vision.md) · [Créditos](docs/formativa/03-colaboracion-y-atribucion.md)                                                                |

**[Índice completo y mapa del sistema](docs/README.md)**

## Tecnologías utilizadas

React 19, TypeScript, TanStack Router/Start, Vite y Tailwind CSS para la interfaz y el servidor; PostgreSQL mediante Supabase para persistencia; Google Gemini con respaldo condicionado de Groq para IA. La lectura de planillas y la exportación Excel utilizan `xlsx`; el informe PDF se obtiene mediante la impresión del navegador. Las dependencias están en [`package.json`](package.json).

## Ejecutarlo localmente

Configura las variables de entorno y la base de datos según la [guía de instalación y despliegue](docs/desarrollo/01-entorno-y-despliegue.md). Con Bun instalado:

```bash
bun install --frozen-lockfile
bun run dev
```

Las operaciones con datos requieren Supabase configurado; las funciones de IA requieren credenciales del proveedor en el servidor.

## Licencia y autoría

[Licencia del código](LICENSE) · [Condiciones, créditos y uso comercial](LICENSING.md) · [Créditos de colaboración](docs/formativa/03-colaboracion-y-atribucion.md) · [Avisos](NOTICE) · [Recursos visuales](branding/README.md).
