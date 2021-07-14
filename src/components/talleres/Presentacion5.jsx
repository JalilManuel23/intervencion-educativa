import React from 'react';
import { Link } from 'react-router-dom';

export const Presentacion5 = ({
    parrafo, 
    imagen, 
    enlace,
    imagenes
}) => {
    return (
        <div className="bg-circulos d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <img  className="col-12 col-md-6" src={imagen} />
                    <div className="col-12 col-md-6 display-6 text-white p-4 binfo"> 
                        <p>{parrafo}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <Link 
                    className="regresar-menu mt-3"
                    to={ enlace }
                    >
                        Seguir leyendo >>
                    </Link>
        </div>
        </div>
    )
}
