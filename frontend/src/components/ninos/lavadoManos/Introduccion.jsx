import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion5 } from '../../talleres/Presentacion5';
import audioIntro from "../../../assets/sounds/intro-lavado-ninos.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const Introduccion = () => {
    return (
        <Presentacion5 
            imagen={ imagenes.lavadoNino }
            parrafo="Se refiere a un frote de las manos enjabonadas, para después enjuagarlas con abundante agua para lograr eliminar la suciedad y microorganismos existentes, siendo la manera más eficaz conocida de prevenir el contagio por COVID-19."
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            id={ 1 }
        />
    )
}