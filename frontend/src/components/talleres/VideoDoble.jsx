import React from 'react'
import { Link } from 'react-router-dom';
import './css/estilos.css';
import { Control } from '../general/control/Control';

export const VideoDoble = ({ 
    titulo, 
    enlace, 
    enlace1, 
    enlace2,
    rutas,
    id 
}) => {
    return (
        <div className="animate__animated animate__fadeIn">
            {/* //Barra */}
            <div className="text-center text-white py-2  barra-titulo"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            {/* //carousel */}
            <div id="carouselExampleControls" class="carousel slide container my-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active ratio ratio-16x9">
                        <iframe className="first-slide" src={ enlace1 } allowfullscreen ></iframe>
                    </div>
                    <div class="carousel-item ratio ratio-16x9">
                        <iframe className="first-slide" src={ enlace2 } allowfullscreen ></iframe>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <Control 
                rutas={ rutas }
                id={ id }
            />
        </div>
    )
}
