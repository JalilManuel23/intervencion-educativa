import React from 'react';
import './memorama.css';
import construirBaraja from './utils/construirBaraja';
import { Carta } from './Carta';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { playAudio } from "../../../hooks/playAudio";
import audioSeleccionar from "../../../assets/sounds/seleccionar_carta.mp3";
import audioMezclar from "../../../assets/sounds/mezclar.mp3";
import audioMal from "../../../assets/sounds/mal.mp3";
import audioBien from "../../../assets/sounds/bien.mp3";
import audioGanar from "../../../assets/sounds/ganar.mp3";
import { Control } from '../../general/control/Control';

export const Memorama = ({ 
    datos,
    titulo,
    rutas,
    id
}) => {
    console.log( datos );
    const [baraja, setBaraja] = useState(construirBaraja( datos ));
    const [parejaSeleccionada, setParejaSeleccionada] = useState([]);
    const [estaComparando, setEstaComparando] = useState(false);
    const [numeroDeIntentos, setNumeroDeIntentos] = useState(0);

    const [aciertos, setAciertos] = useState(0);
    const [errores, setErrores] = useState(0);

    const seleccionarCarta = (carta) => {

        playAudio( audioSeleccionar );

        if (
            estaComparando ||
            carta.fueAdivinada ||
            parejaSeleccionada.indexOf(carta) > -1
        ) {
            return;
        }

        setParejaSeleccionada([...parejaSeleccionada, carta]);
    }

    useEffect(() => {
        if (parejaSeleccionada.length === 2) {
            compararPareja(parejaSeleccionada);
        }
    }, [parejaSeleccionada]);

    const compararPareja = (pareja) => {
        setEstaComparando(true);

        setTimeout(() => {
            let [carta1, carta2] = pareja;
            let newBaraja = baraja;

            if (carta1.data === carta2.data) {
                playAudio( audioBien );
                setAciertos(aciertos+1)
                newBaraja = newBaraja.map((carta) => {
                    if (carta.data !== carta1.data) {
                        return carta;
                    }

                    return { ...carta, fueAdivinada: true };

                })
            } else {
                playAudio( audioMal );
                setErrores(errores+1)
            }

            verificarSiHayGanador( newBaraja );

            setNumeroDeIntentos( numeroDeIntentos + 1 ); 
            setParejaSeleccionada([]);
            setBaraja(newBaraja);
            setEstaComparando(false);
        }, 1000);
    }

    const verificarSiHayGanador = (baraja) => {
        if (
            baraja.filter((carta) => !carta.fueAdivinada).length === 0
        ) {
            playAudio( audioGanar );
            Swal.fire({
                title: `¡Has ganado en ${ numeroDeIntentos } intentos!`,
                showDenyButton: true,
                confirmButtonText: `Jugar de nuevo`,
                denyButtonText: `Cerrar`,
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    reiniciarJuego();
                } else if (result.isDenied) {
                    Swal.fire('¡Gracias por jugar!', '', '');
                }
            })
        }
    }

    const reiniciarJuego = () => { 
        playAudio( audioMezclar );
        setBaraja(construirBaraja( datos ));
        setParejaSeleccionada([]);
        setEstaComparando(false);
        setNumeroDeIntentos(0);
        setAciertos(0)
        setErrores(0)
    }

    return (
        <div className="memorama container d-flex flex-column align-items-center mt-5 animate__animated animate__fadeIn">
            <h1>{ titulo }</h1>

            <div class="row-cartas mt-3 animate__animated animate__backInLeft">
                {
                    baraja.map((carta, index) => {
                        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
                        return (
                            <Carta
                                key={index}
                                info={carta}
                                estaSiendoComparada={estaSiendoComparada}
                                seleccionarCarta={() => seleccionarCarta(carta)}
                                fueAdivinada={carta.fueAdivinada}
                            />
                        )
                    })
                }
            </div>
            
            <div className="opciones d-flex justify-content-around align-items-center my-4">
                <div className="bg-success text-white p-2 puntos"> Aciertos: {aciertos}  </div>
                <div className="bg-danger text-white p-2 puntos"> Errores: {errores} </div>
                <button className="btn btn-outline-dark btn-outline-primary" onClick = { () => {reiniciarJuego() }}>
                    <span> Reiniciar</span> 
                </button>   
            </div>
            
            <Control 
                rutas={ rutas }
                id={ id }
            />
        
        </div>
    )
}
