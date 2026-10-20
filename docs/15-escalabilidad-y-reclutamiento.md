# 15 · Escalabilidad: de la homologación al reclutamiento

> **Apunte estratégico.** Este capítulo no describe funcionalidades implementadas: explica por qué
> la arquitectura actual puede extenderse a otros procesos de personas sin rehacer su núcleo.

## 1. La idea central

Espejo · Homologa no es, en el fondo, una calculadora salarial: el sueldo nunca entra al motor.
Es un **motor de calce entre un perfil requerido y un conjunto de perfiles disponibles**:

```text
Perfil requerido (A)  <-- espejo -->  Perfiles disponibles (B)
```

| Caso de uso | A (izquierda del espejo) | B (derecha del espejo) | Estado |
|---|---|---|---|
| Homologación | Cargo interno | Catálogo de encuesta de mercado | Implementado |
| Reclutamiento externo | Vacante / perfil de cargo | Postulantes (CV) | Potencial |
| Movilidad interna | Cargo vacante | Colaboradores de la empresa | Potencial |
| Planes de carrera / reskilling | Cargo objetivo | Perfil actual de una persona (brechas) | Potencial |
| Diseño organizacional | Cargo nuevo | Cargos existentes (duplicidades) | Potencial |

## 2. Qué se reutiliza tal cual

| Pieza actual | Rol en reclutamiento |
|---|---|
| Normalización con IA (experiencia y formación a JSON mínimo, caché por huella) | Convertir CVs heterogéneos en fichas comparables |
| Motor determinístico con pesos y obligatoriedad | Filtro de requisitos excluyentes, reproducible y sin costo de IA |
| Análisis semántico sólo sobre preseleccionados | Evaluar afinidad de funciones y transferibilidad de competencias en la terna |
| Score final ponderado (motor × peso + IA × peso) | Ranking explicable de postulantes |
| Preselección múltiple + decisión humana única | Terna para entrevista y elección del reclutador |
| Vista Espejo | Vacante a la izquierda, candidato sintetizado a la derecha |
| Reintentos y proveedor de respaldo (Gemini → Groq) | Continuidad del screening ante límites de la IA |
| Historial, exportación Excel/PDF | Trazabilidad del proceso de selección |

## 3. La potencia del modelo híbrido

Los sistemas habituales caen en uno de dos extremos:

1. **Sólo palabras clave:** descartan a «Líder de proyectos» porque la vacante dice «Scrum Master».
2. **Sólo IA generativa:** envían todos los CVs a un modelo y piden «el mejor». Es caro, lento,
   propenso a alucinaciones y **no auditable**.

Espejo combina ambos en orden: **reglas primero, comprensión después, decisión humana al final**.
Cada descarte tiene causa, cada score tiene desglose y cada elección queda firmada.

## 4. Pros

- **Ahorro de tiempo:** de cientos de perfiles a una terna en segundos, con resultados reproducibles.
- **Costo controlado:** la IA sólo ve a los preseleccionados; el filtrado masivo no consume tokens.
- **Explicabilidad:** cada recomendación trae una justificación breve y verificable.
- **Mitigación de sesgos:** se evalúa contenido (funciones, experiencia, formación); se pueden excluir
  datos personales antes de comparar, igual que hoy se excluye el sueldo.
- **Control del analista:** la metodología acota, la persona decide.

## 5. Contras y desafíos

- **Entrada no estructurada:** los CVs llegan en PDF/Word; se necesita una capa de extracción previa.
- **Volumen:** con cientos de postulantes, los umbrales del motor deben ser precisos para enviar a la
  IA sólo 5–10 perfiles.
- **CVs optimizados con IA:** exige que el análisis evalúe coherencia y no sólo coincidencia de términos.
- **Regulación y privacidad:** datos personales sensibles requieren consentimiento, retención acotada
  y autenticación de usuarios (hoy fuera del núcleo).
- **Calibración:** los pesos por defecto (70/30) deberán validarse con procesos reales de selección.

## 6. Qué haría falta construir

1. Carga de CVs con extracción de texto y normalización a la misma ficha mínima.
2. Atributos configurables por caso de uso (hoy: siete atributos de cargo).
3. Autenticación y permisos por empresa/equipo.
4. Anonimización opcional antes del análisis.
5. Estados de proceso (postulado, preseleccionado, entrevistado, elegido).

## 7. Principios que no cambian

- La IA traduce e interpreta; no decide.
- Lo que no está en los datos no se inventa.
- Todo resultado es reproducible y queda registrado.
- Los factores que no deben influir (sueldo hoy; datos personales mañana) quedan fuera del cálculo.
