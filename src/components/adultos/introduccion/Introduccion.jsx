import React from 'react';
import './introduccion.css';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

export const Introduccion = () => {
    return (
        <>
            <div className="introduccion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center div-img-intro">
                            <img src={imagenes.adultoMujer}
                                alt="adulto mujer"
                                className="img-introduccion d-none d-md-block"
                            />
                        </div>
                        <div className="col-md-7 col-12 d-flex flex-column align-items-center">
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                                <div className="contenedor-intro my-5 ">
                                    <p className="lh-sm">El coronavirus SARS-cov-2 es un virus que apareció en china. Después se extendió a todos los continentes del mundo
                                        provocando una pandemia. Actualmente Europa y América son los mas afectados.
                                    </p>

                                    <p className="lh-sm">
                                        Este nuevo virus, provoca la enfermedad conocida con el nombre de COVID-19.
                                    </p>
                                </div>
                            </div>
                            <Link to="sintomas-adultos" className="seguir-leyendo">Seguir leyendo >></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}