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
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            <div className="container"> 
                <div className="col-12 text-center my-5 display-5">
                    <p className="parrafo"> {parrafo}</p>
                </div>

                <div className="col-12 text-center my-5">
                    <img className="img-fluid" src={imagen} />
                </div>

                <div className="d-flex justify-content-end">
                    <Link 
                        className="regresar-menu mt-3"
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
