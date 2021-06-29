import React from 'react';
import './memorama.css';
import construirBaraja from './utils/construirBaraja';
import { Carta } from './Carta';
import { useState } from 'react';

export const Memorama = () => {

    const [baraja, setBaraja] = useState( construirBaraja() );
    const [parejaSeleccionada, setParejaSeleccionada] = useState( [] );
    const [estaComparando, setEstaComparando] = useState( false );

    const seleccionarCarta = ( carta ) => { 
        if(
            estaComparando || 
            carta.fueAdivinada ||
            parejaSeleccionada.indexOf( carta ) > -1
        ) {
            return;
        }

        setParejaSeleccionada( [ ...parejaSeleccionada, carta ] );

        if( parejaSeleccionada.length === 2 ) {
            compararPareja( parejaSeleccionada );
        }
    }

    const compararPareja = ( pareja ) => { 
        setEstaComparando( true );

        setTimeout(() => {
            let [ carta1, carta2 ] = pareja;
            let newBaraja = baraja;

            if( carta1.data === carta2.data ) {
                newBaraja = newBaraja.map((carta) => {
                    if( carta.data !== carta1.data ) {
                        return carta;
                    }

                    return { ...carta, fueAdivinada: true };
                })
            }

            setParejaSeleccionada( [] );
            setBaraja( newBaraja );
            setEstaComparando( false );
        }, 1000);
    }

    return(
        <div className="memorama container d-flex flex-column align-items-center mt-5">
            <h1>Título</h1>
            
            <div class="row-cartas mt-3">
                {
                    baraja.map( (carta, index) => {
                        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
                        return (
                            <Carta 
                                key={ index } 
                                info={ carta } 
                                estaSiendoComparada= { estaSiendoComparada }
                                seleccionarCarta= { () => seleccionarCarta( carta ) }
                                fueAdivinada={ carta.fueAdivinada }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
