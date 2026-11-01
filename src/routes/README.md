# Rutas de Espejo · Homologa

La aplicación usa el enrutamiento por archivos de TanStack Router/Start. Cada archivo de esta carpeta define una ruta o el diseño raíz.

| Archivo | Ruta | Uso |
| --- | --- | --- |
| `index.tsx` | `/` | Portada y acceso al recorrido |
| `cargos.tsx` | `/cargos` | Cargos internos, referencias e importaciones |
| `empresas.tsx` | `/empresas` | Empresas y tamaños |
| `diccionario.tsx` | `/diccionario` | Códigos de área, subárea y nivel |
| `criterios.tsx` | `/criterios` | Pesos y criterios |
| `homologacion.nueva.tsx` | `/homologacion/nueva` | Asistente de cinco pasos |
| `historial.index.tsx` | `/historial` | Ejecuciones anteriores |
| `historial.$id.tsx` | `/historial/$id` | Resultados, decisión e informes |
| `__root.tsx` | Diseño raíz | Navegación y estructura general |

El archivo `src/routeTree.gen.ts` se genera automáticamente: no se edita a mano.

[Flujos](../../docs/tecnica/05-flujos-y-estados.md) · [Arquitectura](../../docs/tecnica/01-arquitectura.md).
