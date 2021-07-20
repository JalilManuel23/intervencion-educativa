import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Presentacion3 = ({
    titulo,
    imagen,
    imagen2,
    imagen3,
    parrafo,
    enlace,
    sonido
}) => {

    let sound = usePlayAudio( sonido );

    return (
        <div className="presentacion-3">
            <div className="p3-container container d-flex flex-column align-items-center justify-content-center h-100">
                <h1 className="titulo-rect">{ titulo }</h1>
                <div className="d-flex flex-column justify-content-around mt-3">    
                    <p className="parrafo-historia mb-3">
                        { parrafo }
                    </p>
                
                    <div className="d-flex justify-content-between">
                        <img src={ imagen } className="img-historia" />
                        <img src={ imagen2 } className="img-historia" />
                        <img src={ imagen3 } className="img-historia" />
                    </div>
                </div>
                <AudioPlayer sound={ sound } />
            </div>
            <Link
                to={ enlace }
                className="regresar-menu mt-3"
                onClick={
                    () => {
                        setStopAudio( sound );
                    }
                }
            >
                Seguir leyendo >>
            </Link>
        </div>
    )
}
{/* <div className="container">
<div className="row">
    <div className="col-12 col-md-4 mt-5">
        <h2 className="titulo display-5">{ titulo }</h2>
        <p className="subtitulo">{ sub1 }</p>
        <p>
            { parrafo1 }
        </p>
    </div>
    <div className="col-12 col-md-8 mt-5">
        <div className="d-flex border-bottom p-3">
            <div>
                <h6 className="subtitulo-grande">{ sub2 }</h6>
                <p>
                    { parrafo2 }
                </p>
            </div>
            <img src={ imagen1 } className="img1-presentacion-3" />
        </div>
        <div className="d-flex mt-4">
            <div className="pr-1 border-end">
                <p className="subtitulo">{ sub3 }</p>
                <ul>
                    {
                        lista.map( item => {
                            return <li>{ item }</li>
                        })
                    }
                </ul>
            </div>
            <img src={ imagen2 } className="img2-presentacion-3 p-2" />
        </div>
    </div>
    <Link
        to={ enlace }
        className="regresar-menu mt-3"
        onClick={
            () => {
                setStopAudio( sound );
            }
        }
    >
        Seguir leyendo >>
    </Link>
</div>
<AudioPlayer sound={ sound } />
</div> */}