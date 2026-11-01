# 05 · Flujos, secuencia y estados

Los pasos de la interfaz y los estados guardados en la base se gestionan por separado. Retroceder en el asistente no revierte una ejecución ya guardada.

## Actividad completa de homologación

```mermaid
flowchart TD
  IN([Iniciar desde un cargo interno]) --> VALID{¿Hay referencias y<br/>criterios con peso?}
  VALID -->|No| FIX[Corregir catálogo<br/>o criterios]
  FIX --> VALID
  VALID -->|Sí| N[Normalizar texto si hace falta<br/>con alternativa al original]
  N --> M[Ejecutar motor<br/>y guardar resultados]
  M --> Q{¿Hay candidatos?}
  Q -->|No| FIN0([Revisar criterios o datos])
  Q -->|Sí| IA[Solicitar análisis IA]
  IA --> OK{¿IA válida?}
  OK -->|Sí| H[Guardar score semántico<br/>y score final]
  OK -->|No| P[Conservar sólo score motor]
  H --> S[Analista preselecciona uno o más]
  P --> S
  S --> D[Analista confirma uno]
  D --> B[Consultar bandas por tamaño]
  B --> E([Historial · Excel · PDF])
  classDef base fill:#EBF4F7,stroke:#9BBAC8,color:#17384D;
  classDef human fill:#FFF0D5,stroke:#BE984E,color:#5D441D,stroke-width:2px;
  classDef finish fill:#143C57,stroke:#4286A7,color:#fff;
  class IN,VALID,FIX,N,M,Q,IA,OK,H,P,B base;
  class S,D human;
  class FIN0,E finish;
```

El análisis de IA es asistencial: una falla no elimina candidatos determinísticos. La decisión final la registra el analista; el backend no obliga a un score semántico presente.

## Secuencia de componentes

```mermaid
sequenceDiagram
  autonumber
  actor Analista
  participant UI as React / navegador
  participant RPC as Funciones del servidor
  participant Motor as Motor puro
  participant DB as PostgreSQL
  participant IA as Proveedor IA
  Analista->>UI: Selecciona cargo y pesos
  UI->>RPC: ejecutarHomologacion(cargo, pesos)
  RPC->>DB: Leer cargo, referencias y criterios
  opt Fichas no normalizadas
    RPC->>IA: Normalizar experiencia/formación
    IA-->>RPC: Fichas o error
    RPC->>DB: Guardar fichas válidas
  end
  RPC->>Motor: ejecutarMotor(datos, criterios)
  Motor-->>RPC: Admitidos, scores y descartes
  RPC->>DB: Guardar ejecución + resultados
  RPC-->>UI: Ejecución y evaluación
  Analista->>UI: Solicita análisis semántico
  UI->>RPC: analizarSemantica(ejecucion)
  RPC->>DB: Leer candidatos del motor
  RPC->>IA: Comparar sólo candidatos admitidos, sin sueldo
  IA-->>RPC: JSON validable o error
  RPC->>DB: Guardar análisis y scores si son válidos
  RPC-->>UI: Resultado IA o aviso
  Analista->>UI: Marca varios candidatos
  UI->>RPC: guardarPreseleccion(ids)
  RPC->>DB: Guardar marcas y scores
  Analista->>UI: Confirma un candidato
  UI->>RPC: guardarDecision(id, analista, comentario)
  RPC->>DB: Guardar decisión única por ejecución
  UI->>RPC: getEjecucion(id)
  RPC->>DB: Leer decisión y bandas si hay confirmación
  RPC-->>UI: Historial + benchmark
```

La preselección se guarda mediante varias consultas. Un fallo intermedio o solicitudes concurrentes pueden dejar cambios parciales; la actualización atómica está pendiente.

## Máquina de estados de ejecución (persistida)

```mermaid
stateDiagram-v2
  [*] --> EN_PROCESO: ejecutarHomologacion
  [*] --> PENDIENTE: createEjecucion (ruta alternativa)
  EN_PROCESO --> COMPLETADA: motor y persistencia correctos
  EN_PROCESO --> ERROR: excepción en el cálculo/guardado
  note right of COMPLETADA
    El motor terminó.
    No implica análisis IA
    ni decisión confirmada.
  end note
```

El esquema define `PENDIENTE`, `EN_PROCESO`, `COMPLETADA` y `ERROR`. `createEjecucion` crea una ejecución `PENDIENTE`; el flujo principal, `ejecutarHomologacion`, crea una nueva directamente como `EN_PROCESO`.

## Estados de análisis y decisión (persistencias distintas)

```mermaid
flowchart LR
  E[Motor completado] --> I{Intento de IA}
  I -->|Válido| OK[analisis_semanticos: OK<br/>resultados con score IA/final]
  I -->|Fallido| ERROR[analisis_semanticos: ERROR<br/>score IA/final pueden quedar null]
  OK --> PRE[decision_preseleccion:<br/>0 a N candidatos]
  ERROR --> PRE
  PRE --> DEC[decisiones:<br/>0 o 1 fila por ejecución]
  DEC --> BEN[Consulta de bandas<br/>si existe decisión]
  classDef normal fill:#EAF3F7,color:#1C4258,stroke:#98B7C6;
  classDef human fill:#FFF1D7,color:#664D22,stroke:#C39C50;
  class E,I,OK,ERROR normal;
  class PRE,DEC,BEN human;
```

El análisis, la preselección y la decisión se guardan en tablas separadas. El `upsert` de `decisiones` permite actualizar la referencia confirmada para un mismo `ejecucion_id`.

[Guía general](../general/02-recorrido-del-analista.md) · [ER](02-dominio-y-datos.md) · [Seguridad](07-seguridad-y-limitaciones.md).
