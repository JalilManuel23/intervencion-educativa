import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../../assets/images';
import './menu.css';

export const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div className="col-3 d-flex justify-content-between">
                    <img src={imagenes.utd} alt="" className="logos" />
                    <img src={imagenes.enfermeria} alt="" className="logos" />
                    <img src={imagenes.ujed} alt="" className="logos" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
                        <li class="nav nav-item"> 
                        <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav nav-item">
                        <a class="nav-link" href="#">Introducción</a>
                        </li>
                        <li class="nav nav-item">
                        <a class="nav-link" href="#">Taller 1</a>
                        </li>
                        <li class="nav nav-item">
                        <a class="nav-link" href="#">Taller 2</a>
                        </li>
                        <li class="nav nav-item">
                        <a class="nav-link" href="#">Taller 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}