import React from 'react';
import './estilos-lavados-manos.css';
import imagenes from '../../assets/images';
import { Link } from 'react-router-dom';

export const FinalIntro = ({
    enlace
}) => {
    return (
        <div className="final-intro d-flex flex-column justify-content-center align-items-center">
            <img src={ imagenes.doctora } alt="doctora" className="img-doctora" />
            <Link className="seguir-leyendo" to={ enlace }>Siguiente >></Link>
        </div>
    )
}
