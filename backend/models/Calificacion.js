const { Schema, model } = require('mongoose');

CalificacionSchema = new Schema({
    calificacion: {type: String, required: true},
}, {
    timestamps: true
});

module.exports = model('Calificacion', CalificacionSchema);