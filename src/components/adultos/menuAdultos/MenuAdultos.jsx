import React from 'react'
import { OpcionMenu } from '../../general/opcionMenu/OpcionMenu'

export const MenuAdultos = () => {
    return (
        <>
            <div className="container my-5">

                <div className="row d-flex flex-column align-items-center">
                    <OpcionMenu texto="Introducción: ¿Qué es el COVID-19?" color="#004aad" ruta="/introduccion-adultos" />

                    <OpcionMenu texto="Taller 1: Mi autoestima" color='#246cce' />

                    <OpcionMenu texto="Taller 2: Lavado de Manos" color='#468fee' />

                    <OpcionMenu texto="Taller 3: Higiene del Entorno" color='#6fa1e6' />
                </div>

            </div>
        </>
    )
}
