# 02 · Dominio y modelo de persistencia

El dominio distingue **la ficha de un cargo**, **una ejecución que compara cargos**, **los resultados calculados** y **la decisión del analista**. La confirmación de una homologación se registra por separado del cálculo de los puntajes.

## Modelo conceptual (dominio)

```mermaid
classDiagram
  direction LR
  class Empresa {
    +id
    +nombre
    +tipo
    +tamano
  }
  class Cargo {
    +id
    +tipo INTERNO|REFERENCIA
    +nombre
    +descripcion
    +atributos
    +sueldo informativo
  }
  class Criterio {
    +campo
    +peso
    +activo
    +obligatorio
  }
  class Ejecucion {
    +cargo_id
    +estado
    +criterios_usados
  }
  class Resultado {
    +candidato_id
    +score_deterministico
    +score_semantico
    +score_final
  }
  class Preseleccion {
    +candidato_id
    +scores_utilizados
  }
  class Decision {
    +candidato_id
    +analista
    +comentario
    +tamano_empresa
  }
  class AnalisisSemantico {
    +modelo
    +prompt_version
    +estado
  }
  class BandaSalarial {
    +P25
    +P50
    +P75
    +promedio
    +fuente
    +anio
  }
  Empresa "1" --> "0..*" Cargo
  Cargo "1" --> "0..*" Ejecucion : interno
  Cargo "1" --> "0..*" BandaSalarial : referencia
  Ejecucion "1" --> "0..*" Resultado
  Ejecucion "1" --> "0..*" AnalisisSemantico
  Ejecucion "1" --> "0..*" Preseleccion
  Ejecucion "1" --> "0..1" Decision
  Resultado --> Cargo : candidato
  Preseleccion --> Cargo : marcado
  Decision --> Cargo : definitivo
```

Las clases representan conceptos del dominio; su persistencia se detalla en el siguiente modelo de tablas.

## Modelo entidad–relación (tablas)

```mermaid
erDiagram
  EMPRESAS ||--o{ CARGOS : contiene
  CARGOS ||--o{ BANDAS_SALARIALES : tiene
  CARGOS ||--o{ EJECUCIONES : interno_evaluado
  EJECUCIONES ||--o{ RESULTADOS : produce
  CARGOS ||--o{ RESULTADOS : candidato
  EJECUCIONES ||--o{ ANALISIS_SEMANTICOS : registra
  EJECUCIONES ||--o{ DECISION_PRESELECCION : guarda
  CARGOS ||--o{ DECISION_PRESELECCION : marcado
  EJECUCIONES ||--o| DECISIONES : confirma
  CARGOS ||--o{ DECISIONES : definitivo
  EMPRESAS {
    uuid id PK
    text nombre
    enum tipo
    enum tamano
  }
  CARGOS {
    uuid id PK
    uuid empresa_id FK
    enum tipo
    text nombre
    text descripcion
    numeric sueldo
    jsonb atributos_semanticos
  }
  BANDAS_SALARIALES {
    uuid id PK
    uuid cargo_id FK
    enum tipo_empresa
    numeric p25
    numeric p50
    numeric p75
    numeric promedio
    text fuente
    integer anio
  }
  EJECUCIONES {
    uuid id PK
    uuid cargo_id FK
    enum estado
    jsonb criterios_usados
    timestamp fecha
  }
  RESULTADOS {
    uuid id PK
    uuid ejecucion_id FK
    uuid candidato_id FK
    numeric score_deterministico
    numeric score_semantico
    numeric score_final
  }
  ANALISIS_SEMANTICOS {
    uuid id PK
    uuid ejecucion_id FK
    text modelo
    text prompt_version
    enum estado
    jsonb respuesta_validada
  }
  DECISION_PRESELECCION {
    uuid id PK
    uuid ejecucion_id FK
    uuid candidato_id FK
    jsonb scores_utilizados
  }
  DECISIONES {
    uuid id PK
    uuid ejecucion_id FK
    uuid candidato_id FK
    text usuario
    text comentario
    enum tamano_empresa
    jsonb scores_utilizados
  }
```

Este ER está **simplificado para lectura**: se omiten columnas técnicas, índices y tablas sin relaciones FK en este recorrido. Para restricciones exactas deben revisarse las migraciones SQL.

## Tablas que completan el dominio

| Tabla                   | Para qué sirve                                   | Precisión importante                                                                                         |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `criterios`             | Campo, peso, activación y obligatoriedad.        | Los pesos de la ejecución se conservan en `ejecuciones.criterios_usados`.                                    |
| `presets_pesos`         | Conjuntos guardados de ponderaciones.            | No constituyen historial de decisiones.                                                                      |
| `diccionario_entradas`  | Área, subárea y nivel; código/nombre.            | Catálogo auxiliar con unicidad por tipo y código.                                                            |
| `configuracion`         | Guarda opciones globales como `pesos_score`.     | Los pesos globales motor/IA pueden cambiar después de una ejecución.                                         |
| `bandas_salariales`     | Valores de encuesta por cargo y tamaño P/M/G.    | Única combinación `(cargo_id, tipo_empresa)`; valores faltantes admiten `null`.                              |
| `analisis_semanticos`   | Intentos IA, modelo, versión, respuesta y error. | Puede haber varios intentos por ejecución.                                                                   |
| `decision_preseleccion` | Uno o más candidatos elegidos para comparar.     | Unicidad `(ejecucion_id, candidato_id)`.                                                                     |
| `decisiones`            | Referencia definitiva y nombre de analista.      | Restricción **única** por ejecución; la operación actual usa `upsert`, por lo que la fila puede sustituirse. |

## Migraciones del esquema

Las tablas iniciales se definen en [`supabase/migrations`](../../supabase/migrations); las ampliaciones sobre bandas, diccionario, presets, scores híbridos y decisiones están en [`drizzle/migrations`](../../drizzle/migrations). [`drizzle/schema.ts`](../../drizzle/schema.ts) está vacío intencionalmente. Para reconstruir la base hay que revisar las dependencias de ambas carpetas.

## Trazabilidad del cálculo

Se guardan los scores del motor, IA y final, además de una copia de los puntajes usados al decidir. Los pesos globales motor/IA aplicados al cálculo final y los motivos de descarte no se conservan por ejecución. Para reproducir por completo un cálculo histórico hace falta persistir esos datos y la versión de las reglas.

[Motor](03-motor-deterministico.md) · [Flujos y estados](05-flujos-y-estados.md) · [Riesgos](07-seguridad-y-limitaciones.md)
