import React from 'react';
import { Presentacion1 } from '../../talleres/Presentacion1';
import imagenes from '../../../assets/images';
import audio from "../../../assets/sounds/adultos_amor_propio/bienvenida.mp3";

export const BienvenidaAmorProp = () => {
    return (
        <Presentacion1 
            titulo="TALLER 2: AMOR PROPIO"
            parrafo="Bienvenidos al taller de amor propio, aquí aprenderás que tan importante es para prevenir el COVID-19"
            imagen={ imagenes.portadaAmor }
            enlace="/ninos/amor-propio/opciones"
            sonido={ audio }
        />
    )
}
