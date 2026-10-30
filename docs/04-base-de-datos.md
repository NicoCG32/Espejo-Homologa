# 04 · Base de datos

PostgreSQL gestionado por Lovable Cloud. Todas las tablas del esquema `public` tienen RLS activo y
permisos concedidos únicamente al rol de servicio: no son accesibles desde el navegador.

## Enums

| Enum               | Valores                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cargo_tipo`       | `INTERNO`, `REFERENCIA`                                                                                                     |
| `empresa_tipo`     | `P`, `M`, `G` (Pequeña, Mediana, Grande)                                                                                    |
| `criterio_campo`   | `nombre`, `descripcion`, `area`, `subarea`, `codigo_cargo`, `nivel_jerarquico`, `experiencia`, `requisitos`, `tipo_empresa` |
| `diccionario_tipo` | `AREA`, `SUBAREA`, `NIVEL`                                                                                                  |
| `ejecucion_estado` | `PENDIENTE`, `EN_PROCESO`, `COMPLETADA`, `ERROR`                                                                            |
| `semantico_estado` | `OK`, `ERROR`                                                                                                               |

## Tablas

### `empresas`

`id`, `nombre`, `tipo` (`empresa_tipo`), `tamano` (`empresa_tipo`, nullable).
`tamano` nulo = tamaño pendiente de definir; la empresa queda fuera de comparaciones por tamaño.

### `cargos`

`id`, `empresa_id` → `empresas`, `tipo` (`cargo_tipo`), `nombre`, `descripcion`, `sueldo` (numérico,
nullable, **informativo**), `atributos_semanticos` (jsonb con 7 claves) y columnas estructurales
opcionales: `codigo_cargo`, `codigo_area`, `nombre_area`, `codigo_subarea`, `nombre_subarea`,
`codigo_nivel_jerarquico`, `nivel_jerarquico`, `experiencia_requerida`, `requisitos_formacion`.

La clave `_norm` dentro de `atributos_semanticos` guarda la ficha normalizada de experiencia y
formación (versión + huella del texto original); ver [11 · Normalización](./11-normalizacion.md).

Índice único parcial **`(empresa_id, tipo, codigo_cargo)` donde `codigo_cargo IS NOT NULL`**:
un `RRHH-001` interno y un `RRHH-001` de referencia de la misma empresa son registros distintos.

### `bandas_salariales`

`id`, `cargo_id` → `cargos`, `tipo_empresa`, `p25`, `p50`, `p75`, `promedio`, `fuente`, `anio`.
Único por `(cargo_id, tipo_empresa)`. Celda vacía en la planilla = `NULL` ("dato no disponible"),
nunca 0. `fuente` y `anio` se declaran al cargar la planilla de remuneraciones; si no se informan
quedan en `NULL` y el benchmark muestra "No disponible".

### `criterios`

`id`, `nombre`, `campo` (`criterio_campo`), `peso`, `activo`, `obligatorio`.

### `presets_pesos`

`id`, `nombre` (único), `pesos` (jsonb `{criterio_id: peso}`), `created_at`, `updated_at`.

### `diccionario_entradas`

`id`, `tipo` (`diccionario_tipo`), `codigo`, `nombre`, único por `(tipo, codigo)`.
Precargado con el diccionario de Recursos Humanos (1 área, 14 subáreas, 6 niveles).

### `ejecuciones`

`id`, `cargo_id` → `cargos`, `fecha`, `estado`, `criterios_usados` (jsonb: ponderación aplicada en
esa homologación, para reproducibilidad).

### `resultados`

`id`, `ejecucion_id` → `ejecuciones`, `candidato_id` → `cargos`, `score_deterministico`,
`score_semantico`, `score_final`.
`score_final` es híbrido y queda `NULL` mientras no exista análisis IA válido.

### `configuracion`

`clave` (PK), `valor` (jsonb), `updated_at`. Clave `pesos_score`: `{"motor": 70, "ia": 30}`,
ponderación del score final híbrido (debe sumar 100).

### `decisiones`

`id`, `ejecucion_id` → `ejecuciones` (**único**), `candidato_id` → `cargos`, `decision`,
`comentario`, `usuario`, `scores_utilizados` (jsonb con los tres scores al decidir),
`tamano_empresa` (tamaño elegido para el benchmark, nullable), `fecha`.
Una decisión por ejecución; no modifica ningún score.

### `decision_preseleccion`

`id`, `ejecucion_id` → `ejecuciones`, `candidato_id` → `cargos`, `scores_utilizados` (jsonb),
`created_at`. Único por `(ejecucion_id, candidato_id)`. Candidatos preseleccionados por el analista
antes de la decisión definitiva; no modifica ningún score.

### `analisis_semanticos`

`id`, `ejecucion_id`, `estado` (`OK`/`ERROR`), `modelo`, `prompt_version`, `candidatos_enviados`,
`respuesta_cruda`, `respuesta_validada`, `error_mensaje`.

## Relaciones

```text
empresas 1──n cargos 1──n bandas_salariales
                │
                ├── (INTERNO)   1──n ejecuciones 1──n resultados ──n─1 cargos (candidato)
                └── (REFERENCIA)                 1──1 analisis_semanticos
