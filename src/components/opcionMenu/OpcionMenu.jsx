import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../assets/images';
import './opcionMenu.css';

export const OpcionMenu = ({ texto, color }) => {
    let clase = `d-flex justify-content-start align-items-center opcion-menu ${color}`; 
    return (
        <Link className={ clase }>
            <img src={ imagenes.cubrebocas } className="img-opcion-menu"></img>
            <h3>{ texto }</h3>
        </Link>

    )
}