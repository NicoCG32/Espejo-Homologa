# 15 — Justificación, proyección y escalabilidad

## Justificación y proyección

### Ajuste entre problema y solución

| Necesidad                    | Razón del diseño                                                 |
| ---------------------------- | ---------------------------------------------------------------- |
| Cargos con nombres parecidos | Se compara contenido y atributos normalizados                    |
| Decisiones irreproducibles   | Ejecución y criterios usados permanecen identificados            |
| Sesgo salarial               | La remuneración no entra al score ni al análisis de equivalencia |

Tiempo de homologación revisada, concordancia entre analistas y proporción de decisiones reproducibles; no se presume exactitud por tener un score.

### Qué se puede abstraer y qué no

Las entidades, reglas y fronteras de [04-base-de-datos.md](04-base-de-datos.md) permiten evaluar reutilización. Cambiar un nombre o una categoría no prueba compatibilidad con otro sector: datos, permisos, reglas, operación y costos deben validarse de nuevo.

### Posibles líneas de evolución

- Mapeo de perfiles de reclutamiento
- Catálogos de competencias
- Equivalencia de roles en reorganizaciones
- Comparación de perfiles de formación

### Límites y trade-offs

- Datos incompletos o encuestas sin procedencia
- Confundir ranking de similitud con decisión salarial
- Latencia/costos y variación de respuesta semántica
- Aislamiento y recuperación de resultados

### Prioridad de inversión

| Prioridad   | Iniciativa                                                                       | Impacto a comprobar                                                                                                                                 | Criterio económico                                                    |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Alta        | Pruebas de reproducibilidad y validación con analistas, más operación controlada | Tiempo de homologación revisada, concordancia entre analistas y proporción de decisiones reproducibles; no se presume exactitud por tener un score. | Rango de esfuerzo y costo en capítulo 18; no presupuesto comprometido |
| Media       | Reproducción, soporte y recuperación por plataforma                              | Menos fallos de entrega y pérdida de datos                                                                                                          | Costo recurrente separado de implementación                           |
| Estratégica | Validar una extensión/forma de sostenimiento                                     | Uso y aceptación fuera del contexto inicial                                                                                                         | Investigar costos, demanda y condiciones antes de monetizar           |

Las cifras CLP/USD, supuestos, sensibilidad y retorno se presentan en [18-analisis-economico-clp-usd.md](18-analisis-economico-clp-usd.md); no son una valoración comercial del repositorio.

## Código y documentación relacionada

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
