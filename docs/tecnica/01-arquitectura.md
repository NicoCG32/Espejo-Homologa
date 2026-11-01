# 01 · Arquitectura

La interfaz se ejecuta en el navegador. Las funciones de servidor consultan la base de datos, ejecutan el motor y se comunican con los proveedores de IA.

## Nivel 1 · Contexto

```mermaid
flowchart LR
  Analista([Analista]) -->|fichas, criterios y decisión| App[Espejo · Homologa]
  App -->|comparación e historial| Analista
  Encuesta[(Planillas propias<br/>y encuesta)] -->|importación| App
  App <-->|lectura y escritura| Datos[(PostgreSQL<br/>Supabase)]
  App -->|candidatos sin sueldo| IA[Gemini / Groq]
  IA -->|scores y texto estructurado| App
  classDef actor fill:#FFF0D2,stroke:#B68A3D,color:#4B3718,stroke-width:2px;
  classDef app fill:#143D58,stroke:#3B8BAA,color:#FFF,stroke-width:2px;
  classDef ext fill:#EDF5F8,stroke:#8EAFC0,color:#214255;
  class Analista actor;
  class App app;
  class Encuesta,Datos,IA ext;
```

Las planillas se procesan desde la interfaz. El análisis semántico usa información textual del cargo interno y de los candidatos admitidos; no incorpora sueldo ni tamaño de empresa al payload de comparación.

## Nivel 2 · Contenedores y límites de ejecución

```mermaid
flowchart TB
  subgraph Cliente[«Navegador»]
    UI[React + TanStack Router<br/>formularios, vistas y exportaciones]
    Parse[xlsx / CSV<br/>lectura previa de planillas]
  end
  subgraph Servidor[«TanStack Start / servidor SSR»]
    RPC[Server functions<br/>validación y orquestación]
    Nucleo[Motor determinístico]
    Normaliza[Normalización de textos]
    Semantica[Comparación semántica]
    Adaptador[Cliente privilegiado Supabase]
  end
  DB[(PostgreSQL)]
  Gemini[Gemini]
  Groq[Groq: respaldo]
  UI -->|solicitudes| RPC
  Parse --> UI
  RPC --> Nucleo
  RPC --> Normaliza
  RPC --> Semantica
  RPC --> Adaptador --> DB
  Normaliza --> Gemini
  Semantica --> Gemini
  Normaliza -.->|fallo transitorio agotado| Groq
  Semantica -.->|fallo transitorio agotado| Groq
  classDef core fill:#163A58,color:#fff,stroke:#4289A9;
  classDef service fill:#EAF4F7,color:#193B50,stroke:#89B0C1;
  classDef db fill:#FFF2D7,color:#624A23,stroke:#C49B50;
  class RPC,Nucleo,Normaliza,Semantica core;
  class UI,Parse,Adaptador,Gemini,Groq service;
  class DB db;
```

El cliente de base de datos utiliza un rol de servicio que puede omitir RLS. Cada operación necesita validar identidad y permisos antes de usarlo. [Controles de acceso pendientes](07-seguridad-y-limitaciones.md).

## Nivel 3 · Componentes del servidor

```mermaid
flowchart LR
  UI[Routes y componentes] --> F[*.functions.ts<br/>server functions]
  F --> M[motor.server.ts]
  F --> N[normalizacion.server.ts]
  F --> S[semantica.server.ts]
  S --> R[gemini-retry.server.ts]
  N --> R
  S -.-> G[groq.server.ts]
  N -.-> G
  F --> DB[supabase-public.server.ts]
  DB --> P[(PostgreSQL)]
  UI --> X[exportacion.ts<br/>Excel y PDF en navegador]
  UI --> I[cargos-import.ts<br/>interpretación de planillas]
  classDef core fill:#153B56,color:#fff,stroke:#5A9DB9;
  classDef aux fill:#F0F5F8,color:#26495C,stroke:#9CB6C3;
  class F,M,N,S,DB core;
  class UI,R,G,X,I aux;
```

| Capa | Referencia del repositorio | Responsabilidad |
| --- | --- | --- |
| Interfaz y navegación | [`src/routes`](../../src/routes) y [`src/components`](../../src/components) | Mostrar pasos, comparar fichas y registrar acciones |
| Funciones del servidor | [`src/lib/homologacion.functions.ts`](../../src/lib/homologacion.functions.ts) y módulos equivalentes | Recibir solicitudes y consultar/actualizar datos |
| Dominio | [`src/lib/motor.server.ts`](../../src/lib/motor.server.ts) | Evaluar criterios sin llamadas de red |
| Normalización/IA | [`normalizacion.server.ts`](../../src/lib/normalizacion.server.ts), [`semantica.server.ts`](../../src/lib/semantica.server.ts) | Preparar fichas y evaluar texto |
| Persistencia | [`supabase-public.server.ts`](../../src/lib/supabase-public.server.ts), [`supabase/migrations`](../../supabase/migrations), [`drizzle/migrations`](../../drizzle/migrations) | Consulta privilegiada y evolución del esquema |
| Informes | [`exportacion.ts`](../../src/lib/exportacion.ts) | Crear Excel y abrir un informe imprimible en el navegador |

## Nivel 4 · Despliegue lógico

```mermaid
flowchart LR
  Usuario[Dispositivo / navegador] -->|HTTPS| Hosting[Hosting web<br/>SSR / server functions]
  Hosting -->|API Supabase con clave de servicio| Pg[(Base gestionada)]
  Hosting -->|API por HTTPS| Gemini[Google Gemini]
  Hosting -.->|respaldo condicionado| Groq[Groq]
  Hosting -->|recursos estáticos| Usuario
  classDef main fill:#163C58,color:#fff,stroke:#3C88A5;
  classDef ext fill:#ECF5F8,color:#153A51,stroke:#93B7C7;
  class Hosting main;
  class Usuario,Pg,Gemini,Groq ext;
```

Vite y TanStack Start generan la aplicación con una salida compatible con Workers. La plataforma de despliegue debe proporcionar las variables públicas y los secretos de servidor descritos en la [guía de entorno](../desarrollo/01-entorno-y-despliegue.md).

[Dominio y datos](02-dominio-y-datos.md) · [Flujo de secuencia](05-flujos-y-estados.md) · [Despliegue práctico](../desarrollo/01-entorno-y-despliegue.md).
