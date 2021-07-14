import React from 'react';
import { Route } from 'react-router-dom';
import { Sintomas } from '../components/adultos/sintomas/Sintomas';
import { IntroduccionNinos } from '../components/ninos/introduccionNinos/IntroduccionNinos';
import { IntroduccionParte2 } from '../components/ninos/introduccionNinos/IntroduccionParte2';
import { Bienvenida } from '../components/ninos/lavadoManos/Bienvenida';
import { DiaLavado } from '../components/ninos/lavadoManos/DiaLavado';
import { ElementosNecesarios } from '../components/ninos/lavadoManos/ElementosNecesarios';
import { FinalIntroNinos } from '../components/ninos/lavadoManos/FinalIntroNinos';
import { Historia } from '../components/ninos/lavadoManos/Historia';
import { Importancia } from '../components/ninos/lavadoManos/Importancia';
import { Introduccion } from '../components/ninos/lavadoManos/Introduccion';
import { LavadoSocial } from '../components/ninos/lavadoManos/LavadoSocial';
import { MemoramaElementos } from '../components/ninos/lavadoManos/MemoramaElementos';
import { Opciones } from '../components/ninos/lavadoManos/Opciones';
import { PreparateJugar } from '../components/ninos/lavadoManos/PreparateJugar';
import { PresentacionVideoMomentos } from '../components/ninos/lavadoManos/PresentacionVideoMomentos';
import { TiposLavado } from '../components/ninos/lavadoManos/TiposLavado';
import { VideoDiaLavado } from '../components/ninos/lavadoManos/VideoDiaLavado';
import { VideoImportancia } from '../components/ninos/lavadoManos/VideoImportancia';
import { VideoMomentos } from '../components/ninos/lavadoManos/VideoMomentos';
import { MenuNinos } from '../components/ninos/menuNinos/MenuNinos';
import { Videos } from '../components/ninos/lavadoManos/Videos';

export const NinosRouter = () => {
    return (
        <>
            {/* --------------------------NIÑOS-------------------------- */}

            <Route exact path="/ninos/menu" component={ MenuNinos } />

            {/* Introducción niños */}
            <Route exact path="/ninos/introduccion" component={ IntroduccionNinos } />
            <Route exact path="/ninos/introduccion/pt2" component={ IntroduccionParte2 } />
            <Route exact path="/ninos/introduccion/sintomas" render={() => {
                return <Sintomas tipo="ninos" color="#6fa1e6"  />
            }}></Route>

            {/* Lavado de manos */}
            <Route exact path="/ninos/lavado-manos/bienvenida" component={ Bienvenida } />
            <Route exact path="/ninos/lavado-manos/opciones" component={ Opciones } />
            <Route exact path="/ninos/lavado-manos/5-momentos-oms" component={ PresentacionVideoMomentos } />
            <Route exact path="/ninos/lavado-manos/videos/5-momentos-oms" component={ VideoMomentos } />
            <Route exact path="/ninos/lavado-manos/introduccion" component={ Introduccion } />
            <Route exact path="/ninos/lavado-manos/introduccion/historia" component={ Historia } />
            <Route exact path="/ninos/lavado-manos/introduccion/importancia" component={ Importancia } />
            <Route exact path="/ninos/lavado-manos/videos/importancia-lavado-manos" component={ VideoImportancia } />
            <Route exact path="/ninos/lavado-manos/introduccion/dia-lavado-manos" component={ DiaLavado } />
            <Route exact path="/ninos/lavado-manos/videos/dia-lavado-manos" component={ VideoDiaLavado } />
            <Route exact path="/ninos/lavado-manos/introduccion/tipos-lavado" component={ TiposLavado } />
            <Route exact path="/ninos/lavado-manos/introduccion/final-intro" component={ FinalIntroNinos } />
            <Route exact path="/ninos/lavado-manos/lavado-social" component={ LavadoSocial } />
            <Route exact path="/ninos/lavado-manos/elementos-necesarios" component={ ElementosNecesarios } />
            <Route exact path="/ninos/lavado-manos/preparate-jugar" component={ PreparateJugar } />
            <Route exact path="/ninos/lavado-manos/memorama-elementos" component={ MemoramaElementos } />
            <Route exact path="/ninos/lavado-manos/5-momentos-oms" component={ MemoramaElementos } />
            <Route exact path="/ninos/lavado-manos/videos" component={ Videos } />
        </>
    )
}
