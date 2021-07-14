import React from 'react'
import { OpcionMenu } from '../../general/opcionMenu/OpcionMenu'

export const MenuNinos = () => {
    return (
        <div className="container my-5 animate__animated animate__fadeIn">

            <div className="row d-flex flex-column align-items-center">
                <OpcionMenu texto="Introducción: ¿Qué es el COVID-19?" color="#ff87ab" tipoOpcion="ninos" ruta="/ninos/introduccion" />

                <OpcionMenu texto="Taller 1: Lavado de manos" color='#ffb053' tipoOpcion="ninos" ruta="/ninos/lavado-manos/bienvenida" />

                <OpcionMenu texto="Taller 2" color='#2ae1e7' tipoOpcion="ninos" />

                <OpcionMenu texto="Taller 3" color='#7bff5e' tipoOpcion="ninos" />
            </div>

        </div>
    )
}
