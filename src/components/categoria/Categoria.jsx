import React from 'react';
import { Menu } from '../menu/Menu';
import './categoria.css';
import imagenes from '../../assets/images';
import { Link } from 'react-router-dom';

export const Categoria = () => {
    return (
        <div className="categoria d-flex flex-column justify-content-between">
            <Menu />

            <div className="container">

                <div className="row">
                    <div className="encabezado bg-primary col-12 text-center">
                        <span className="fs-2"> Selecciona la modadlidad del taller:</span>
                    </div>
                </div>

                <div className="row d-flex flex-column align-items-center flex-md-row justify-content-md-around mt-5">
                    <Link className="opcion ninos col-4">
                        <img src={imagenes.sorprendido} className="img-opcion"></img>
                        <p className="nombre-opcion">Niños</p>
                    </Link>
                    <Link to="/menu-adultos" className="opcion adultos col-4">
                        <img src={imagenes.sorprendido} className="img-opcion"></img>
                        <p className="nombre-opcion">Adultos</p>
                    </Link>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    )
}

