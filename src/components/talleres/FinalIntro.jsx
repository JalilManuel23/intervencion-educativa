import React from 'react';
import './estilos-lavados-manos.css';
import imagenes from '../../assets/images';
import { Link } from 'react-router-dom';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const FinalIntro = ({
    enlace,
    sonido
}) => {

    let sound = usePlayAudio( sonido );

    return (
        <div className="final-intro d-flex flex-column justify-content-center align-items-center">
            <img src={ imagenes.doctora } alt="doctora" className="img-doctora" />
            <Link 
                className="seguir-leyendo" 
                to={ enlace }
                onClick={
                    () => {
                        setStopAudio( sound );
                    }
                }
            >Siguiente >></Link>
            <AudioPlayer sound={ sound } />
        </div>
    )
}
