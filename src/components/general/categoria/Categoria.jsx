import React from 'react';
import './categoria.css';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

export const Categoria = () => {
    return (
        <div className="categoria d-flex flex-column justify-content-between">
            <div className="container mt-5 d-flex flex-column align-items-between">
                <div className="row">
                    <div className="encabezado bg-primary col-12 text-center">
                        <span className="fs-2"> Selecciona la modalidad del taller:</span>
                    </div>
                </div>

                <div className="row d-flex flex-column align-items-center flex-md-row justify-content-md-around mt-5">
                    <Link to="/menu-ninos" className="opcion ninos col-4">
                        <img src={ imagenes.nino } className="img-opcion"></img>
                        <p className="nombre-opcion">Niños</p>
                    </Link>
                    <Link to="/menu-adultos" className="opcion adultos col-4">
                        <img src={ imagenes.adulto } className="img-opcion"></img>
                        <p className="nombre-opcion">Adultos</p>
                    </Link>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    )
}

