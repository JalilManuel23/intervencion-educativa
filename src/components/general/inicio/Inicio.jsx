import React from 'react'
import './inicio.css';
import { Categoria } from '../categoria/Categoria';

import audioSeleccionaModalidad from "../../../assets/sounds/seleciona_modalidad.mp3";

const audio = new Audio( audioSeleccionaModalidad );

export const Inicio = () => {

    const reproducirAudio = () => {
        audio.play();
    }

    return (
        <div className="bg-inicio">
            <div className="inicio container d-flex flex-column align-items-center justify-content-center">
                <h1 className="titulo-inicio">Taller para la prevención del COVID-19</h1>

                <button type="button" 
                        class="btn btn-primary mt-5 btn-lg col-3" 
                        data-bs-toggle="modal" 
                        data-bs-target="#seleccionarCategoria"
                        onClick={ () => reproducirAudio() }
                >
                    INICIAR
                </button>

                <div class="modal fade" id="seleccionarCategoria" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Categoria />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}