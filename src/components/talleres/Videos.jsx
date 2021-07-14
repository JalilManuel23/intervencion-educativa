import React from 'react';
import { Link } from 'react-router-dom';
import './css/estilos.css';

export const Videos = ({
    titulo,
    texto,
    enlace,
    imagen,
    jugar
}) => {

    let textoBtn = ( jugar ) ? "Jugar" : "Ver video";

    return (
        <div className="videos">
            <div className="container">
                <div className="row text-center mt-5 d-flex align-items-center">
                    <div className="col-12 ">
                        <h2 className="display-4 titulo-videos">{titulo} </h2>
                        <p className="display-6 my-5">{texto} </p>
                        {
                            ( imagen ) &&
                                <img src={ imagen } />
                        }
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <Link 
                                className="btn btn-warning p-2  text-white btn-lg mt-5"
                                to={ enlace } 
                            >
                                <span className="display-6">{ textoBtn }</span>
                            </Link>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}