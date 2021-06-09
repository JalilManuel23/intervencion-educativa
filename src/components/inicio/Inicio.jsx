import React from 'react'
import { Menu } from '../menu/Menu';
import './inicio.css';

export const Inicio = () => {
    return (
        <div className="bg-inicio">
            <Menu />
            <div className="inicio container d-flex flex-column align-items-center justify-content-center">
                <h1 className="titulo-inicio">Taller para la prevención del COVID-19</h1>
                <a href="#" className="btn btn-primary mt-5 btn-lg col-3">INICIAR</a>       
            </div>
        </div>
    )
}
