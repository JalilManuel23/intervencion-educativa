import React from 'react';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const ClasificacionTipos = ({
    titulo,
    opciones,
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio( sonido );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            <div className="container d-flex flex-wrap gap-5">
                {
                    opciones.map( opcion => {
                        return(
                            <div className="tipo-clasificacion col-12 col-md-5" key={ opcion.titulo }>
                                <img src={ opcion.imagen } className="img-fluid" />
            
                                <p>
                                    { opcion.titulo }
                                </p>
                            </div>
                        )
                    })
                }
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
