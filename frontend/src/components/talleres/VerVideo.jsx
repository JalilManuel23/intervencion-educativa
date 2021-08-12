import React from 'react';
import './css/estilos.css';
import { Control } from '../general/control/Control';

export const VerVideo = ({
    enlaceVideo,
    ninos,
    rutas,
    id
}) => {

    let clase = ( ninos ) ? "presentacion-3-ninos animate__animated animate__fadeIn" : "presentacion-3 animate__animated animate__fadeIn";

    return (
        <div className={clase}>
            <div className="container">
                <div className="row text-center min-vh-100">
                    <div className="col-12 d-flex justify-content-center align-items-center">            
                        <div class="ratio ratio-16x9 mt-4">
                            <iframe src={ enlaceVideo }  title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                    <cite title="Source Title">Fuente: { enlaceVideo }</cite>
                </div>
                <Control 
                    rutas={ rutas }
                    id={ id }
                />
            </div>
        </div>
    )
}
