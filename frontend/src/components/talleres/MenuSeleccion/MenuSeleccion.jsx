import React from 'react';
import { OpcionMenuSeleccion } from './OpcionMenuSeleccion';
import './menuSeleccion.css';
import { Menu } from '../../general/menu/Menu';

export const MenuSeleccion = ({ datos, sonido }) => {
    return (
        <>
            <Menu />
            <div className="animate__animated  animate__fadeInUp">
                <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                    <h2 className="display-5">Selecciona una opción para continuar</h2>
                </div>

                <div className="container my-5 d-md-flex flex-wrap">

                        {
                            datos.map(opcion => {

                                let { texto, imagen, ruta, color } = opcion;

                                return(
                                    <OpcionMenuSeleccion 
                                        texto={ texto }
                                        imagen={ imagen }
                                        ruta={ ruta }
                                        color= { color }
                                    />
                                )
                            })
                        }
                    </div>
                

            </div>
        </>
    )
}
