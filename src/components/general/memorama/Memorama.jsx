import React from 'react';
import './memorama.css';
import { datosEjemplo } from './data/sample';
import { Carta } from './Carta';
import { useState } from 'react';
import { useEffect } from 'react';

export const Memorama = () => {

    const [selectedCards, setSelectedCards] = useState( [] );
    const [puntos, setPuntos] = useState( 0 );

    const [listCards, setListCards] = useState( [] );
    
    useEffect(() => {
        if( selectedCards.length === 2 ) {
            let [ carta1, carta2 ] = selectedCards;

            if( carta1 === carta2 ) {
                setListCards( ...listCards, carta1 );
                setPuntos( puntos + 1 );
            } else {
                console.log('Son diferentes');
            }

            setSelectedCards( [] );
        }
    }, [ selectedCards ]);

    return (
        <div className="memorama container d-flex flex-column align-items-center mt-5">
            <h1>Título</h1>
            <div className="cartas d-flex flex-column align-items-center">
                <div class="row-cartas mt-3">
                    {
                        datosEjemplo.map( carta => {
                            console.log( listCards );
                            let isActive =  listCards.includes( carta.idRespuesta ) ? true : false;

                            return(
                                <Carta 
                                    isActive={ isActive }
                                    key={ carta.id } 
                                    info={ carta } 
                                    setSelectedCards={ setSelectedCards }
                                />
                            )   
                        })
                    }
                </div>
            </div>

            <p className="mt-4">Puntos: { puntos }</p>
            <p>Tiempo: 2:05</p>
        </div>
    )
}
