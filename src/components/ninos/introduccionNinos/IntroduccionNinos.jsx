import React from 'react';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';
import './introduccionNinos.css';

import audioInfoNino from "../../../assets/sounds/informacion_covid_19_nino.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";


export const IntroduccionNinos = () => {

    usePlayAudio( audioInfoNino );

    return (
        <div className="intro-ninos">
            <div className="container">
                <div className="row d-flex pt-5">
                    <div className="img-container-intro-ninos col-md-5 col-12 d-flex mb-5">
                        <img 
                            src={ imagenes.nina }
                            alt="niña"
                            className="img-intro-ninos"
                        />
                    </div>
                    <div className="info-intro-ninos d-flex flex-column justify-content-between align-items-center col-12 col-md-6">
                        <p className="tit-intro-ninos">¿Por qué todos hablan de algo que se llama CORONAVIRUS?</p>
                        <p className="contenedor-intro">CORONAVIRUS es un grupo de virus que pueden hacer que las personas se sientan enfermas.</p>
                        <Link to="introduccion-ninos2" className="seguir-leyendo">Seguir leyendo>></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
