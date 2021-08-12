import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/15_oct.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos'

export const DiaLavado = () => {
    return (
        <Videos 
            titulo="¿Cuándo es el Día Mundial del Lavado de Manos?"
            texto="El día 15 de Octubre"
            imagen={ imagenes.diaLavado }
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            fuente="https://lh3.googleusercontent.com/gU6NlDpUJ8APbJz7DObDpq_5Y5cGO9qGzshVgXxj_nZHsb2LtB5z59MWi4OIVKykWGg3_Q=s167"
            id={ 5 }
        />
    )
}