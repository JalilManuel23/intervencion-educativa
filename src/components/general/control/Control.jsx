import React from 'react';
import { Link } from 'react-router-dom';
import './control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MenuControl } from './MenuControl';

export const Control = ({ rutas, id }) => {

    let idSiguiente = id + 1;
    let idAnterior = id - 1;

    const findSiguiente = ( ruta ) => { 
        return ruta.id === idSiguiente;
    }

    const findAnterior = ( ruta ) => { 
        return ruta.id === idAnterior;
    }

    let { ruta: rutaSig } = rutas.find( findSiguiente );
    let { ruta: rutaAnt } = rutas.find( findAnterior );

    console.log( rutaSig );

    if( rutas.find( findSiguiente ) ) {
        console.log('hola');
    } else {
        console.log('adios');
    }

    return (
        <div className="control bg-secondary">
            <Link to={ rutaAnt }><FontAwesomeIcon icon={ faArrowLeft } /></Link>
            <MenuControl rutas={ rutas } />
            <Link to={ rutaSig }><FontAwesomeIcon icon={ faArrowRight } /></Link>
        </div>
    )
}
