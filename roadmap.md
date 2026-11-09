# Roadmap · Espejo · Homologa

Estado de las funcionalidades y prioridades de desarrollo del piloto.

## Base implementada en el repositorio

- [x] Lectura y carga de cargos internos y referencias, con diccionario y bandas de encuesta.
- [x] Motor determinístico con criterios ponderados y requisitos obligatorios.
- [x] Normalización de experiencia/formación y análisis semántico asistido.
- [x] Score motor, score IA y score híbrido; preselección múltiple y decisión definitiva única.
- [x] Historial con benchmark e informes Excel/PDF imprimible.

## Prioridades pendientes

- [ ] Verificar y corregir autenticación/autorización de todas las funciones servidor.
- [ ] Unificar o documentar procedimiento reproducible de migración desde base vacía.
- [ ] Persistir versión del motor y pesos híbridos utilizados en cada cálculo.
- [ ] Probar operaciones de preselección con transacciones/recuperación y concurrencia.
- [ ] Automatizar pruebas de negocio, permisos e informes.
- [ ] Validar flujo y precisión con analistas, datos autorizados y escenarios representativos.

## Propuestas de expansión

Una vez consolidado Homologa, la [ruta de pilotos](docs/desarrollo/06-expansion-y-pilotos.md) propone:

- [ ] Probar autoorientación de postulaciones con perfiles sintéticos y evidencia de habilidades.
- [ ] Evaluar claridad de alcances y entregables en servicios independientes.
- [ ] Diseñar adaptadores y reglas por dominio según la [arquitectura propuesta](docs/tecnica/08-arquitectura-de-expansion.md).
- [ ] Evaluar desarrollo de competencias y apoyo a selección con pruebas y controles específicos.

[Documentación](docs/README.md) · [Detalle de prioridades](docs/desarrollo/03-evolucion-y-prioridades.md).
