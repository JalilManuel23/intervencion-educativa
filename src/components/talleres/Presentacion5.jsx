import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Presentacion5 = ({
    parrafo, 
    imagen, 
    enlace,
    sonido
}) => {

    let sound = usePlayAudio( sonido );

    return (
        <div className="bg-circulos d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <img  className="col-12 col-md-6" src={imagen} />
                    <div className="col-12 col-md-6 display-6 text-white p-4 binfo"> 
                        <p>{parrafo}</p>
                    </div>
                </div>
                <AudioPlayer sound={ sound } />
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
        </div>
    )
}
