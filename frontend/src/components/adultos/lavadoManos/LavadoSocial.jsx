import React from 'react';
import { Presentacion2 } from '../../talleres/Presentacion2';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/eliminacion_organismos.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos';

export const LavadoSocial = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.joven }
            tipoImagen="completa"
            parrafo1="Es la eliminación de los microorganismos que se realiza con agua y jabón común, removiendo en un 80% dichos organismos presentes en nuestras manos."
            parrafo2="Su principal objetivo es remover la suciedad. Es parte de la higiene personal."
            enlace="/adultos/lavado-manos/opciones"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 8 }
        />
    )
}
