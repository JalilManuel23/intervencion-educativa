import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3';
import audioHistoria from "../../../assets/sounds/historia_lavado-ninos.mp3";

export const Historia = () => {
    return (
        <Presentacion3  
            titulo="Historia del lavado de manos"
            imagen={ imagenes.historia }
            parrafo="Durante el año 1846, el médico Húngaro Ignaz Semmelweis, constató y fundamentó que 
                    el lavado de manos entre el personal de salud disminuyó la mortalidad y otros pacedimientos
                    entre los pacientes."
            enlace="/ninos/lavado-manos/introduccion/importancia"
            sonido={ audioHistoria }
        />
    )
}
