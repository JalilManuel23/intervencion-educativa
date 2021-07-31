import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/es_el_estado.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Definicion = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.saludMental }
            titulo="¿Qué es la salud mental?"
            parrafo1= "Es el estado de equilibrio que debe existir entre las personas y el entorno que los rodea, incluye el bienestar emocional, y social e influye en cómo piensa, siente, actúa y reacciona una persona ante momentos de estrés."
            sonido={ audio }
            id={ 1 }
            rutas={ rutasAmorPropio }
        />
    )
}