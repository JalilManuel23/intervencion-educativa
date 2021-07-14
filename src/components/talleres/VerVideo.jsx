import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';

export const VerVideo = ({
    enlace,
    enlaceVideo,
    ninos
}) => {

    let clase = ( ninos ) ? "presentacion-3-ninos" : "presentacion-3";

    return (
        <div className={clase}>
            <div className="container">
                <div className="row text-center">
                    <ddiv className="col-12 mt-5 d-flex justify-content-center">            
                        {/* <iframe width="560" height="315" src={ enlaceVideo } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             */}
                        <div class="ratio ratio-16x9">
                            <iframe src={ enlaceVideo }  title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </ddiv>
                    <Link
                        to={ enlace }
                        className="regresar-menu mt-3"
                    >
                        Seguir leyendo >>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
