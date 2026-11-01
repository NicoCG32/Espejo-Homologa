# Identidad visual · Espejo: Homologa

Esta identidad nació del contraste entre dos perspectivas frente a un mismo espejo. El azul profundo representa el lado interno del análisis; el turquesa, la referencia externa. Entre ambos aparece un espejo vertical y una red de conexiones: **el contenido es el puente para comparar, no el nombre del cargo ni su remuneración**.

## Qué recurso usar

| Uso | Variante clara | Variante oscura |
| --- | --- | --- |
| README principal o presentaciones | [Banner SVG](banners/espejo-banner-claro.svg) | [Banner SVG](banners/espejo-banner-oscuro.svg) |
| Cabeceras y documentación | [Logo horizontal SVG](logos/espejo-logo-horizontal-claro.svg) | [Logo horizontal SVG](logos/espejo-logo-horizontal-oscuro.svg) |
| Portadas cuadradas | [Portada SVG](portadas/espejo-identidad-cuadrada.svg) | [Portada SVG](portadas/espejo-identidad-cuadrada-oscura.svg) |
| Espacios reducidos | [Isotipo SVG](logos/espejo-isotipo-transparente.svg) | [Isotipo SVG](logos/espejo-isotipo-transparente-oscuro.svg) |

- Las variantes **claras** se usan sobre fondos claros y las **oscuras** sobre fondos oscuros.
- Los SVG con nombre contienen «Espejo: Homologa» como texto convertido a trazados, sin depender de fuentes externas.
- Los isotipos y los iconos se reservan para favicon, PWA y espacios pequeños donde el nombre completo no sería legible.
- El `README.md` principal usa el banner y `docs/README.md` usa el logo horizontal con cambio automático según el tema de GitHub.
- Los PNG equivalentes están renderizados a partir de los SVG de esta versión. Para otros tamaños, exporta desde el SVG y evita estirar imágenes rasterizadas.
- No alteres el orden visual de «Espejo: Homologa», el color del espejo o la simetría de las siluetas. Conserva el espacio alrededor del logo.

## Uso en la aplicación y tipografía

`branding/` conserva el catálogo para documentación y presentaciones; `public/brand/` contiene los recursos que sirve la aplicación. `LogoPrincipal` utiliza el logo horizontal para la portada y `LogoEspejo` el isotipo para navegación compacta. El informe imprimible usa el mismo logo horizontal claro de `public/brand/`.

La interfaz usa **Epilogue** para texto y **Urbanist** para títulos, declaradas en `src/styles.css` y cargadas desde Google Fonts en `src/routes/__root.tsx`. El informe imprimible usa Arial/Helvetica como fuentes de sistema.

## Catálogo y créditos

El catálogo completo se encuentra en las carpetas `logos/`, `banners/`, `portadas/`, `iconos/` y `referencias/`. `manifest.json` registra dimensiones y sumas SHA-256 de cada recurso.

El archivo [original de referencia](referencias/espejo-homologa-original.jpg) se conserva para mantener el lenguaje visual. Consulta [licencias y créditos](../LICENSING.md) antes de reutilizar o distribuir los recursos.
