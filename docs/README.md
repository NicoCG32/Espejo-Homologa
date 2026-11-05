<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../branding/logos/espejo-logo-horizontal-oscuro.svg" />
  <img src="../branding/logos/espejo-logo-horizontal-claro.svg" alt="Identidad visual de Espejo · Homologa" width="500" />
</picture>

# Documentación del proyecto

_Una guía para conocer la propuesta, utilizar la aplicación y mantener el código._

</div>

La documentación se organiza en cuatro áreas: uso general, funcionamiento técnico, desarrollo y experiencia formativa de la dupla.

## Rutas de lectura

| Área           | Contenido                                        | Documentos                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**    | Problema, alcance y trabajo del analista.        | [Propósito y alcance](general/01-proposito-y-alcance.md) · [Uso paso a paso](general/02-recorrido-del-analista.md)                                                                                                                                                                                                                                              |
| **Técnica**    | Comparación de cargos, datos y resultados.       | [Arquitectura](tecnica/01-arquitectura.md) · [Dominio y datos](tecnica/02-dominio-y-datos.md) · [Motor](tecnica/03-motor-deterministico.md) · [IA](tecnica/04-ia-y-normalizacion.md) · [Flujos y estados](tecnica/05-flujos-y-estados.md) · [Entradas y salidas](tecnica/06-importacion-y-exportacion.md) · [Seguridad](tecnica/07-seguridad-y-limitaciones.md) |
| **Desarrollo** | Instalación, mantenimiento y mejoras pendientes. | [Entorno y despliegue](desarrollo/01-entorno-y-despliegue.md) · [Validación](desarrollo/02-validacion-y-mantenimiento.md) · [Prioridades](desarrollo/03-evolucion-y-prioridades.md)                                                                                                                                                                             |
| **Formativa**  | Origen del proyecto, colaboración y aprendizaje. | [Historia de la dupla](formativa/README.md) · [Método y fuentes](formativa/01-metodologia-y-fuentes.md)                                                                                                                                                                                                                                                         |

## El sistema, de un vistazo

![Esquema general: analista, interfaz, servidor, motor, IA y base de datos](assets/diagramas/vista-general.svg)

La [arquitectura por niveles](tecnica/01-arquitectura.md) contiene diagramas de contexto, contenedores, componentes y despliegue. [Dominio y datos](tecnica/02-dominio-y-datos.md) describe las entidades y sus relaciones; [flujos y estados](tecnica/05-flujos-y-estados.md) explica la actividad, la secuencia de operaciones y los estados persistidos. Los diagramas Mermaid se pueden editar en los propios documentos; las versiones SVG y DOT están en [`assets/diagramas`](assets/diagramas).

[Volver a la portada](../README.md)
