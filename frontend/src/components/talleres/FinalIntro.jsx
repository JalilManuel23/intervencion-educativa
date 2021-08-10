import React from 'react';
import './estilos-lavados-manos.css';
import imagenes from '../../assets/images';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const FinalIntro = ({
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio( sonido );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="final-intro d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn">
            <img src={ imagenes.doctora } alt="doctora" className="img-doctora animate__animated animate__bounceInUp" />
            <AudioPlayer sound={ sound } />
            <Control 
                rutas={ rutas }
                id={ id }
                stopAudio={ stopAudio }
            />
        </div>
    )
}
