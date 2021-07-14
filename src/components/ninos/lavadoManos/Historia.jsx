import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3';
import audioHistoria from "../../../assets/sounds/historia_lavado-ninos.mp3";

export const Historia = () => {
    return (
        <Presentacion3  
            titulo="Historia"
            imagen1={ imagenes.ninos }
            imagen2={ imagenes.historia2 }
            sub1="Lavado de manos"
            sub2="Ignaz Semmelweis"
            sub3="Personajes que realizaron aportes que muestran lavado de manos es una medida para evitar infecciones:"
            parrafo1="Durante el año 1846, el médico Húngaro Ignaz Semmelweis, constató y fundamentó que 
                    el lavado de manos entre el personal de salud disminuyó la mortalidad y otros pacedimientos
                    entre los pacientes."
            parrafo2="Propuso el lavado de manos entre el personal médico, y se evidenció que la mortalidad se 
                    disminuyó abruptamente a partir de ese momento, ésta estrategia se mantuvo
                    por varios años."
            lista={ [ 'Ignaz Semmelweis' , 'Oliver Holmes'] }
            enlace="/ninos/lavado-manos/introduccion/importancia"
            sonido={ audioHistoria }
        />
    )
}
