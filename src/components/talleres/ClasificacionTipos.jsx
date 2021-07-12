import React from 'react';


export const ClasificacionTipos = ({
    titulo,
    imagenes
}) => {
    return (
        <div>
            <div className="text-center text-white py-2 mt-4 barra-titulo"> 
                <h2 className="display-5">{titulo}</h2>
            </div>

            <div className="container d-flex flex-wrap">
                <div className="tipo-clasificacion col-12 col-md-5">
                    <img src={ imagenes.lavManos } />

                    <p>
                        Lavado higiénico o social
                    </p>
                </div>
                <div className="col-2"></div>
                <div className="tipo-clasificacion col-12 col-md-5">
                    <img src={ imagenes.clinico } />

                    <p>
                        Lavado clínico o antiséptico
                    </p>
                </div>
                <div className="tipo-clasificacion col-12 col-md-5">
                    <img src={ imagenes.quirurgico } />

                    <p>
                        Lavado quirúrgico
                    </p>
                </div>
                <div className="col-2"></div>
                <div className="tipo-clasificacion col-12 col-md-5">
                    <img src={ imagenes.gel } />

                    <p>
                        Lavado con alcohol en gel
                    </p>
                </div>
            </div>
        </div>
    )
}
