import React from 'react';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";
import { Presentacion2 } from '../../talleres/Presentacion2';
import { rutasIntro } from './rutasIntro';

export const Introduccion = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.covid }
            parrafo1= "El coronavirus SARS-cov-2 es un virus que apareció en China. Después se extendió a todos los continentes del mundo provocando una pandemia. Actualmente Europa y América son los mas afectados."
            parrafo2= "Este nuevo virus, provoca la enfermedad conocida con el nombre de COVID-19."
            sonido={ audioIntro }
            enlace="/adultos/introduccion/mapa"
            id={ 1 }
            rutas={ rutasIntro }
        />
    )
}