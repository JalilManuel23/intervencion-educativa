import React from 'react';
import { Presentacion1 } from '../../talleres/Presentacion1';
import imagenes from '../../../assets/images';
import audio from "../../../assets/sounds/adultos_amor_propio/bienvenida.mp3";

export const PresentacionAmorPropio = () => {
    return (
        <Presentacion1 
            titulo="TALLER 2: AMOR PROPIO"
            parrafo="Bienvenidos al taller de amor propio, aquí aprenderás que tan importante es para prevenir el COVID-19"
            imagen={ imagenes.portada }
            fuente="https://lh3.googleusercontent.com/Bl2ud_GQ-lhu4RQuUV2beUgN0Tj06ZZlS0pZ1gmV9VhCukgF8sCupg9isdnbiUF_nHGWba8=s85"
            enlace="/adultos/amor-propio/opciones"
            sonido={ audio }
        />
    )
}
