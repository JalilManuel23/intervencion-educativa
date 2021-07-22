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
        <div className="bg-circulos d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <img  className="col-12 col-md-6" src={imagen} />
                    <div className="col-12 col-md-6 display-6 text-white p-4 binfo"> 
                        <p>{parrafo}</p>
                    </div>
                </div>
                <Control 
                    rutas={ rutas }
                    id={ id }
                    stopAudio={ stopAudio }
                />
                <AudioPlayer sound={ sound } />
            </div>
        </div>
    )
}
