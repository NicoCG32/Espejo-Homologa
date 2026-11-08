# 04 · Visión de Espejo: del cargo equivalente a la oportunidad adecuada

[← General](../README.md) · [Lo que ya funciona](03-propuesta-de-valor.md) · [Cómo se podría construir](../tecnica/08-arquitectura-de-expansion.md) · [Validar mercados](../desarrollo/06-expansion-y-pilotos.md)

> **Visión de expansión posterior al pitch de Duplas Intergeneracionales Tech.** La homologación salarial es el caso implementado; reclutamiento, postulaciones, talento independiente y movilidad profesional son **líneas propuestas**, no productos operativos, aprobados ni comercializados. Esta ampliación estratégica refleja la visión compartida por Pablo al revisar el proyecto; **no se atribuye automáticamente a Claudia, a Gricel ni al contenido de las siete diapositivas originales**.

## Construimos una solución para un problema pequeño en apariencia, enorme en posibilidades

**Espejo nació comparando cargos. Pero la pregunta que resuelve es mucho más amplia: ¿cómo encontramos una correspondencia defendible entre dos realidades descritas de manera diferente?**

En una encuesta, dos cargos pueden hacer prácticamente lo mismo aunque tengan nombres distintos. En una postulación, una persona puede tener competencias pertinentes sin poseer exactamente el título que aparece en la oferta. En un proyecto freelance, un cliente describe un resultado y un profesional describe los trabajos que sabe entregar: **ambos hablan de la misma necesidad, pero no necesariamente con el mismo lenguaje**.

Nuestro primer paso fue demostrar una manera de trabajar: **estructurar la información, aplicar criterios transparentes, usar IA para interpretar matices y devolver la decisión a una persona**. La oportunidad que veo es llevar ese método a otros encuentros entre **necesidades y capacidades**, sin reducir a nadie a un porcentaje.

**La posible tecnología detrás de la marca es un motor de correspondencias con razones verificables:** una necesidad expresada en términos propios entra al sistema, se normaliza, se contrasta con evidencias y restricciones del dominio, se explican acuerdos y vacíos y una persona decide. El valor transversal sería la **infraestructura para justificar comparaciones**, no un único modelo universal de puntuación ni un marketplace listo para usarse.

**Una misma idea, distintas decisiones humanas.** En el caso actual, decide el analista de compensaciones. En una futura herramienta de postulaciones, decide la persona dónde postularse. En una contratación, una evaluación responsable y documentada corresponde a profesionales autorizados. En servicios independientes, ambas partes conservan la decisión de negociar.

## El precedente que ya construimos

```mermaid
flowchart LR
    A["Necesidad descrita"] --> B["Normalizar y ordenar información"]
    B --> C["Criterios explícitos y comparaciones"]
    C --> D["Explicación opcional asistida por IA"]
    D --> E["Revisión y decisión humana"]
    E --> F["Registro de razones y resultados"]
    F -. "Mejora futura" .-> G["Aprendizaje por validación<br/>sin decisiones automáticas"]
```

**Lo existente:** los cargos, el motor determinístico por contenido, la IA opcional, la preselección y decisión del analista, el historial y el benchmark salarial posterior. **Lo que se propone escalar:** el procedimiento, reconstruido para nuevos tipos de entidades y decisiones, no el benchmark de sueldos como si fuera universal.

## Cuatro oportunidades, desde un primer producto concreto

