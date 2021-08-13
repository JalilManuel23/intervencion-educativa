const {
    Router
} = require('express');

const router = Router();

const { agregarCalificacion } = require('../controllers/calificaciones.controller');

router.post('/agregar_calif', agregarCalificacion);

module.exports = router;