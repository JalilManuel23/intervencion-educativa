import React from 'react';

import { Route } from "react-router-dom";
import { Ambitos } from '../components/adultos/amorPropio/amorProp/Ambitos';
import { DefinicionAmorProp } from '../components/adultos/amorPropio/amorProp/DefinicionAmorProp';
import { DescubreAmbitos } from '../components/adultos/amorPropio/amorProp/DescubreAmbitos';
import { Final } from '../components/adultos/amorPropio/amorProp/Final';
import { Importancia } from '../components/adultos/amorPropio/amorProp/Importancia';
import { Relacion } from '../components/adultos/amorPropio/amorProp/Relacion';
import { VideoImportancia } from '../components/adultos/amorPropio/amorProp/VideoImportancia';
import { OpcionesAmorPropio } from '../components/adultos/amorPropio/OpcionesAmorPropio';
import { PresentacionAmorPropio } from '../components/adultos/amorPropio/PresentacionAmorPropio';
import { ComoCuidar } from '../components/adultos/amorPropio/saludMental/ComoCuidar';
import { Definicion } from '../components/adultos/amorPropio/saludMental/Definicion';
import { Definicion2 } from '../components/adultos/amorPropio/saludMental/Definicion2';
import { VideoComoCuidar } from '../components/adultos/amorPropio/saludMental/VideoComoCuidar';
import { Introduccion } from '../components/adultos/introduccion/Introduccion';
import { Mapa } from '../components/adultos/introduccion/Mapa';

import { DiaLavadoManos } from '../components/adultos/lavadoManos/DiaLavadoManos'
import { ElementosNecesarios } from '../components/adultos/lavadoManos/ElementosNecesarios'
import { FinalIntroAdultos } from '../components/adultos/lavadoManos/FinalIntroAdultos'
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
            <Route exact path="/adultos/introduccion/mapa" component={ Mapa } />
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
            <Route exact path="/adultos/lavado-manos/introduccion/final-intro" component={ FinalIntroAdultos } />
            <Route exact path="/adultos/lavado-manos/lavado-social" component={ LavadoSocial } />
            <Route exact path="/adultos/lavado-manos/elementos-necesarios" component={ ElementosNecesarios } />
            <Route exact path="/adultos/lavado-manos/5-momentos-oms" component={ PresentacionVideo2 } />
            <Route exact path="/adultos/lavado-manos/videos/5-momentos-oms" component={ Video2 } />
            <Route exact path="/adultos/lavado-manos/tecnica-lavado" component={ PresentacionTecnicaLavado } />
            <Route exact path="/adultos/lavado-manos/videos/tecnica-lavado-manos" component={ VideoLavadoManos } />

            {/* Taller 2 de adultos */}
            <Route exact path="/adultos/amor-propio/presentacion" component={ PresentacionAmorPropio } />
            <Route exact path="/adultos/amor-propio/opciones" component={ OpcionesAmorPropio } />
            <Route exact path="/adultos/amor-propio/salud-mental/definicion" component={ Definicion } />
            <Route exact path="/adultos/amor-propio/salud-mental/definicion-pt2" component={ Definicion2 } />
            <Route exact path="/adultos/amor-propio/salud-mental/como-cuidar-salud-mental" component={ ComoCuidar } />
            <Route exact path="/adultos/amor-propio/salud-mental/videos/como-cuidar-salud-mental" component={ VideoComoCuidar } />

            <Route exact path="/adultos/amor-propio/definicion" component={ DefinicionAmorProp } />
            <Route exact path="/adultos/amor-propio/descubre-ambitos" component={ DescubreAmbitos } />
            <Route exact path="/adultos/amor-propio/ambitos" component={ Ambitos } />
            <Route exact path="/adultos/amor-propio/importancia" component={ Importancia } />
            <Route exact path="/adultos/amor-propio/relacion-covid19" component={ Relacion } />
            <Route exact path="/adultos/amor-propio/videos/importancia" component={ VideoImportancia } />
            <Route exact path="/adultos/amor-propio/final" component={ Final } />
            
        </>
    )
}
