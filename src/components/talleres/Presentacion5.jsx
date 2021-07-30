import React from 'react';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const Presentacion5 = ({
    parrafo, 
    imagen, 
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio( sonido );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="bg-circulos d-flex align-items-center animate__animated animate__fadeIn">
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <img  className="col-12 col-md-6 animate__animated animate__bounceInRight" src={imagen} />
                    <div className="mt-2 col-12 col-md-6 text-white p-md-4 p-3 binfo animate__animated animate__bounceInLeft"> 
                        <p className="p-p5">{parrafo}</p>
                    </div>
                </div>
            </div>
            <Control 
                rutas={ rutas }
                id={ id }
                stopAudio={ stopAudio }
            />
            <AudioPlayer sound={ sound } />
        </div>
    )
}
