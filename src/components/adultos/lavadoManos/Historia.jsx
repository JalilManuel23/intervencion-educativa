import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3'
import audioIntro from "../../../assets/sounds/historia_lavado-ninos.mp3";

export const Historia = () => {
    return (
        <Presentacion3  
            titulo="Historia del lavado de manos"
            imagen={ imagenes.historia }
            imagen2={ imagenes.lavadoGif2 }
            imagen3={ imagenes.historia2 }
            parrafo="En 1846, el médico Ignaz Semmelweis, fundamentó que el lavado de manos entre el personal de salud disminuyó  notoriamente la mortalidad de los pacientes. A partir de esto, el  lavado de manos se convirtió en una de las medidas más importantes para prevenir contagios de diferentes enfermedades y una medida de higiene que elimina los organismos presentes en nuestras manos."
            enlace="/adultos/lavado-manos/introduccion/importancia"
            sonido={ audioIntro }
        />
    )
}
