import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';

export const Presentacion3 = ({
    titulo,
    imagen1,
    imagen2,
    parrafo1,
    parrafo2,
    sub1,
    sub2,
    sub3,
    lista,
    enlace
}) => {
    return (
        <div className="presentacion-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mt-5">
                        <h2 className="titulo display-5">{ titulo }</h2>
                        <p className="subtitulo">{ sub1 }</p>
                        <p>
                            { parrafo1 }
                        </p>
                    </div>
                    <div className="col-12 col-md-8 mt-5">
                        <div className="d-flex border-bottom p-3">
                            <div>
                                <h6 className="subtitulo-grande">{ sub2 }</h6>
                                <p>
                                    { parrafo2 }
                                </p>
                            </div>
                            <img src={ imagen1 } className="img1-presentacion-3" />
                        </div>
                        <div className="d-flex mt-4">
                            <div className="pr-1 border-end">
                                <p className="subtitulo">{ sub3 }</p>
                                <ul>
                                    {
                                        lista.map( item => {
                                            return <li>{ item }</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <img src={ imagen2 } className="img2-presentacion-3 p-2" />
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

{/* <div className="presentacion-3">
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

</div> */}