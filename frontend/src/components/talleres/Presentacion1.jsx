import React from 'react';
import { Link } from 'react-router-dom';
import './css/estilos.css';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Presentacion1 = ({
    titulo,
    parrafo,
    imagen,
    enlace,
    sonido
}) => {

    let sound = usePlayAudio( sonido );

    return (
        <div className="h-100 animate__animated animate__fadeIn">
            <div className="text-center text-white py-2 mt-4 barra-titulo animate__animated  animate__fadeInLeft"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            <div className="container animate__animated  animate__zoomIn"> 
                <div className="col-12 text-center my-5 ">
                    <p className="parrafo"> {parrafo}</p>
                </div>

                <div className="col-12 text-center my-5">
                    <img className="img-fluid img-presen" src={imagen} />
                </div>

                <div className="d-flex justify-content-end">
                    <Link 
                        className="regresar-menu"
                        to={ enlace }
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
