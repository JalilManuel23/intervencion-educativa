import React from 'react'
import { Link } from 'react-router-dom';
import './inicio.css';

export const Inicio = () => {
    return (
        <div className="bg-inicio">
            <div className="inicio container d-flex flex-column align-items-center justify-content-center">
                <h1 className="titulo-inicio">Taller para la prevención del COVID-19</h1>
                <Link to="/categoria" className="btn btn-primary mt-5 btn-lg col-3">INICIAR</Link>       
            </div>
        </div>        
    )
}