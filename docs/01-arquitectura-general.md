# 01 — Arquitectura por niveles

## Arquitectura del sistema por niveles

### Nivel 1 — Contexto y fronteras de ejecución

```text
[Analista: planillas / criterios] -> [React / TanStack Start]
                                             | RPC validado
                                             v
                                    [Funciones servidor]
                                      |             |
                                      v             v
                               [Motor puro]    [Análisis semántico]
                                      |             |
                                      +------v------+
                                  [PostgreSQL / resultados]
                                             |
                                [Selección y benchmark / Excel-PDF]
```

Importa planillas, conserva empresas/cargos/diccionario, aplica filtros y ponderaciones determinísticas, añade lectura semántica de candidatos y separa preselección de selección final. El sueldo se consulta al final como referencia de mercado, sin participar en la homologación.

### Nivel 2 — Componentes y responsabilidades

| Componente    | Responsabilidad                     | Fuente                                                                    |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| RPC           | Validación y orquestación servidor  | [src/lib/homologacion.functions.ts](../src/lib/homologacion.functions.ts) |
| Núcleo        | Cálculo y descartes determinísticos | [src/lib/motor.server.ts](../src/lib/motor.server.ts)                     |
| Normalización | Experiencia/formación y huella      | [src/lib/normalizacion.server.ts](../src/lib/normalizacion.server.ts)     |
| Semántica     | Comparación asistida de candidatos  | [src/lib/semantica.server.ts](../src/lib/semantica.server.ts)             |
| Persistencia  | Migraciones y seguridad del esquema | [drizzle/migrations](../drizzle/migrations)                               |

Las flechas muestran el flujo de información entre componentes. Las transacciones y dependencias de código se detallan en los contratos de cada módulo.

### Nivel 3 — Dominio, contratos y adaptadores

PostgreSQL gestionado y acceso desde funciones servidor según contrato actual. Criterios usados, estados y resultados se persisten para trazabilidad. Un NULL salarial significa dato no disponible, no cero. Revisar migraciones y políticas efectivamente aplicadas; no afirmar seguridad de producción sólo por tener SQL en Git.

- El sueldo no homologa: no forma parte del score ni de la inferencia de equivalencia.
- Los campos obligatorios pueden descartar candidatos antes de ponderarlos.
- Los pesos de la ejecución deben quedar capturados para reproducirla.

Consultar [04-base-de-datos.md](04-base-de-datos.md) para entidades, cardinalidades y representación; [05-motor-o-nucleo-de-negocio.md](05-motor-o-nucleo-de-negocio.md) para invariantes. Las piezas marcadas como propuestas pertenecen al diseño del prototipo.

### Nivel 4 — Despliegue y distribución

**Destino:** Webpage con servidor.

```text
[Revisión de fuente] -> [Verificación de su plataforma] -> [Build / artefacto]
                                                                  |
                                                          [Instalación / hosting]
                                                                  |
                                                          [Usuario y sus datos]
```

Despliega la aplicación junto con sus funciones servidor, la base de datos y la configuración del análisis semántico. Mantén los datos salariales y las credenciales de los proveedores fuera de los recursos públicos. El capítulo [09-instalacion-y-despliegue.md](09-instalacion-y-despliegue.md) concreta la puesta en marcha.

### Calidad y límites arquitectónicos

- Datos incompletos o encuestas sin procedencia
- Confundir ranking de similitud con decisión salarial
- Latencia/costos y variación de respuesta semántica
- Aislamiento y recuperación de resultados

El rendimiento y la capacidad dependen del entorno de ejecución. Consulta las guías de instalación y las limitaciones de cada plataforma antes de desplegar.

## Código y documentación relacionada

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
