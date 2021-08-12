import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3'
import audioIntro from "../../../assets/sounds/historia.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const Historia = () => {
    return (
        <Presentacion3  
            titulo="Historia del lavado de manos"
            imagen={ imagenes.historia }
            imagen2={ imagenes.lavadoGif2 }
            imagen3={ imagenes.historia2 }
            parrafo="Gracias a que en el año de 1846, el médico Ignaz Semmelweis fundamentó que el lavado de manos entre el personal de salud era necesario, se disminuyó sorprendentemente la mortalidad de los pacientes y ahora en la sociedad, además de prevenir el contagio de otras enfermedades."
            enlace="/adultos/lavado-manos/introduccion/importancia"
            fuente1="https://lh3.googleusercontent.com/8eNMJcN5dS29nXY0J_VPJrimVdldw6ItHQWBgALXI-ZF7FbBkzOSWCPE3flbTVZN2oLW-w=s120"
            fuente2="https://lh3.googleusercontent.com/uJwWLgaJh2_okBmFRAz69wLGfCuCsZq1RkPBTXRihRgHjkou14ZjsEOdmvBfm4PPEdF3W3M=s113"
            fuente3="https://lh3.googleusercontent.com/aBhEYXLCQlLfurew1tIpN8JHPboRePwhgpB23_DsCLoeU6RgdkpvGCE1lANzKhFtKv3koDg=s85"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 2 }
        />
    )
}
