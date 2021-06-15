import React from 'react';
import './sintomas.css';
import imagenes from '../../../assets/images';
import { Link } from 'react-router-dom';

export const Sintomas = ({ tipo, color }) => {

    let imagen = ( tipo == 'ninos' ) ? <img src={ imagenes.sintomasNinos } alt="sintomas" /> : <img src={ imagenes.sintomas } alt="sintomas" />;
    
    let colors = { 
        background : color   
    }

    return (
        <div className="categoria d-flex flex-column justify-content-between">
            <div className="container">
                <div className="row ">
                    <div className="encabezado col-12 text-center mt-5" style={ colors }>
                        <span className="fs-2">¿Cuáles son los sintomas?</span>
                    </div>

                    <div className="row d-flex flex-column align-items-center my-5 text-center">                    
                        <p className="fs-3"> Las personas con COVID-19 tienen los siguientes signos y sintomas:</p>

                        { imagen }
                        
                        <Link to="/categoria" className="regresar-menu mt-3"> Regresar al menú </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
