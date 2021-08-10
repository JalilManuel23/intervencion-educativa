import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/agua_jabon.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from '../../../hooks/setStopAudio';
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';
import { rutasLavadoAdultos } from './rutasLavadoAdultos';
import { Control } from '../../general/control/Control';

export const ElementosNecesarios = () => {

    let sound = usePlayAudio( audioIntro );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="text-center text-white py-2 mt-4 barra-titulo animate__animated animate__bounceInLeft"> 
                <div className="container">
                    <h2 className="display-5">Para el lavado de manos social o doméstico, lo único que se necesita es:</h2>
                </div>
            </div>

            <div className="container"> 
                <div className="d-flex flex-column flex-md-row justify-content-around mt-5 animate__animated animate__bounce">
                    <div className="d-flex flex-column align-items-center">
                        <img src={ imagenes.agua } alt="agua" className="elementos" />
                        <h4 className="display-6 mt-1 nombre-elementos">Agua</h4>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src={ imagenes.jabon } alt="jabon"  className="elementos" />
                        <h4 className="display-6 mt-1 nombre-elementos">Jabón</h4>
                    </div>
                </div>

                <Control 
                    rutas={ rutasLavadoAdultos }
                    id={ 10 }
                    stopAudio={ stopAudio }
                />
                <AudioPlayer sound={ sound } />       
            </div>
        </div>
    )
}