```

## Migraciones

Viven en `supabase/migrations/` y se aplican en orden cronológico. Cada `CREATE TABLE` en `public`
incluye sus `GRANT` al rol de servicio y habilita RLS en la misma migración.

<!-- DOCUMENTACION:nivel-2026-10-29:BEGIN -->

**Nivel:** técnica.

## Dominio y representación de datos

Revisión documental: 2026-10-29. Base `c281b646e7bf` en `main`; árbol inicialmente limpio. La inspección de fuentes no sustituye pruebas de ejecución.

**Estado y alcance:** Piloto web de homologación por contenido; fuente local actualizada por fast-forward a main remoto. El cálculo, la interpretación semántica y el benchmark tienen contratos diferentes.

### Entidades y conceptos

| Entidad / concepto   | Identidad y significado                    | Representación / estado                 |
| -------------------- | ------------------------------------------ | --------------------------------------- |
| Empresa              | Identidad y tamaño opcional                | PostgreSQL                              |
| Cargo                | Contenido interno/referencia y empresa     | PostgreSQL                              |
| BandaSalarial        | Percentiles por cargo/tamaño y procedencia | PostgreSQL                              |
| Criterio / Preset    | Peso, obligatoriedad y configuración       | PostgreSQL                              |
| Ejecución            | Cargo y snapshot de criterios aplicados    | PostgreSQL                              |
| Resultado / decisión | Candidato, explicación y selección         | PostgreSQL; separar score de aprobación |

### Relaciones de dominio

```text
[Empresa] -- 1:N --> [Cargo]
[Cargo] -- 1:N --> [BandaSalarial]
[CargoInterno] -- 1:N --> [Ejecución]
[Ejecución] -- 1:N --> [Resultado]
[Ejecución] -- selecciona --> [CargoReferencia]
```

| Origen       | Cardinalidad / relación | Destino         | Semántica                                              |
| ------------ | ----------------------- | --------------- | ------------------------------------------------------ |
| Empresa      | 1:N                     | Cargo           | Clave y tipo interno/referencia                        |
| Cargo        | 1:N                     | BandaSalarial   | Referencia monetaria contextual                        |
| CargoInterno | 1:N                     | Ejecución       | Una comparación puede repetirse con otra configuración |
| Ejecución    | 1:N                     | Resultado       | Candidatos y explicaciones                             |
| Ejecución    | selecciona              | CargoReferencia | Elección humana posterior al ordenamiento              |

### Persistencia y garantías

PostgreSQL gestionado y acceso desde funciones servidor según contrato actual. Criterios usados, estados y resultados se persisten para trazabilidad. Un NULL salarial significa dato no disponible, no cero. Revisar migraciones y políticas efectivamente aplicadas; no afirmar seguridad de producción sólo por tener SQL en Git.

La cardinalidad de dominio no prueba que exista una FK física. Revisar adaptadores/migraciones para identificar qué se valida por esquema, por caso de uso o por lectura. No usar «RLS» para almacenamiento que no dispone de esas políticas.

### Consistencia y evolución

- El sueldo no homologa: no forma parte del score ni de la inferencia de equivalencia.
- Los campos obligatorios pueden descartar candidatos antes de ponderarlos.
- Los pesos de la ejecución deben quedar capturados para reproducirla.
- La normalización se identifica por versión/huella; su caché no legitima inventar contenido faltante.
- Preseleccionar varios y elegir finalmente uno son estados distintos; el score no es una aprobación humana.

Cambios de formato, referencias y restauración se comprueban con datos de prueba. El respaldo/artefacto debe indicar versión; la documentación no autoriza transformar datos reales ni rebajar un esquema para abrirlo con un ejecutable anterior.

## Fuentes de implementación y contratos

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
<!-- DOCUMENTACION:nivel-2026-10-29:END -->
