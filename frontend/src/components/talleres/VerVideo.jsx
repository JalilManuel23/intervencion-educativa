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
                        {/* <iframe width="560" height="315" src={ enlaceVideo } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             */}
                        <div class="ratio ratio-16x9">
                            <iframe src={ enlaceVideo }  title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <Control 
                    rutas={ rutas }
                    id={ id }
                />
            </div>
        </div>
    )
}
