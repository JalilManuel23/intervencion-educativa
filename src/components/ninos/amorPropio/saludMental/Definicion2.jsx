import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/para_combatir.mp3";
import { AudioPlayer } from '../../../general/audioPlayer/AudioPlayer';
import { Control } from '../../../general/control/Control';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Definicion2 = () => {
    return (
        <div className="intro-ninos2 animate__animated animate__fadeIn">

            <div className="container">

                <div className="row pt-5">
                    <div className="contenedor-intro-intro d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="animate__animated animate__fadeIn">Para combatir el miedo durante la pandemia, tenemos que fortalecer nuestra salud mental, haciendo cosas que nos cuiden a nosotros y a la vez a los demás
                        </p>

                        <img src={imagenes.sorprendido} className="img-fluid img-sorprendido mt-3 animate__bounceIn" alt="expresión" />
                    </div>
                </div>

                <Control 
                    rutas={ rutasAmorPropio }
                    id={ 2 }
                />
                <AudioPlayer sound={ audio } />
            </div>
        </div>
    )
}