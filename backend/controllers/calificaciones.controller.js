const calificacionesCtrl = {};

const Calificacion = require('../models/Calificacion');

calificacionesCtrl.agregarCalificacion = async (req, res, next) => {
    const {
        calificacion
    } = req.body;

    const newRegistro = new Calificacion({
        calificacion
    });

    console.log(calificacion);

    await newRegistro.save((err, registroAgregado) => {

        if (err || !registroAgregado) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'El registro no se ha guardado'
            })
        }

        return res.status(200).send({
            //Registro insertado con exito 
            status: 'Completado',
            registroAgregado
        });
    });
}

module.exports = calificacionesCtrl;