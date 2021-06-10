import React from 'react'
import { Menu } from '../menu/Menu';
import { OpcionMenu } from '../opcionMenu/OpcionMenu'

export const MenuAdultos = () => {
    return (
        <div>
            < Menu />
            <div className="container my-5">

                <div className="row d-flex flex-column align-items-center">
                    <OpcionMenu texto="Introducción: ¿Qué es el COVID-19?" color="azul1" />

                    <OpcionMenu texto="Taller 1: Mi autoestima" color='azul2' />

                    <OpcionMenu texto="Taller 2: Lavado de Manos" color='azul3' />

                    <OpcionMenu texto="Taller 3: Higiene del Entorno" color='azul4' />
                </div>

            </div>
        </div>
    )
}