| Posible vertical | Una pregunta que merece respuesta | Experiencia que propondría | Quién conserva la decisión |
| --- | --- | --- | --- |
| **Homologa · cargos** — **implementado como piloto** | ¿Qué referencia de encuesta se parece más a este cargo por sus funciones? | Comparar puestos, explicar coincidencias y revisar bandas *después* de homologar | Analista de compensaciones |
| **Espejo Postula** — **futuro** | ¿A qué vacantes se ajustan mis competencias y qué me falta demostrar? | Comparar requisitos públicos y experiencias/autoevidencias aportadas por el usuario; explicar fortalezas, brechas y mejoras en su postulación | La persona postulante |
| **Espejo Talento** — **futuro, mayor riesgo** | ¿Cómo ayudar a revisar candidatos contra criterios verificables, sin depender únicamente de títulos o palabras clave? | Asistencia para lectura y contraste de requisitos; pruebas y revisión humana; posibilidad de corregir información | Equipo de selección autorizado; candidatos con derechos de información y revisión |
| **Espejo Servicios** — **futuro** | ¿Qué profesional independiente puede entregar este resultado y bajo qué condiciones? | Confrontar necesidad, entregables, evidencia de experiencia, disponibilidad y alcance; generar preguntas de clarificación | Cliente y profesional, mediante acuerdo voluntario |
| **Espejo Evoluciona** — **futuro** | ¿Qué capacidades puede desarrollar una persona para cambiar de función o asumir nuevos proyectos? | Mapa de competencias, evidencia y brechas, rutas de capacitación elegidas por la persona | Trabajador y responsables de desarrollo profesional |

**Ninguna línea nueva implica que actualmente exista un módulo de CV, parsing de portafolios, candidatos, empleo, marketplace, mensajería o pagos.** Son líneas estratégicas de desarrollo.

### Ejemplo de postulación: descubrir valor que un título no explica

Una oferta solicita a alguien capaz de generar reportes SQL y desarrollar aplicaciones web. Una persona describe prácticas, proyectos propios y demostraciones de código, pero no aparece la denominación exacta del puesto.

**Lo que hoy suele faltar es una traducción comprensible entre lo que se pide y lo que se puede demostrar.** Una futura Espejo Postula podría ayudarle a identificar coincidencias y vacíos con **evidencia aportada voluntariamente**, sin inventar experiencia o afirmar idoneidad certificada.

El valor comercial es distinto al de RR. HH.: **orientación para postular mejor**, no rechazo de candidatos.

### Ejemplo de servicio freelance: comparar entregables, no personas

Una pequeña empresa necesita un tablero para inventario y ventas. Una persona ofrece «automatizaciones», otra «analítica» y otra «desarrollo web». El nombre del servicio no basta para decidir si harán el trabajo que se necesita.

Una futura Espejo Servicios podría descomponer el proyecto en **entregables, tecnologías, plazo, alcance, evidencia previa y condiciones**. El resultado sería una explicación de correspondencias y preguntas por resolver, **no una orden automática de contratación**. El precio se **negociaría después**; no sería una variable para concluir que un profesional es «mejor» ni para medir su valor como persona.

## Por qué el mercado hace que esta visión sea razonable

**Hay una evidencia especialmente pertinente para Chile:** [LinkedIn Economic Graph, *Skills-Based Hiring 2025*, pp. 2–4](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/skills-based-hiring-march-2025.pdf) estimó que, al considerar habilidades y transiciones en vez de cargos anteriores, el grupo **potencial** de personas elegibles podría ser **5,6 veces mayor en Chile** (mediana global: **6,1×**). Es una comparación modelada sobre datos de LinkedIn: **no representa contrataciones adicionales, resultados de Espejo ni precisión del algoritmo**. Apoya directamente nuestra hipótesis de que **las etiquetas laborales esconden capacidades transferibles**.

