import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/concepto-salud-mental_2.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const DefinicionSaludMental = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.saludMental }
            titulo="¿Qué es la salud mental?"
            parrafo1= "Es el equilibrio que existe entre las personas y todo lo que hay a su alrededor. El amor propio tiene que ver en cómo pensamos, sentimos y reaccionamos ante momentos difíciles."
            sonido={ audio }
            fuente="https://lh3.googleusercontent.com/RDMJD3SRrTgI9m869YHGvjXOlzkRdQM12L5pf2bVuhdN6AWXpTTrgWi6X7yRIruMzgZ8mEw=s87"
            id={ 1 }
            rutas={ rutasAmorPropio }
        />
    )
}