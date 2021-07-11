import React from 'react';
import { OpcionMenuSeleccion } from './OpcionMenuSeleccion';
import './menuSeleccion.css';
import imagenes from '../../../assets/images';

export const MenuSeleccion = () => {
    return (
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <h2 className="display-5">Selecciona una opción para continuar</h2>
            </div>

            <div className="container my-5">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <OpcionMenuSeleccion texto="Introducción" imagen={ imagenes.uno } ruta="/adultos/lavado-manos/introduccion" />
                        <OpcionMenuSeleccion texto="Lavado de manos social" imagen={ imagenes.dos } ruta="/adultos/lavado-manos/lavado-social" />
                        <OpcionMenuSeleccion texto="Elementos necesarios" imagen={ imagenes.tres } ruta="/adultos/lavado-manos/elementos-necesarios" />
                    </div>

                    <div className="col-12 col-md-6"> 
                        <OpcionMenuSeleccion texto="5 momentos del lavado de manos" imagen={ imagenes.cuatro } ruta="/adultos/lavado-manos/video2" />
                        <OpcionMenuSeleccion texto="Tecnica correcta de lavado" imagen={ imagenes.cinco } ruta="/adultos/lavado-manos/introduccion" />
                        <OpcionMenuSeleccion texto="Cuestionario" imagen={ imagenes.seis} ruta="/adultos/lavado-manos/introduccion" />
                    </div>
                </div>
            </div>

        </div>
    )
}
