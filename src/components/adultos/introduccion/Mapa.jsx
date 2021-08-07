import React from 'react'
import { Link } from 'react-router-dom'
import audioIntro from "../../../assets/sounds/mapa.mp3";
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';
import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from '../../../hooks/setStopAudio';
import { rutasIntro } from './rutasIntro';
import { Control } from '../../general/control/Control';

export const Mapa = () => {

    let sound = usePlayAudio( audioIntro );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="container animate__animated animate__bounceInLeft"> 
            <div className="row mt-3">  
                    <div className="vh-100">
                        <div className="text-center mb-5 encabezado bg-primary">
                            <span className="display-6" >Distribución del COVID-19 alrededor del mundo</span>
                        </div>
                        <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="600px"></iframe>
                    </div>
            </div>
            <Control 
                rutas={ rutasIntro }
                id={ 2 }
                stopAudio={ stopAudio }
            />
            <AudioPlayer sound={ sound } />
        </div>
    )
}