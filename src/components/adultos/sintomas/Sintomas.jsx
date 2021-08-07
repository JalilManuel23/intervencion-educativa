import React from 'react';
import './sintomas.css';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

import audioSintomas from "../../../assets/sounds/sintomas.mp3";
import audioSintomasNino from "../../../assets/sounds/sintomas_nino.mp3";

import { usePlayAudio } from "../../../hooks/usePlayAudio";
import { setStopAudio } from "../../../hooks/setStopAudio";
import { AudioPlayer } from '../../general/audioPlayer/AudioPlayer';

export const Sintomas = ({ tipo, color }) => {

    let audio = ( tipo == 'ninos' ) ? audioSintomasNino : audioSintomas;

    let sound = usePlayAudio( audio );

    let imagen = ( tipo == 'ninos' ) ? <img src={ imagenes.sintomasNinos }  alt="sintomas" className="img-sintomas" /> : <img src={ imagenes.sintomas } alt="sintomas" className="img-sintomas" />;
    let enlace = ( tipo == 'ninos' ) ? "/ninos/menu" : "/adultos/menu";

    let colors = { 
        background : color   
    }

    return (
        <div className="categoria d-flex flex-column justify-content-between animate__animated animate__fadeIn">
            <div className="container">
                <div className="row ">
                    <div className="encabezado col-12 text-center mt-5 animate__animated animate__fadeInLeft" style={ colors }>
                        <span className="fs-2">¿Cuáles son los síntomas?</span>
                    </div>

                    <div className="row d-flex flex-column align-items-center my-5 text-center animate__animated animate__fadeInLeft">                    
                        <p className="fs-3"> Las personas con COVID-19 tienen los siguientes signos y sintomas:</p>

                        { imagen }
                        
                        <Link 
                            to={ enlace } 
                            className="regresar-menu mt-3"
                            onClick={ () => {                                         
                                    setStopAudio( sound );
                                }
                            }
                        > 
                            Regresar al menú 
                        </Link>
                    </div>
                </div>
                <AudioPlayer sound={ sound } />
            </div>
        </div>
    )
}
