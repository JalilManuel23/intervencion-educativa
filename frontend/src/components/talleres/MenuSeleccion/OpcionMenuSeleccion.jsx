import React from 'react';
import './menuSeleccion.css';
import { Link } from 'react-router-dom';

export const OpcionMenuSeleccion = ({
    imagen,
    texto,
    ruta,
    color
}) => {
    let bg = ( color ) ? color : "#86e173";

    return (
        <Link 
            className="mb-5 ms-md-5 opcion-menu-seleccion d-flex justify-content-start align-items-center   col-md-5"
            to={ ruta }
            style={{
                'background': bg 
            }}
        > 
            <img className="img-opcion-seleccion me-3" src={ imagen } /> 
            <span className="texto-opcion-menu">{ texto }</span>
        </Link>
    )
}
