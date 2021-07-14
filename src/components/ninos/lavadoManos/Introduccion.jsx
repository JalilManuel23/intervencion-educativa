import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion5 } from '../../talleres/Presentacion5';

export const Introduccion = () => {
    return (
        <Presentacion5 
            imagen={ imagenes.lavadoNino }
            enlace='/ninos/lavado-manos/introduccion/historia'
            parrafo="Se refiere a un frote de las manos enjabonadas, para después enjuagarlas con abundante agua para lograr eliminar la suciedad y microorganismos existentes, siendo la manera más eficaz conocida de prevenir el contagio por COVID-19."
        />
    )
}