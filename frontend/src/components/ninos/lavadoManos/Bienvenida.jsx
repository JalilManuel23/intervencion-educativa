import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion1 } from '../../talleres/Presentacion1';
import audioIntro from "../../../assets/sounds/taller_1.mp3";

export const Bienvenida = () => {

    return (
        <Presentacion1 
            titulo="TALLER 1: LAVADO DE MANOS"
            parrafo="Bienvenidos al taller de lavado de manos, aquí aprenderás datos muy interesantes relacionados a esta medida tan importante para prevenir el COVID-19"
            imagen={ imagenes.bienvenida }
            enlace="/ninos/lavado-manos/opciones"
            sonido={ audioIntro }
            fuente="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_147128801_stock-vector-happy-cute-little-kid-girl-wash-hand-in-sink.html&psig=AOvVaw3YZxDqne8urDNmC9G9SQLN&ust=1628821620386000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCX9cK3qvICFQAAAAAdAAAAABAD"
        /> 
        
    )
}
