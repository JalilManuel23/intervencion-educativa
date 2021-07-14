import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from '../../../hooks/setStopAudio';
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';

export const ElementosNecesarios = () => {

    let sound = usePlayAudio( audioIntro );

    return (
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <div className="container">
                    <h2 className="display-5">Para el lavado de manos social o doméstico, lo único que se necesita es:</h2>
                </div>
            </div>

            <div className="container"> 
                <div className="d-flex justify-content-around mt-5">
                    <div className="d-flex flex-column align-items-center">
                        <img src={ imagenes.agua } alt="agua" className="elementos" />
                        <h4 className="display-6 mt-1 nombre-elementos">Agua</h4>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src={ imagenes.jabon } alt="jabon"  className="elementos" />
                        <h4 className="display-6 mt-1 nombre-elementos">Jabón</h4>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <Link 
                        className="regresar-menu mt-3"
                        to="/adultos/lavado-manos/5-momentos-oms"
                        onClick={
                            () => {
                                setStopAudio( sound );
                            }
                        }
                    >
                        Seguir leyendo >>
                    </Link>
                </div> 
                <AudioPlayer sound={ sound } />       
            </div>
        </div>
    )
}
