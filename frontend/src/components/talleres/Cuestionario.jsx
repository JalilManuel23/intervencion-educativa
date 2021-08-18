import React from 'react';
import { Link } from 'react-router-dom';
import './css/estilos.css'

export const Cuestionario = ({ url, ruta }) => {
    return (
        <div className="d-cuestionario">
            <div className="container">
                <iframe src={ url } className="cuestionario" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                <div className="d-flex justify-content-center">
                    <Link to={ ruta } className="btn btn-danger mb-5">Regresar</Link> 
                </div>
            </div>
        </div>
    )
}
