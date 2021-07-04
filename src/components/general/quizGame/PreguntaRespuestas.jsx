import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { questionsSample } from "./data/sample";

export const PreguntaRespuestas = () => {
    const [numPregunta, setNumPregunta] = useState( 0 );
    
    let { pregunta, respuestas } = questionsSample[ numPregunta ];

    const verificarRespuesta = () => { 
        if( ( numPregunta + 1 ) < questionsSample.length ) {

            

            setTimeout(() => {
                setNumPregunta( numPregunta + 1 );
            }, 1000);
        } else {
            Swal.fire({
                title: `¡Has terminado el juego!`,
                showDenyButton: true,
                confirmButtonText: `Jugar de nuevo`,
                denyButtonText: `Cerrar`,
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    // reiniciarJuego();
                } else if (result.isDenied) {
                    Swal.fire('¡Gracias por jugar!', '', '');
                }
            })
        }
    }


    return (
        <>
            <h5 className="pregunta">{ pregunta }</h5>
            <div className="respuestas">
                {
                    Object.keys( respuestas ).map( key => {
                        return(
                            <p 
                                key={ key } 
                                className="respuesta"
                                onClick={ () => verificarRespuesta() }
                            >
                                { respuestas[ key ] }
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}
