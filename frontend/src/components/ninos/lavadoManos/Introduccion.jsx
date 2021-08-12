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
            fuente="https://media.istockphoto.com/vectors/vector-illustration-of-kid-washing-hands-vector-id1067966960?k=6&m=1067966960&s=612x612&w=0&h=SjYb5gQdx_kZ1rPJMhy93qz_rvYBFXyR-jF0cufcd5E="
            rutas={ rutasLavadoNinos }
            id={ 1 }
        />
    )
}