La [OIT, estudio regional de plataformas digitales 2025](https://www.ilo.org/es/publications/encuesta-sobre-trabajadores-en-plataformas-digitales-basadas-en-la-web), encuestó a **1.153 trabajadores en 21 países**: **52 %** usaba esas plataformas como complemento de ingresos. La oportunidad de una herramienta para freelancers debe combinar mejor definición de alcance con **condiciones dignas**, evitando un sistema que presione únicamente por precios bajos. [Estudio de mercado y mapa competitivo](../desarrollo/07-estudio-de-mercado-y-posicionamiento.md).

| Dato publicado | Qué indica y qué **no** demuestra |
| --- | --- |
| **Foro Económico Mundial, *Future of Jobs 2025***: los empleadores encuestados anticipan que **39 % de las competencias** cambien o queden desactualizadas para 2030; **63 %** identifica brechas de competencias como barrera importante. [Fuente](https://es.weforum.org/publications/the-future-of-jobs-report-2025) | La traducción entre necesidades y habilidades será relevante. Son **proyecciones y respuestas de empleadores**, no clientes dispuestos a pagar a Espejo. |
| **OCDE, *A Skills-First Labour Market*, 2026**: aproximadamente **36 % de trabajadores** de los países participantes en la Encuesta de Competencias de Adultos 2023 reportó un desajuste entre capacidades y tareas de su puesto. [Fuente](https://www.oecd.org/en/publications/a-skills-first-labour-market_2e1b85f0-en/full-report/positioning-skills-as-the-new-currency-of-work_40815b16.html) | Comparar habilidades reales con requisitos tiene sustento. **No es una tasa chilena ni una estimación de errores de Espejo**. |
| **OCDE, 2026**: recomienda comenzar la selección basada en competencias con **pilotos acotados**, criterios expresos y atención a la equidad. [Fuente](https://www.oecd.org/en/publications/a-skills-first-labour-market_2e1b85f0-en/full-report/promoting-skills-first-hiring-and-talent-management_81392a48.html) | La expansión debe comenzar por tareas simples y verificables; no está justificado automatizar decisiones laborales. |
| **Upwork, *Future Workforce Index 2026***: en encuesta a **2.400 trabajadores cualificados de EE. UU.**, el **38 %** señaló trabajar de manera freelance; el informe identifica crecimiento de servicios profesionales aumentados por IA. [Fuente](https://www.upwork.com/press/releases/upworks-future-workforce-index-2026-how-ai-is-redefining-the-value-of-work-as-skilled-freelancing-accelerates) | Sugiere interés en servicios independientes. **Es una investigación de una plataforma interesada, del mercado estadounidense; no predice el fin del empleo asalariado ni el tamaño del mercado chileno**. |

El mismo cambio abre oportunidades para personas que quieren **ofrecer sus capacidades como un servicio**, pero no obliga a abandonar contratos de trabajo ni garantiza mejores ingresos. Es una visión de opciones profesionales más amplias, no un reemplazo universal de empleos tradicionales.

## La posición frente a soluciones que ya existen

**No inventamos el concepto de matching por habilidades.** [Buk](https://supportcenter.buk.cl/hc/es-419/articles/52869060867355-Gu%C3%ADa-Salarial-Buk-2025-Qu%C3%A9-es-y-c%C3%B3mo-interpretar-el-estudio-de-remuneraciones-en-Chile) ya homologa cargos con IA; [Workday Skills Cloud](https://doc.workday.com/admin-guide/en-us/human-capital-management/skills-and-skills-cloud/skills-cloud/ilb1557158988004.html) enlaza habilidades con vacantes, aprendizaje y movilidad; [Eightfold](https://eightfold.ai/products/) desarrolla inteligencia de talento; [Workana](https://help.workana.com/hc/es/articles/360041829933--C%C3%B3mo-funcionan-los-proyectos-en-Workana) resuelve publicación y contratación de servicios.

**El espacio que proponemos explorar:** una herramienta especializada, modular y explicable que haga visibles requisitos, evidencia, divergencias, dudas y responsabilidades. **Todavía debemos probar que esa experiencia resulte mejor** que las alternativas en un flujo concreto y no afirmar ventajas comparativas no medidas. [Competencia, compradores y secuencia de entrada](../desarrollo/07-estudio-de-mercado-y-posicionamiento.md).

## Tres formas distintas de escalar

**1. Profundizar en un sector.** Mejorar homologación: comparación de cargos más reproducible, normalizaciones auditadas, control de encuestas, revisión y resultados medidos. Así se consolida la credibilidad antes de ampliar promesas.

**2. Abrir nuevos problemas mediante módulos.** Conservar la *idea* de criterios, explicación y juicio humano, y desarrollar **adaptadores específicos** para ofertas, evidencias de habilidades y proyectos. Cada uno necesita vocabulario, pruebas y controles propios. [Arquitectura posible](../tecnica/08-arquitectura-de-expansion.md).

**3. Cambiar el modelo de entrega y negocio.** El mismo conocimiento podría alimentar consultoría por resultados, herramientas de autoevaluación, servicios de reclutamiento responsable o una plataforma de proyectos. **No existe aún un SaaS multiempresa ni un marketplace**; venderlos hoy como disponibles sería incorrecto.

```mermaid
flowchart TD
    CORE["Precedente Espejo<br/>criterios + IA + juicio + razones"] --> H["Homologa<br/>cargos y encuesta · HOY"]
    CORE -. "Nueva solución" .-> P["Postula<br/>habilidades y vacantes"]
    CORE -. "Nueva solución" .-> F["Servicios<br/>necesidades y entregables"]
    CORE -. "Nueva solución" .-> M["Talento<br/>apoyo a selección"]
    CORE -. "Nueva solución" .-> E["Evoluciona<br/>brechas y desarrollo"]
    H --> V["Validar método, precisión y trazabilidad"]
    V -. "Experimentos con datos sintéticos" .-> P
    P -. "Validaciones específicas" .-> F
    F -. "Auditoría y controles reforzados" .-> M
    classDef live fill:#D9F3EB,stroke:#167B63,color:#164D3D;
    class H live;
```

## Un relato comercial que permite soñar sin vender humo

> **Empezamos resolviendo algo muy específico: decidir a qué cargo de mercado corresponde un puesto real. Descubrimos que el desafío de fondo no era el nombre del puesto; era traducir información, encontrar correspondencias que se puedan explicar y dar al profesional mejores elementos para decidir.**
>
> **Hoy Espejo demuestra ese método en la homologación. Mañana podría ayudar a quienes buscan trabajo a reconocer sus oportunidades, a quienes contratan a entender las capacidades que necesitan y a profesionales independientes a presentar el valor de sus servicios.**
>
> **No pretendemos que la IA decida por las personas: queremos que sus decisiones estén mejor informadas, sean más rápidas cuando corresponda y puedan justificarse.**

Esta es **una propuesta de evolución, no una promesa de funcionalidades ya disponibles**. El éxito se comprobará por exactitud, trato justo, utilidad, costos reales y aceptación de usuarios, no por cantidad de verticales dibujadas en un roadmap.

## El límite que hace creíble la promesa

Aplicar scores a **personas** implica riesgos mayores que comparar **cargos**. Un sistema de contratación puede excluir a alguien injustamente si interpreta mal una experiencia, reproduce sesgos o usa datos no autorizados. Por eso no se propone usar el score de equivalencia salarial directamente para **calificar seres humanos**, tomar decisiones laborales automáticas ni desaconsejar postulaciones por pertenecer a grupos protegidos.

En Europa, herramientas de IA para **clasificar o filtrar postulantes** pueden considerarse sistemas **de alto riesgo** bajo su AI Act ([referencia oficial](https://ai-act-service-desk.ec.europa.eu/en/employment-0)); esto **no se traslada sin más a Chile**. En Chile también deben evaluarse las normas de protección de datos aplicables antes de tratar CV, portafolios, antecedentes personales o postulaciones.

Para llevar esta visión a la práctica se requieren nuevos controles: identidad y autorización, propósito claro, minimización de datos, criterios pertinentes, pruebas de sesgos, explicación accesible, revisión humana significativa, posibilidad de corregir la información y registros auditables. El prototipo actual **no cumple todavía esa preparación para nuevas verticales**.

[Mercado y competencia](../desarrollo/07-estudio-de-mercado-y-posicionamiento.md) · [Prioridades reales](../desarrollo/03-evolucion-y-prioridades.md) · [Estrategia de piloto](../desarrollo/06-expansion-y-pilotos.md) · [Seguridad actual](../tecnica/07-seguridad-y-limitaciones.md).
