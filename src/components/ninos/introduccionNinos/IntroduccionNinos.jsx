import React from 'react';
import imagenes from '../../../assets/images';
import './introduccionNinos.css';

import audioInfoNino from "../../../assets/sounds/informacion_covid_19_nino.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from '../../../hooks/setStopAudio';
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';
import { rutasIntroNinos } from './rutasIntroNinos';
import { Control } from '../../general/control/Control';

export const IntroduccionNinos = () => {

    let sound = usePlayAudio( audioInfoNino );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="intro-ninos animate__animated animate__fadeIn">
            <div className="container">
                <div className="row d-flex pt-5 justify-content-center justify-content-lx-between">
                    <div className="img-container-intro-ninos col-xl-5 col-8 d-flex mb-5 align-items-center" >
                        <img 
                            src={ imagenes.nina }
                            alt="niña"
                            className="img-intro-ninos animate__animated animate__backInDown"
                        />
                    </div>
                    <div className="info-intro-ninos d-flex flex-column align-items-center col-12 col-xl-6 animate__animated animate__bounceIn">
                        <p className="tit-intro-ninos">¿Por qué todos hablan de algo que se llama CORONAVIRUS?</p>
                        <p className="contenedor-intro-intro mt-3">CORONAVIRUS es un grupo de virus que pueden hacer que las personas se sientan enfermas.</p>
                    </div>
                </div>
                <Control 
                    rutas={ rutasIntroNinos }
                    id={ 1 }
                    stopAudio={ stopAudio }
                />
                <AudioPlayer sound={ sound } />
            </div>
        </div>
    )
}
