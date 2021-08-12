import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/para_combatir.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Definicion2 = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.saludMental2 }
            parrafo1= "Para combatir el miedo y momentos de estrés durante  la pandemia, es de gran importancia fortalecer nuestra salud mental, realizando acciones que nos cuiden a nosotros y a la vez a los demás."
            sonido={ audio }
            fuente="https://lh3.googleusercontent.com/rN5HS5zBVYRMQz8wXBramU_U8MJ_XuYvnClfM_B5K-djgor1wn5z-tr4TiRt6e-xrip7wfU=s97"
            id={ 2 }
            rutas={ rutasAmorPropio }
        />
    )
}