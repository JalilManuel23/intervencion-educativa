import React from 'react'
import { Memorama } from '../../../general/memorama/Memorama'
import imagenes from '../../../../assets/images';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const MemoramaAmor = () => {
    let datos =  [
        {
            "data": "Amor",
            "img": imagenes.unoMemo
        },
        {
            "data": "Cariño",
            "img": imagenes.dosMemo
        },
        {
            "data": "Amor propio",
            "img": imagenes.tresMemo
        },
        {
            "data": "Autoimagen",
            "img": imagenes.cuatroMemo
        },
        {
            "data": "Prevenir COVID-19",
            "img": imagenes.cincoMemo
        }
    ]

    return (
        <Memorama 
            datos={ datos }
            titulo='Memorama "Amor Propio"'
            enlace="/ninos/lavado-manos/opciones"
            rutas={ rutasAmorPropio }
            id={ 13 }
        />
    )
}
