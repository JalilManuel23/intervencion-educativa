import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';

export const Presentacion3 = ({
    imagen,
    parrafo,
    enlace
}) => {
    return (
        <div className="presentacion-3">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mt-5 d-flex justify-content-center">
                        <div>
                            <img className="img-fluid img-historia" src={imagen}/>
                        </div>
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center ">
                        <div className="text-center text-white p-3 rounded-pill texto-historia">
                            <p className="display-6">{parrafo} </p>
                        </div>
                    </div>
                    <Link
                    to={ enlace }
                    className="regresar-menu mt-3"
                >
                    Seguir leyendo >>
                </Link>
                </div>
            </div>
            
        </div>
    )
}
