# 00 · Problemática, cliente y propuesta de valor

> **Capítulo de negocio.** Pensado para dirección, clientes corporativos e inversionistas. Explica
> qué dolor resuelve Espejo · Homologa, quién lo sufre y por qué la solución es apta y viable.

## 1. La problemática

Para fijar sueldos competitivos, una empresa debe saber **a qué cargo del mercado equivale cada uno
de sus cargos internos**. Las encuestas salariales (Mercer, WTW, Korn Ferry, PwC o encuestas
locales) traen cientos de cargos con nombres y descripciones distintos a los de la empresa.

Hoy ese cruce —la *homologación*— se hace a mano: abrir la planilla, buscar el cargo "parecido",
leer descripciones y justificarlo en un correo o una celda. El resultado es:

- **Lento:** decenas o cientos de cargos por ciclo; semanas de trabajo de analistas senior.
- **Subjetivo:** dos analistas pueden homologar distinto el mismo cargo.
- **Poco trazable:** rara vez queda registro de por qué se eligió una referencia y no otra.
- **Contaminado por el sueldo:** es tentador elegir la referencia que "calza" con lo que ya se
  paga, invirtiendo la lógica (el sueldo debería derivarse de la equivalencia, no al revés).

## 2. Quién sufre el dolor

| Arquetipo | Dolor principal | Qué gana con Espejo |
|---|---|---|
| **Gerencia de Personas / Compensaciones** | Ciclos anuales largos, presión por cerrar bandas a tiempo | Candidatos ordenados en minutos y decisión documentada |
| **Analista de compensaciones** | Trabajo repetitivo, difícil de defender ante jefaturas | Metodología explícita, Vista Espejo y justificación breve |
| **Consultoras de RRHH** | Consultores senior atrapados en cruces operativos; márgenes bajos | Más clientes por consultor, entregables Excel/PDF estandarizados |
| **Comité de Remuneraciones / Directorio** | Falta de respaldo auditable para aprobar políticas salariales | Informe ejecutivo firmado con brechas frente a P25/P50/P75/Promedio |
| **Finanzas (CFO)** | Costo de nómina desalineado con el mercado | Diagnóstico basado en equivalencias correctas, no en intuición |

## 3. Magnitud del dolor

- **Costo financiero:** una homologación errada sobrevalora (pago de más, recurrente cada mes) o
  subvalora un cargo (rotación de talento clave; reemplazar a una persona suele costar una fracción
  significativa de su sueldo anual entre búsqueda, inducción y curva de aprendizaje).
- **Riesgo de equidad y cumplimiento:** las normativas de transparencia e igualdad salarial exigen
  justificar diferencias con criterios objetivos del cargo. Sin trazabilidad, la empresa queda
  expuesta en auditorías y reclamos.
- **Costo de oportunidad:** el tiempo de los especialistas se consume en búsqueda y no en análisis
  estratégico.

## 4. La solución

**Idea abstracta:** poner el cargo interno frente a su *reflejo* en el mercado y medir cuánto se
parecen por su contenido, nunca por su sueldo.

**Idea desarrollada:**

1. Se cargan las planillas reales (cargos de la empresa y catálogo de encuesta).
2. La IA normaliza sólo experiencia y formación a una ficha mínima, con caché.
3. Un **motor determinístico** filtra y puntúa todo el catálogo con criterios ponderables:
   reproducible, sin costo de IA y con causa explícita de cada descarte.
4. La **IA semántica** analiza sólo a los preseleccionados y entrega un puntaje y una explicación breve.
5. El **analista decide** (preselección múltiple y una elección final firmada).
6. Recién entonces aparece el **benchmark salarial** por tamaño de empresa y las brechas.
7. Se exporta Excel auditable e informe PDF ejecutivo.

Arquitectura, servicios externos y funcionalidades: ver capítulos [01](./01-arquitectura.md),
[02](./02-funcionalidades.md), [07](./07-analisis-semantico.md) y [12](./12-resiliencia-ia.md).

## 5. Por qué resuelve el problema

| Dolor | Respuesta de Espejo |
|---|---|
| Lento | Motor sobre todo el catálogo en segundos; IA sólo sobre la terna |
| Subjetivo | Criterios y pesos explícitos, guardados en cada ejecución |
| Poco trazable | Historial con scores, comentario, analista, fecha y exportación |
| Contaminado por el sueldo | La remuneración nunca entra al motor ni a la IA |
| Desconfianza en la IA | La IA no decide: interpreta y explica; la persona elige |

## 6. Por qué es apto y viable

- **Técnicamente:** stack web estándar, base de datos gestionada y proveedor de IA con respaldo
  automático (Gemini → Groq). Sin infraestructura propia que mantener.
- **Económicamente:** el filtrado masivo no consume IA; el costo por homologación es marginal frente
  a horas de consultoría.
- **Organizacionalmente:** trabaja con las planillas que el cliente ya tiene; no exige cambiar procesos.
- **Éticamente:** separa contenido de remuneración y deja la decisión en manos humanas.

Escalabilidad, otros rubros e inversiones: ver [capítulo 15](./15-escalabilidad-y-reclutamiento.md).
