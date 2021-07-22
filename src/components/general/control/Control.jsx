import React from 'react';
import { Link } from 'react-router-dom';
import './control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MenuControl } from './MenuControl';

export const Control = ({ rutas, id, stopAudio }) => {

    let idSiguiente = id + 1;
    let idAnterior = id - 1;

    const findSiguiente = ( ruta ) => { 
        return ruta.id === idSiguiente;
    }

    const findAnterior = ( ruta ) => { 
        return ruta.id === idAnterior;
    }

    let rutaSig = rutas[0].ruta;
    let rutaAnt = rutas[0].ruta;

    console.log(rutas.find( findSiguiente )  );

    if( rutas.find( findSiguiente ) ) {
        let { ruta: sig } = rutas.find( findSiguiente );
        rutaSig = sig;
    }
    
    if( rutas.find( findAnterior )  ) {
        let { ruta: ant } = rutas.find( findAnterior );
        rutaAnt = ant;
    }

    return (
        <div className="control bg-secondary">
            <Link 
                to={ rutaAnt }
                onClick={ stopAudio }
            >
                <FontAwesomeIcon icon={ faArrowLeft } />
            </Link>
            <MenuControl 
                rutas={ rutas } 
                stopAudio={ stopAudio }
            />
            <Link 
                to={ rutaSig }
                onClick={ stopAudio }
            >
                <FontAwesomeIcon icon={ faArrowRight } />
            </Link>
        </div>
    )
}
