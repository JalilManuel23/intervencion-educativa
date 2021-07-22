import React from 'react';
import { Presentacion2 } from '../../talleres/Presentacion2';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/lavadoSocial-ninos.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const LavadoSocial = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.joven }
            tipoImagen="completa"
            parrafo1="Se define como un frote breve de todas las superficies de las manos con jabón, después de un enjuague al chorro de agua. Su objetivo es remover la suciedad. Es parte de la higiene personal.
"           enlace="/ninos/lavado-manos/opciones"
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            id={ 9 }
        />
    )
}