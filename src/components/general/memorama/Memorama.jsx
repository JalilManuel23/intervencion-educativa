import React from 'react';
import './memorama.css';
import { datosEjemplo } from './data/sample';
import { Carta } from './Carta';

export const Memorama = () => {
    return (
        <div className="memorama container d-flex flex-column align-items-center mt-5">
            <h1>Título</h1>
            <div className="cartas d-flex flex-column align-items-center">
                <div class="row-cartas mt-3">
                    {
                        datosEjemplo.map( carta => {
                            return(
                                <Carta key={ carta.id } info={ carta } />
                            )   
                        })
                    }
                </div>
            </div>
            <p className="mt-4">Puntos: 2</p>
            <p>Tiempo: 2:05</p>
        </div>
    )
}
