# 05 · Flujos, secuencia y estados

Para interpretar el historial hay que distinguir **lo que sucede en la pantalla** de **lo que se guarda en tablas distintas**. Una ejecución que terminó de calcular no implica que la IA haya funcionado ni que alguien haya confirmado un cargo.

## Actividad de una homologación

```mermaid
flowchart TD
  IN(["Seleccionar cargo interno"]) --> R{"¿Hay referencias y<br/>pesos positivos?"}
  R -->|No| AJ["Corregir catálogo o criterios"]
  AJ --> R
  R -->|Sí| N["Normalizar experiencia/formación<br/>si corresponde"]
  N --> M["Calcular y persistir resultados del motor"]
  M --> C{"¿Hay candidatos admitidos?"}
  C -->|No| STOP(["Revisar la información"])
  C -->|Sí| IA["Solicitar comparación semántica"]
  IA --> OK{"¿IA válida?"}
  OK -->|Sí| S["Guardar score IA y final"]
  OK -->|No| P["Continuar con score del motor"]
  S --> PRE["Analista marca varios candidatos"]
  P --> PRE
  PRE --> D["Analista elige un definitivo"]
  D --> B["Consultar benchmark por tamaño"]
  B --> H(["Historial e informes"])
  classDef process fill:#EAF4F7,stroke:#8AB6C7,color:#164057;
  classDef human fill:#FFF1D7,stroke:#C29B5E,color:#5A411B,stroke-width:2px;
  classDef decision fill:#123E5E,stroke:#3299BB,color:#FFFFFF;
  class IN,N,M,C,IA,S,P,B,STOP,H process;
  class AJ,PRE,D human;
  class R,OK decision;
```

La etapa de IA no debe leerse como requisito para registrar una decisión. Si el análisis falla, el motor se conserva y el analista puede continuar. La preselección de esta etapa es **humana**, distinta de la lista que el motor llamó internamente `preseleccionados`.

## Secuencia — Quién llama a quién

```mermaid
sequenceDiagram
  autonumber
  actor A as Analista
  participant UI as Navegador / React
  participant SF as Funciones servidor
  participant DB as Supabase / PostgreSQL
  participant M as Motor
  participant AI as Gemini o Groq
  A->>UI: Selecciona cargo y pesos
  UI->>SF: ejecutarHomologacion
  SF->>DB: Leer cargo, referencias y criterios
  opt Existen textos sin ficha vigente
    SF->>AI: Normalizar experiencia y formación
    AI-->>SF: Fichas estructuradas o error
    SF->>DB: Guardar fichas válidas
  end
  SF->>M: Ejecutar reglas
  M-->>SF: Scores, admitidos y descartados
  SF->>DB: Guardar ejecución y admitidos
  SF-->>UI: Resultados del motor
  A->>UI: Solicitar análisis semántico
  UI->>SF: analizarSemantica
  SF->>DB: Leer candidatos admitidos
  SF->>AI: Comparar sin sueldo ni tamaño
  AI-->>SF: Scores estructurados o fallo
  SF->>DB: Guardar análisis y scores si válidos
  SF-->>UI: Scores IA/final o aviso
  A->>UI: Marcar varios
  UI->>SF: guardarPreseleccion
  SF->>DB: Reemplazar filas de preselección
  A->>UI: Confirmar uno + analista + comentario
  UI->>SF: guardarDecision
  SF->>DB: Upsert de decisión por ejecución
  UI->>SF: getEjecucion
  SF->>DB: Leer historial y banda del definitivo
  SF-->>UI: Decisión, comparación y benchmark
```

**El diagrama muestra operaciones lógicas, no una transacción ACID única.** `guardarPreseleccion` elimina las marcas anteriores e inserta las nuevas mediante consultas separadas. Ante errores intermedios o concurrencia, la aplicación necesita protección o recuperación adicional.

## Estados persistidos de la ejecución

```mermaid
stateDiagram-v2
  [*] --> EN_PROCESO: ejecutarHomologacion
  EN_PROCESO --> COMPLETADA: motor y escritura completados
  EN_PROCESO --> ERROR: fallo de cálculo/escritura
  [*] --> PENDIENTE: createEjecucion (otra función)
  note right of COMPLETADA
    Se terminó la fase del motor.
    No hay implicación de IA válida
    ni decisión humana registrada.
  end note
```

El enum de base incluye `PENDIENTE`, `EN_PROCESO`, `COMPLETADA` y `ERROR`. El flujo principal crea directamente una ejecución `EN_PROCESO`. `createEjecucion` crea una fila `PENDIENTE`, sin una transición automática hacia la ejecución del motor.

## Resultado de IA y elección humana: no son el mismo estado

```mermaid
flowchart LR
  M["Motor completado"] --> I{"¿Se intentó IA?"}
  I -->|No| PRE["0..N preseleccionados<br/>por analista"]
  I -->|Sí| A["analisis_semanticos<br/>OK o ERROR"]
  A --> PRE
  PRE --> D["0..1 decisión definitiva<br/>por ejecución"]
  D --> B["Benchmark disponible<br/>para el definitivo"]
  classDef cool fill:#E8F4F7,stroke:#9BBBC9,color:#1B3D54;
  classDef warm fill:#FFF0D8,stroke:#C7A061,color:#60471F;
  class M,I,A cool;
  class PRE,D,B warm;
```

`analisis_semanticos` guarda intentos `OK` o `ERROR`; `decision_preseleccion` guarda de cero a muchos marcados y `decisiones` permite como máximo una fila por ejecución. El servidor usa `upsert` en esa última tabla, de modo que **«única» no significa «inmutable»**. El estado del motor y la decisión del analista se interpretan por separado.

[Recorrido general](../general/02-recorrido-del-analista.md) · [Modelo de datos](02-dominio-y-datos.md) · [Seguridad](07-seguridad-y-limitaciones.md)
