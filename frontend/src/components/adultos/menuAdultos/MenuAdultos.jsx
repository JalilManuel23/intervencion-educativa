import React from 'react'
import { Menu } from '../../general/menu/Menu'
import { OpcionMenu } from '../../general/opcionMenu/OpcionMenu'

export const MenuAdultos = () => {
    return (
        <>
            <Menu />
            <div className="container my-5 animate__animated animate__fadeIn">

                <div className="row d-flex flex-column align-items-center animate__animated  animate__fadeInUp">
                    <OpcionMenu texto="Introducción: ¿Qué es el COVID-19?" color="#004aad" ruta="/adultos/introduccion" />

                    <OpcionMenu texto="Taller 1: Lavado de manos" color='#246cce' ruta="/adultos/lavado-manos/presentacion" />

                    <OpcionMenu texto="Taller 2: Amor Propio" color='#468fee' ruta='/adultos/amor-propio/presentacion' />
                </div>

            </div>
        </>
    )
}
