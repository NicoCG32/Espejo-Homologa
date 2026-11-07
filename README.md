<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="branding/banners/espejo-banner-oscuro.svg" />
  <img src="branding/banners/espejo-banner-claro.svg" alt="Espejo · Homologa: comparación de cargos por contenido" width="100%" />
</picture>

# Espejo · Homologa

**Comparar por contenido. Decidir con criterio.**

[![Estado: piloto](https://img.shields.io/badge/Estado-Piloto-52647A?style=flat-square)](docs/general/01-proposito-y-alcance.md) [![React 19](https://img.shields.io/badge/React-19-24618A?style=flat-square&logo=react)](package.json) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](package.json) [![Calidad](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml/badge.svg)](https://github.com/NicoCG32/Espejo-Homologa/actions/workflows/calidad.yml)

[Documentación](docs/README.md) · [Recorrido del analista](docs/general/02-recorrido-del-analista.md) · [Arquitectura](docs/tecnica/01-arquitectura.md) · [Origen del proyecto](docs/formativa/README.md)

</div>

## Resumen ejecutivo

**Espejo · Homologa** es un piloto web que ayuda a comparar cargos internos con referencias de encuestas salariales. Combina criterios ponderados y análisis semántico asistido por IA; el analista revisa los candidatos y confirma la homologación. Conserva los resultados y las decisiones para consultar el historial, contrastar bandas salariales y generar informes Excel o PDF. La remuneración se consulta como referencia de mercado y queda fuera del cálculo de similitud.

## Lo que se puede hacer

1. Administrar empresas, cargos internos y cargos de referencia; importar planillas y revisar su información antes de guardarla.
2. Ajustar criterios y pesos; ejecutar la comparación determinística, con explicación de coincidencias y diferencias.
3. Solicitar un análisis semántico de los candidatos admitidos y consultar los puntajes del motor, IA y combinado.
4. Preseleccionar varios candidatos, contrastar sus fichas y confirmar uno como referencia de la ejecución, dejando analista y comentario.
5. Consultar P25, P50, P75 y promedio por tamaño de empresa; revisar el historial y exportar Excel o una vista imprimible como PDF.

El proyecto está en etapa de piloto. Antes de utilizar información confidencial, deben resolverse los [controles de acceso pendientes](docs/tecnica/07-seguridad-y-limitaciones.md).

## Estado real del proyecto

| Nivel | Alcance de esta versión |
| --- | --- |
| ✅ **Implementado** | Piloto web con comparación determinística por contenido, análisis semántico opcional, intervención del analista, historial y consulta de bandas salariales. Los sueldos no forman parte de la similitud. |
| 🧪 **En validación** | Seguridad y control de acceso para datos empresariales, calidad de comparaciones con casos reales, trazabilidad y procedimientos operativos antes de una adopción productiva. |
| 🧭 **No acreditado como entrega final** | Una solución comercial lista para datos confidenciales, automatización de la decisión humana y equivalencia salarial basada en el sueldo del cargo. |

<details>
<summary><strong>¿Qué significa cada estado?</strong></summary>

«Implementado» describe algo respaldado por código o una entrega identificable; no garantiza una validación completa. «En validación» necesita pruebas adicionales, y «propuesto» es una aspiración, no una función disponible. Las notas de versión y los documentos especializados detallan los límites concretos.

</details>

## Cómo surgió

El proyecto nació en **Duplas Intergeneracionales Tech**, una iniciativa formativa de **Desafío Latam** vinculada al **Fondo 55+ Entel**. **Claudia Peña**, economista con experiencia en recursos humanos y en el sector sanitario, aportó el problema, los criterios profesionales y las pruebas de uso. **Pablo Guzmán**, estudiante de Ingeniería Civil en Computación e Informática, condujo los prompts y las iteraciones técnicas con Lovable, ChatGPT y GitHub. La dupla contó con tutoría semanal de **Gricel Sepúlveda**.

[Historia de la dupla y metodología del curso](docs/formativa/README.md).

## Guía de lectura

| Área           | Para empezar                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**    | [Propósito y alcance](docs/general/01-proposito-y-alcance.md) · [Recorrido del analista](docs/general/02-recorrido-del-analista.md)                                                   |
| **Técnica**    | [Arquitectura por niveles](docs/tecnica/01-arquitectura.md) · [Dominio y base de datos](docs/tecnica/02-dominio-y-datos.md) · [Flujos y estados](docs/tecnica/05-flujos-y-estados.md) |
| **Desarrollo** | [Puesta en marcha](docs/desarrollo/01-entorno-y-despliegue.md) · [Validación](docs/desarrollo/02-validacion-y-mantenimiento.md)                                                       |
| **Formativa**  | [Origen de la dupla](docs/formativa/README.md) · [Método y fuentes del curso](docs/formativa/01-metodologia-y-fuentes.md)                                                             |

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

[Licencia del código](LICENSE) · [Condiciones, créditos y uso comercial](LICENSING.md) · [Avisos](NOTICE) · [Recursos visuales](branding/README.md).
