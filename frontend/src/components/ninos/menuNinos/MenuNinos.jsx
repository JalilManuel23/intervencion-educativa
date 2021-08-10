import React from 'react'
import { Menu } from '../../general/menu/Menu'
import { OpcionMenu } from '../../general/opcionMenu/OpcionMenu'

export const MenuNinos = () => {
    return (
        <>
            <Menu />
            <div className="container my-5 animate__animated animate__fadeIn">

                <div className="row d-flex flex-column align-items-center animate__animated animate__fadeInLeft">
                    <OpcionMenu texto="Introducción: ¿Qué es el COVID-19?" color="#ff87ab" tipoOpcion="ninos" ruta="/ninos/introduccion" />

                    <OpcionMenu texto="Taller 1: Lavado de manos" color='#ffb053' tipoOpcion="ninos" ruta="/ninos/lavado-manos/bienvenida" />

                    <OpcionMenu texto="Taller 2: Amor Propio" color='#2ae1e7' tipoOpcion="ninos"  ruta="/ninos/amor-propio/presentacion" />
                </div>

            </div>
        </>
    )
}
