import React from 'react';
import './menuSeleccion.css';
import { Link } from 'react-router-dom';

export const OpcionMenuSeleccion = ({
    imagen,
    texto,
    ruta
}) => {
    return (
        <Link 
            className="mb-5 opcion-menu-seleccion d-flex justify-content-start align-items-center"
            to={ ruta }
        > 
            <img className="img-opcion-seleccion me-3" src={ imagen } /> 
            <span className="texto-opcion-menu">{ texto }</span>
        </Link>
    )
}
