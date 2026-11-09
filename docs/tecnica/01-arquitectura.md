# 01 · Arquitectura, de afuera hacia adentro

La arquitectura separa la **interfaz**, las **operaciones del servidor**, el **cálculo de homologación** y los **servicios externos**.

Esta arquitectura describe el piloto de comparación de cargos. La propuesta para otros dominios está en [arquitectura de expansión](08-arquitectura-de-expansion.md).

## Nivel 1 — Contexto del sistema

```mermaid
flowchart LR
  A([Analista]) -->|fichas, pesos y decisión| S["Espejo · Homologa"]
  S -->|comparaciones e informes| A
  X[(Planillas de cargos<br/>y encuesta)] -->|importación| S
  S <-->|lectura y escritura| D[("PostgreSQL · Supabase")]
  S -->|texto de cargos<br/>sin remuneración| I["Proveedores de IA<br/>Gemini / respaldo Groq"]
  I -->|resultados estructurados| S
  classDef human fill:#FFF2D6,stroke:#BD9556,color:#563C18,stroke-width:2px;
  classDef core fill:#123B5B,stroke:#2699BC,color:#FFFFFF,stroke-width:2px;
  classDef ext fill:#EAF4F8,stroke:#8BB4C4,color:#193A4D;
  class A human;
  class S core;
  class X,D,I ext;
```

La persona decide qué cargo considera equivalente. Las planillas aportan el catálogo y las bandas; los proveedores de IA aportan interpretación textual, no una decisión laboral definitiva.

## Nivel 2 — Contenedores y ubicación de las operaciones

```mermaid
flowchart TB
  subgraph B["Navegador"]
    UI["React · rutas y formularios"]
    ARCH["Lectores de planillas<br/>y exportaciones"]
    UI <--> ARCH
  end
  subgraph W["Servidor TanStack Start"]
    FN["Funciones del servidor<br/>validación y orquestación"]
    MOTOR["Motor determinístico"]
    IA["Normalización y comparación IA"]
    DBAPI["Cliente Supabase privilegiado"]
    FN --> MOTOR
    FN --> IA
    FN --> DBAPI
  end
  UI <-->|solicitudes| FN
  DBAPI <--> PG[("PostgreSQL")]
  IA --> G["Google Gemini"]
  IA -.->|respaldo bajo condiciones| Q["Groq"]
  classDef app fill:#143E60,stroke:#3B96B6,color:#FFF;
  classDef light fill:#EAF4F8,stroke:#9BBAC9,color:#153A51;
  classDef data fill:#FFF2DB,stroke:#C39C59,color:#5D451C;
  class FN,MOTOR,IA app;
  class UI,ARCH,DBAPI,G,Q light;
  class PG data;
```

La lectura de planillas y la preparación de informes ocurren en el navegador; las consultas a base y llamadas de IA se hacen a través del servidor. El cliente de base usa `SUPABASE_SERVICE_ROLE_KEY`: esa credencial **no debe salir al navegador**.

## Nivel 3 — Componentes relevantes del repositorio

```mermaid
flowchart LR
  ROUTES["src/routes<br/>src/components"] --> F["*.functions.ts<br/>operaciones de negocio"]
  F --> M["motor.server.ts"]
  F --> N["normalizacion.server.ts"]
  F --> S["semantica.server.ts"]
  N --> RET["gemini-retry.server.ts"]
  S --> RET
  N -.-> GROQ["groq.server.ts"]
  S -.-> GROQ
  F --> DB["supabase-public.server.ts"]
  ROUTES --> XLS["cargos-import.ts<br/>exportacion.ts"]
  classDef main fill:#143D5B,stroke:#3896B7,color:#FFFFFF;
  classDef aux fill:#EEF6F9,stroke:#95B6C6,color:#22435A;
  class F,M,N,S,DB main;
  class ROUTES,RET,GROQ,XLS aux;
```

| Componente                                                                                                                      | Responsabilidad                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`src/routes`](../../src/routes) / [`src/components`](../../src/components)                                                     | Navegación, presentación del score, panel del benchmark y decisión.                                |
| [`homologacion.functions.ts`](../../src/lib/homologacion.functions.ts)                                                          | Crear/ejecutar homologación, coordinar IA, preseleccionar, guardar decisión y consultar historial. |
| [`motor.server.ts`](../../src/lib/motor.server.ts)                                                                              | Calcular similitud por campo, pesos y descartes, sin consultas de red.                             |
| [`normalizacion.server.ts`](../../src/lib/normalizacion.server.ts) / [`semantica.server.ts`](../../src/lib/semantica.server.ts) | Estructurar experiencia/formación y evaluar semánticamente candidatos.                             |
| [`supabase-public.server.ts`](../../src/lib/supabase-public.server.ts)                                                          | Acceso a Supabase con credenciales de servidor.                                                    |
| [`cargos-import.ts`](../../src/lib/cargos-import.ts) / [`exportacion.ts`](../../src/lib/exportacion.ts)                         | Interpretar hojas y construir Excel / informe imprimible.                                          |

## Nivel 4 — Despliegue lógico

```mermaid
flowchart LR
  U["Navegador de usuario"] -->|HTTPS| H["Hosting con SSR<br/>y server functions"]
  H <-->|API de datos| P[("Supabase")]
  H -->|HTTPS| G["Gemini"]
  H -.->|respaldo| Q["Groq"]
  classDef host fill:#123B5B,stroke:#2796BD,color:#FFF;
  classDef ext fill:#EDF5F8,stroke:#92B3C4,color:#214153;
  class H host;
  class U,P,G,Q ext;
```

[`vite.config.ts`](../../vite.config.ts) delega la configuración en `@lovable.dev/vite-tanstack-config`. El despliegue requiere un servidor compatible con TanStack Start y las credenciales de los servicios externos. Consulta [entorno y despliegue](../desarrollo/01-entorno-y-despliegue.md) para preparar la instalación.

El cliente adjunta el token de sesión cuando existe y el servidor configura protección CSRF. La autorización de las operaciones con rol de servicio requiere los controles descritos en [seguridad](07-seguridad-y-limitaciones.md).

[Dominio y datos](02-dominio-y-datos.md) · [Secuencia de operaciones](05-flujos-y-estados.md) · [Desarrollo local](../desarrollo/01-entorno-y-despliegue.md)
