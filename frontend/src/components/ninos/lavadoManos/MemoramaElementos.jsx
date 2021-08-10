import React from 'react'
import { Memorama } from '../../general/memorama/Memorama'
import imagenes from '../../../assets/images';
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const MemoramaElementos = () => {
    let datos =  [
        {
            "data": "Agua",
            "img": imagenes.aguaMemo
        },
        {
            "data": "Jabón",
            "img": imagenes.jabonMemo
        },
        {
            "data": "Toalla",
            "img": imagenes.toalla
        },
        {
            "data": "Gel",
            "img": imagenes.gelAnti
        },
        {
            "data": "Higiene",
            "img": imagenes.lavadoDeManosDos
        }
    ]

    return (
        <Memorama 
            datos={ datos }
            titulo="Memorama Lavado  De Manos"
            enlace="/ninos/lavado-manos/opciones"
            rutas={ rutasLavadoNinos }
            id={ 13 }
        />
    )
}
