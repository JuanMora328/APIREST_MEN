const { Schema, model } = require('mongoose');

const EquipoSchema = Schema ({

    nombre: {
        type: String,
        unique: true
    },

    pais: {
        type: String
    },

    internacional:{
        type: String
    }
});

module.exports = model('Equipo', EquipoSchema);

