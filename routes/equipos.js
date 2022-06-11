/*

    Equipo Routes
    /api/routes

*/

const { Router } = require('express');
const { getEquipos, crearEquipo, actualizarEquipo, eliminarEquipo } = require('../controller/equipo');

const router = Router();

// Obtener equipos
router.get('/', getEquipos );

//Crear equipo
router.post('/', crearEquipo);

//Actualizar equipo
router.put('/:id', actualizarEquipo);

//Eliminar equipo
router.delete('/:id', eliminarEquipo);

module.exports = router;