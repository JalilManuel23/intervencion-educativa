import React from 'react'
import { Link } from 'react-router-dom'

export const Mapa = () => {
    return (
        <div className="container"> 
            <div className="row mt-5">  
                    <div className="vh-100">
                        <div className="text-center mb-5 encabezado bg-primary">
                            <span className="display-6" >Distribución del COVID-19 alrededor del mundo</span>
                        </div>
                        <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="600px"></iframe>
                    </div>
            </div>
            <Link to="/adultos/introduccion/sintomas">Siguiente</Link>
        </div>
    )
}