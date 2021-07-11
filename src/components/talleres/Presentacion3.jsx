import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';
import imagenes from '../../assets/images';

export const Presentacion3 = ({
    imagen,
    parrafo,
    enlace
}) => {
    return (
        <div className="presentacion-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mt-5">
                        <h2 className="titulo display-5">HISTORIA</h2>
                        <p className="subtitulo">Lavado de manos</p>
                        <p>
                            Durante el año 1846, el médico Húngaro Ignaz Semmelweis, constató y fundamentó que 
                            el lavado de manos entre el personal de salud disminuyó la mortalidad y otros pacedimientos
                            entre los pacientes.
                        </p>
                    </div>
                    <div className="col-12 col-md-8 mt-5">
                        <div className="d-flex border-bottom p-3">
                            <div>
                                <h6 className="subtitulo-grande">Ignaz Semmelweis</h6>
                                <p>
                                    Propuso el lavado de manos entre el personal médico, y se evidenció que la mortalidad se 
                                    disminuyó abruptamente a partir de ese momento, ésta estrategia se mantuvo
                                    por varios años.
                                </p>
                            </div>
                            <img src={ imagenes.historia } className="img1-presentacion-3" />
                        </div>
                        <div className="d-flex mt-4">
                            <div className="pr-1 border-end">
                                <p className="subtitulo">Personajes que realizaron aportes que muestran lavado de manos es una medida para evitar infecciones:</p>
                                <ul>
                                    <li>Ignaz Semmelweis</li>
                                    <li>Oliver Holmes</li>
                                </ul>
                            </div>
                            <img src={ imagenes.historia2 } className="img2-presentacion-3 p-2" />
                        </div>
                    </div>
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