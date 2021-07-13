import React, { useState } from 'react';
import './categoria.css';
import imagenes from '../../../assets/images';
import { Redirect } from 'react-router-dom';

import { setStopAudio } from '../../../hooks/setStopAudio';


export const Categoria = ({ audio }) => {
    const [redirect, setRedirect] = useState(null);

    if (redirect != null) {
        return <Redirect to={redirect} />
    }

    return (
        <div className="categoria d-flex flex-column justify-content-between">
            <div className="container mt-5 d-flex flex-column align-items-between">
                <div className="row">
                    <div className="encabezado bg-primary col-12 text-center">
                        <span className="fs-2"> Selecciona la modalidad del taller:</span>
                    </div>
                </div>

                <div className="row d-flex flex-column align-items-center flex-md-row justify-content-md-around mt-5">
                    <div className="opcion ninos col-4"
                        onClick={() => {
                            setStopAudio( audio );
                            setRedirect("/ninos/menu");
                        }
                    }
                        data-bs-dismiss="modal"
                    >
                        <img src={imagenes.nino} className="img-opcion"></img>
                        <p className="nombre-opcion">Niños</p>
                    </div>
                    <div className="opcion col-4"
                        onClick={() => {
                            setStopAudio( audio );
                            setRedirect( "/adultos/menu" );
                        }
                    }
                        data-bs-dismiss="modal"
                    >
                        <img src={imagenes.adulto} className="img-opcion"></img>
                        <p className="nombre-opcion">Adultos</p>
                    </div>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    )
}

