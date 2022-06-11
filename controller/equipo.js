const { response } = require('express');
const Equipo = require('../model/equipos');

const getEquipos = async ( req, res = response ) => {

    const equipos = await Equipo.find();

    res.json({
        ok:true,
        equipos
    });

}

const crearEquipo = async ( req, res = response ) => {

    const { nombre } = new Equipo ( req.body );

    try {
        let existe = await Equipo.findOne({ nombre });
        if(existe){
            return res.status(400).json({
                ok:false,
                msg: 'el equipo ya existe'
            });
        }

        const equipo  = new Equipo(req.body);
        
        const equipoGuardado = await equipo.save();

        res.status(201).json({
            ok: true,
            equipoGuardado
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const actualizarEquipo = async ( req, res = response ) => {

    const equipoId = req.params.id;

    try {
        const equipo = await Equipo.findById( equipoId );

        if ( !equipo ) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no existe por ese id'
            });
        }

        const cambioEquipo = {
            ...req.body
        }

        const equipoActualizado = await Equipo.findByIdAndUpdate(equipoId, cambioEquipo, { new: true});

        res.json({
            ok: true,
            equipo: equipoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const eliminarEquipo = async ( req, res = response ) => {
    const equipoId = req.params.id;

    try {
        const equipo = await Equipo.findById( equipoId );

        if ( !equipo ) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no existe por ese id'
            });
        }

        await Equipo.findByIdAndDelete( equipoId );

        res.json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports= {
    getEquipos,
    crearEquipo,
    actualizarEquipo,
    eliminarEquipo
 }