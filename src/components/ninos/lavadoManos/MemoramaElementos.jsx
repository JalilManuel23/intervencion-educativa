import React from 'react'
import { Memorama } from '../../general/memorama/Memorama'
import imagenes from '../../../assets/images';

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
            enlace="/ninos/lavado-manos/5-momentos-oms"
        />
    )
}
