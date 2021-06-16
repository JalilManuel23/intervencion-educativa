import React from 'react'
import { Link } from 'react-router-dom';
import './inicio.css';
import { Categoria } from '../categoria/Categoria';

export const Inicio = () => {
    return (
        <div className="bg-inicio">
            <div className="inicio container d-flex flex-column align-items-center justify-content-center">
                <h1 className="titulo-inicio">Taller para la prevención del COVID-19</h1>

                <button type="button" class="btn btn-primary mt-5 btn-lg col-3" data-bs-toggle="modal" data-bs-target="#seleccionarCategoria">
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