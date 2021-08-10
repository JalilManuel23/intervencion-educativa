import React from 'react';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

import audioCovidNino from "../../../assets/sounds/familia_covid_2.mp3";
import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from '../../../hooks/setStopAudio';
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';
import { rutasIntroNinos } from './rutasIntroNinos';
import { Control } from '../../general/control/Control';

export const IntroduccionParte2 = () => {

    let sound = usePlayAudio( audioCovidNino );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="intro-ninos2 animate__animated animate__fadeIn">

            <div className="container">

                <div className="row pt-2 pb-2">
                    <div className="contenedor-intro-intro-2 d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="animate__animated animate__fadeIn">Hace muchos años que existen los coronavirus, pero hace poco
                            tiempo apareció un nuevo miembro en la familia coronavirus
                            que se llama "coronavirus 2019" ¡y que nadie conocía!
                        </p>

                        <img src={imagenes.sorprendido2} className="img-sorprendido mt-3 animate__bounceIn" alt="expresión" />
                    </div>
                </div>

                <Control 
                    rutas={ rutasIntroNinos }
                    id={ 2 }
                    stopAudio={ stopAudio }
                />
                <AudioPlayer sound={ sound } />
            </div>
        </div>
    )
}
