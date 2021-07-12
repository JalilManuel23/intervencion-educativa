import React from 'react';

import { Route } from "react-router-dom";
import { Introduccion } from '../components/adultos/introduccion/Introduccion';

import { DiaLavadoManos } from '../components/adultos/lavadoManos/DiaLavadoManos'
import { ElementosNecesarios } from '../components/adultos/lavadoManos/ElementosNecesarios'
import { FinalIntro } from '../components/adultos/lavadoManos/FinalIntro'
import { Historia } from '../components/adultos/lavadoManos/Historia'
import { IntroduccionLavadoManos } from '../components/adultos/lavadoManos/IntroduccionLavadoManos'
import { LavadoManos } from '../components/adultos/lavadoManos/LavadoManos'
import { LavadoSocial } from '../components/adultos/lavadoManos/LavadoSocial'
import { OpcionesLavadoManos } from '../components/adultos/lavadoManos/OpcionesLavadoManos'
import { PresentacionTecnicaLavado } from '../components/adultos/lavadoManos/PresentacionTecnicaLavado'
import { PresentacionVideo1 } from '../components/adultos/lavadoManos/PresentacionVideo1'
import { PresentacionVideo2 } from '../components/adultos/lavadoManos/PresentacionVideo2'
import { TiposLavado } from '../components/adultos/lavadoManos/TiposLavado'
import { Video1 } from '../components/adultos/lavadoManos/Video1'
import { Video2 } from '../components/adultos/lavadoManos/Video2'
import { VideoLavadoManos } from '../components/adultos/lavadoManos/VideoLavadoManos'
import { MenuAdultos } from '../components/adultos/menuAdultos/MenuAdultos';
import { Sintomas } from '../components/adultos/sintomas/Sintomas';

export const AdultosRouter = () => {
    return (
        <>
            {/*--------------------------ADULTOS--------------------------*/}

            <Route exact path="/adultos/menu" component={ MenuAdultos } />

            {/* Introducción Adultos */}
            <Route exact path="/adultos/introduccion" component={ Introduccion } />
            <Route exact path="/adultos/introduccion/sintomas" render={() => {
                return <Sintomas tipo="adultos" color="#0249ac" />
            }}>
            </Route>

            {/* Taller 1 de adultos */}
            <Route exact path="/adultos/lavado-manos/presentacion" component={ LavadoManos } />
            <Route exact path="/adultos/lavado-manos/opciones" component={ OpcionesLavadoManos } />
            <Route exact path="/adultos/lavado-manos/introduccion" component={ IntroduccionLavadoManos } />
            <Route exact path="/adultos/lavado-manos/introduccion/historia" component={ Historia } />
            <Route exact path="/adultos/lavado-manos/introduccion/importancia" component={ PresentacionVideo1 } />
            <Route exact path="/adultos/lavado-manos/videos/importancia-lavado-manos" component={ Video1 } />
            <Route exact path="/adultos/lavado-manos/introduccion/dia-lavado-manos" component={ DiaLavadoManos } />
            <Route exact path="/adultos/lavado-manos/introduccion/tipos-lavado" component={ TiposLavado } />
            <Route exact path="/adultos/lavado-manos/introduccion/final-intro" component={ FinalIntro } />
            <Route exact path="/adultos/lavado-manos/lavado-social" component={ LavadoSocial } />
            <Route exact path="/adultos/lavado-manos/elementos-necesarios" component={ ElementosNecesarios } />
            <Route exact path="/adultos/lavado-manos/5-momentos-oms" component={ PresentacionVideo2 } />
            <Route exact path="/adultos/lavado-manos/videos/5-momentos-oms" component={ Video2 } />
            <Route exact path="/adultos/lavado-manos/tecnica-lavado" component={ PresentacionTecnicaLavado } />
            <Route exact path="/adultos/lavado-manos/videos/tecnica-lavado-manos" component={ VideoLavadoManos } />
        </>
    )
}
