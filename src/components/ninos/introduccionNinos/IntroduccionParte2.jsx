import React from 'react';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

import audioCovidNino from "../../../assets/sounds/familia_covid_2.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";

export const IntroduccionParte2 = () => {

    usePlayAudio( audioCovidNino );

    return (
        <div className="intro-ninos2">

            <div className="container">

                <div className="row pt-5">
                    <div className="contenedor-intro d-flex flex-column align-items-center justify-content-center text-center">
                        <p>Hace muchos años que existen los coronavirus, pero hace poco
                            tiempo apareció un nuevo miembro en la familia coronavirus
                            que se llama "coronavirus 2019" ¡y que nadie conocía!
                        </p>

                        <img src={imagenes.sorprendido2} className="img-fluid img-sorprendido mt-3" alt="expresión" />
                    </div>
                </div>

                <p className="text-center mt-4">
                    <Link to="sintomas-ninos" className="seguir-leyendo">Seguir leyendo >></Link>
                </p>
            </div>
        </div>
    )
}
