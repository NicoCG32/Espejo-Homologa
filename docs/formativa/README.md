# Espejo · Homologa, la historia detrás del código

El proyecto nació de la colaboración entre la experiencia profesional de Claudia Peña en recursos humanos y la formación técnica de Pablo Guzmán. La dupla construyó un prototipo y preparó una presentación para explicar su utilidad ante un jurado.

## Cómo comenzó

La dupla se formó en **Duplas Intergeneracionales Tech**, programa de **Desafío Latam** vinculado al **Fondo 55+ Entel**. **Pablo Guzmán**, estudiante de **Ingeniería Civil en Computación e Informática**, participó en el rol _junior_. **Claudia Peña**, economista con experiencia en recursos humanos, incluido el **sector sanitario**, participó en el rol _senior_.

Claudia planteó una dificultad que conocía en su trabajo: comparar cargos que, entre organizaciones y encuestas, pueden nombrarse o describirse de maneras distintas. Ese problema dio origen a Espejo y orientó la definición de sus criterios de homologación.

## Qué hizo cada persona

**Claudia** aportó casos, criterios del rubro y pruebas de uso. Sus observaciones ayudaron a ajustar los resultados, la claridad de la interfaz y la facilidad para recorrerla.

**Pablo** redactó los prompts, condujo las iteraciones con **Lovable** y organizó el trabajo técnico con apoyo de **ChatGPT** y **GitHub**. Su formación le permitió interpretar lo generado y traducir las observaciones de Claudia en cambios de la aplicación.

**Gricel Sepúlveda**, tutora del proyecto, entregó retroalimentación semanal para revisar los avances y orientar las siguientes decisiones.

## El ciclo de trabajo

Cada observación de Claudia se convertía en un objetivo de implementación. Pablo preparaba las instrucciones, revisaba la respuesta de Lovable y comprobaba los cambios. Claudia probaba la nueva versión y aportaba comentarios para la siguiente iteración. La tutoría semanal permitía contrastar los avances con los objetivos del curso.

```mermaid
flowchart LR
  C["Claudia<br/>problema y criterio"] --> P["Pablo<br/>prompts e iteración"]
  P --> L["Lovable + apoyo ChatGPT<br/>construcción asistida"]
  L --> G["Pablo<br/>revisión técnica / GitHub"]
  G --> V["Claudia<br/>pruebas y observaciones"]
  V -->|nuevos ajustes| P
  T["Gricel<br/>tutoría semanal"] -.-> P
  T -.-> V
  classDef human fill:#FFF0D9,stroke:#BF985E,color:#60451E;
  classDef tech fill:#123E5D,stroke:#369FC1,color:#FFF;
  class C,P,G,V,T human;
  class L tech;
```

## La perspectiva intergeneracional

Las distintas trayectorias permitieron revisar tanto la implementación como su utilidad profesional. Pablo se concentró en convertir las decisiones en una aplicación; Claudia evaluó si lo que aparecía en pantalla tenía sentido para el análisis de cargos.

Esa colaboración también se refleja en el producto: el motor y la IA aportan información, y el analista confirma la homologación con conocimiento del contexto.

## Aprender a presentar y ofrecer un servicio

Claudia y Pablo presentaron el problema, el flujo de reglas e IA y una demostración de la aplicación. El cierre destacó la consistencia, la eficiencia y la trazabilidad como beneficios a evaluar, con la decisión final a cargo del profesional.

Las cifras utilizadas en la presentación se conservan con su contexto en [Pitch y visión](02-pitch-y-vision.md). Su validación requiere comparar tiempos y resultados con casos equivalentes.

La presentación cerró con una idea compartida: **«La IA no reemplaza al experto. Potencia su trabajo»**.

[El pitch, lámina por lámina](02-pitch-y-vision.md) · [Atribución de la dupla](03-colaboracion-y-atribucion.md) · [Modelo de servicio](../general/03-propuesta-de-valor.md).

## Expansión pensada después del pitch

El pitch de la dupla se centró en **Homologa**. Posteriormente, Pablo planteó explorar el método de comparación para postulaciones, servicios independientes y competencias. Esa propuesta se desarrolla en [visión de plataforma](../general/04-vision-de-plataforma.md).

## Evaluación final

La dupla obtuvo **nota final 7,0**, máxima de la escala chilena, en la evaluación del curso.

[Etapas del curso y materiales consultados](01-metodologia-y-fuentes.md) · [Qué hace el piloto](../general/01-proposito-y-alcance.md) · [Pitch](02-pitch-y-vision.md) · [Créditos](03-colaboracion-y-atribucion.md) · [Volver al índice](../README.md)
