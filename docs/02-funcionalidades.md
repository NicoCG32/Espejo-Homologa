# 02 · Funcionalidades por pestaña

| Ruta                  | Pestaña            | Qué permite                                                                                                                 |
| --------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `/`                   | Inicio             | Punto de entrada "¿Qué cargo quieres homologar?", accesos rápidos y reinicio total de datos                                 |
| `/cargos`             | Cargos             | Carga masiva desde Excel/CSV, vista previa en tarjetas, listado con buscador y orden por columna, alta y borrado individual |
| `/empresas`           | Empresas           | Listado, alta manual y definición del tamaño (Pequeña / Mediana / Grande)                                                   |
| `/criterios`          | Criterios          | Ponderación global por columna con sliders, criterios obligatorios, presets y reparto motor/IA del score final              |
| `/diccionario`        | Diccionario        | Áreas, subáreas y niveles jerárquicos editables (código + nombre)                                                           |
| `/homologacion/nueva` | Nueva homologación | Flujo por pasos: Cargo → Revisión → Candidatos → Análisis IA → Decisión                                                     |
| `/historial`          | Historial          | Listado de ejecuciones con buscador, orden por columna y filtro por cargo (`?cargoId=`)                                     |
| `/historial/$id`      | Detalle            | Scores por candidato, criterios usados, análisis IA, decisión, benchmark de mercado y exportación a Excel                   |

## Inicio

- Mensaje principal y acceso directo a homologar.
- Panel de peligro **Reiniciar datos**: exige escribir `ELIMINAR`; borra resultados, análisis,
  ejecuciones, bandas, cargos y empresas. Conserva diccionario, criterios y presets.

## Cargos

- Dos modos de carga: **Empresa** (cargos internos) y **Catálogo** (cargos de referencia).
- Resumen de validación antes de guardar: cargos detectados, remuneraciones cruzadas, faltantes,
  duplicados e inconsistencias.
- Vista previa en tarjetas con detalle plegable y marca de fila con observación.
- Confirmación explícita ("Revisé la vista previa") antes de escribir en la base.
- Listado tabular por columnas (código, cargo, empresa, tipo, área, sueldo) con detalle bajo demanda
  y borrado por fila. En celular las filas se apilan con etiquetas.
- **Buscador en vivo** por código, nombre, empresa o área, con contador "N de M" y opción de limpiar
  filtros cuando no hay coincidencias.
- **Orden por encabezado**: un clic ordena ascendente, otro descendente, con indicador ↑/↓.
- Los cargos ya homologados muestran una etiqueta que abre su historial filtrado por ese cargo.

## Nueva homologación

- Paso 1: buscador del cargo interno y filtro de estado (**Todos / Pendientes / Homologados**).
- Tabla de candidatos ordenada por score de mayor a menor por defecto; los encabezados Score motor,
  Score IA y Score final permiten reordenar.
- La vista espejo aparece plegada al final de cada paso, bajo los botones, como
  "Detalle de la comparación (opcional)".

## Historial

- Buscador por cargo o empresa y orden por cargo, empresa, fecha o estado; parte por lo más reciente.
- Acepta `?cargoId=` para mostrar sólo las homologaciones aceptadas de un cargo, con enlace para
  volver a ver todas.

## Empresas

- Aviso ámbar cuando existen empresas sin tamaño definido: quedan fuera de las comparaciones que
  dependen del tamaño (bandas salariales por tamaño).
- El tamaño se ajusta desde la misma fila.

## Criterios

- Un criterio por columna comparable; los sliders se autoajustan para sumar 100%.
- Un criterio en 0% simplemente no se compara.
- Un criterio marcado como obligatorio descarta al candidato que no lo cumple.
- Los presets se guardan con nombre y se reutilizan en cualquier homologación.

## Diccionario

- Tres listas editables (Áreas, Subáreas, Niveles) precargadas.
- No se permiten códigos repetidos dentro de un mismo tipo.
- Al eliminar una entrada en uso se informa cuántos cargos la usan y se pide confirmación; los
  cargos no se modifican.

## Capacidades y límites

**Disponibilidad:** Piloto web de homologación de cargos por contenido, con cálculo determinístico, análisis semántico y benchmark salarial separados.

| Módulo        | Capacidad / propósito                    | Caso borde o límite                  |
| ------------- | ---------------------------------------- | ------------------------------------ |
| Importación   | Empresas, cargos, encuesta y diccionario | Validación y campos ausentes         |
| Configuración | Criterios, pesos y presets               | Obligatorios y cambios por ejecución |
| Homologación  | Motor, candidatos e interpretación       | Descartes, errores y explicaciones   |
| Decisión      | Preselección y selección final           | Persistencia separada de score       |
| Benchmark     | Bandas por tamaño y procedencia          | No disponible frente a cero          |
| Exportación   | Excel/PDF según revisión                 | Datos persistidos y trazabilidad     |

Las capacidades previstas se distinguen de las disponibles. Consulta los requisitos de la plataforma que vas a utilizar.

## Código y documentación relacionada

[README.md](../README.md) · [docs/01-arquitectura.md](01-arquitectura.md) · [docs/04-base-de-datos.md](04-base-de-datos.md) · [docs/06-motor-deterministico.md](06-motor-deterministico.md) · [docs/07-analisis-semantico.md](07-analisis-semantico.md) · [docs/13-decision-benchmark-exportacion.md](13-decision-benchmark-exportacion.md).
