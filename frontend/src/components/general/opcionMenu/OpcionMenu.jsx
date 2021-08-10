import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../../assets/images';
import './opcionMenu.css';

export const OpcionMenu = ({ texto, color, ruta, tipoOpcion }) => {
    let estilo = {
        background: color
    };

    let imagen = ( tipoOpcion == 'ninos' ) ? imagenes.nino2 : imagenes.cubrebocas;

    return (
        <Link className="d-flex justify-content-start align-items-center opcion-menu" to={ ruta } style={ estilo }>
            <img src={ imagen } className="img-opcion-menu"></img>
            <h3>{ texto }</h3>
        </Link>

    )
}