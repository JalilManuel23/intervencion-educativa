import React from 'react';
import imagenes from '../../assets/images';
import './menu.css';

export const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div className="col-3 d-flex justify-content-between">
                <img src={ imagenes.utd } alt="" className="logos" />
                <img src={ imagenes.enfermeria } alt="" className="logos" />
                <img src={ imagenes.ujed } alt="" className="logos" />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"  id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Taller 1</a>
                        <a class="nav-link" href="#">Taller 2</a>
                        <a class="nav-link" href="#">Taller 3</a>
                    </div>
                </div>
        </div>
      </nav>
    )
}