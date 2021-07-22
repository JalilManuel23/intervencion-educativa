import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3'
import audioIntro from "../../../assets/sounds/historia.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const Historia = () => {
    return (
        <Presentacion3  
            titulo="Historia del lavado de manos"
            imagen={ imagenes.historia }
            imagen2={ imagenes.lavadoGif2 }
            imagen3={ imagenes.historia2 }
            parrafo="Gracias a que en el año de 1846, el médico Ignaz Semmelweis fundamentó que el lavado de manos entre el personal de salud era necesario, se disminuyó sorprendentemente la mortalidad de los pacientes y ahora en la sociedad, además de prevenir el contagio de otras enfermedades."
            enlace="/adultos/lavado-manos/introduccion/importancia"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 2 }
        />
    )
}
