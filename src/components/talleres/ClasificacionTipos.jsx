import React from 'react';
import { Link } from 'react-router-dom';

export const ClasificacionTipos = ({
    titulo,
    imagenes,
    enlace,
    opciones
}) => {
    return (
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            <div className="container d-flex flex-wrap gap-5">
                {
                    opciones.map( opcion => {
                        return(
                            <div className="tipo-clasificacion col-12 col-md-5" key={ opcion.titulo }>
                                <img src={ opcion.imagen } className="img-fluid" />
            
                                <p>
                                    { opcion.titulo }
                                </p>
                            </div>
                        )
                    })
                }
                <Link
                    to={ enlace }
                    className="seguir-leyendo"
                >
                    Seguir leyendo >>
                </Link>
            </div>
        </div>
    )
}
