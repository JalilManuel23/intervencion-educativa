import React from 'react';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";
import { Presentacion2 } from '../../talleres/Presentacion2';

export const Introduccion = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.adultoMujer }
            parrafo1= "El coronavirus SARS-cov-2 es un virus que apareció en china. Después se extendió a todos los continentes del mundo provocando una pandemia.Actualmente Europa y América son los mas afectados."
            parrafo2= "Este nuevo virus, provoca la enfermedad conocida con el nombre de COVID-19."
            sonido={ audioIntro }
            enlace="sintomas-adultos"
        />
    )
}