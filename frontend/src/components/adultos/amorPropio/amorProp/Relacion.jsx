import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/buena-salud.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Relacion = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.autoestima }
            titulo="¿Cómo se relaciona la salud mental con el COVID-19?"
            parrafo1= "El tener una buena autoestima en tiempos de pandemia, te ayudará a estar más protegido, ya que el sistema inmune se fortalece, además de que el autocuidado será de vital importancia para ti."
            sonido={ audio }
            fuente="https://lh3.googleusercontent.com/0W7pGasbszGxG7XBvfxqG8IF3ZIjYq67Zs9Uk7nakMAdHdMA98RaZMMuyjbWYg4pAp4q9mA=s151"
            id={ 10 }
            rutas={ rutasAmorPropio }
        />
    )
}