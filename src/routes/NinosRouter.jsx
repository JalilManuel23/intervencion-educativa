import React from 'react';
import { Route } from 'react-router-dom';
import { Sintomas } from '../components/adultos/sintomas/Sintomas';
import { IntroduccionNinos } from '../components/ninos/introduccionNinos/IntroduccionNinos';
import { IntroduccionParte2 } from '../components/ninos/introduccionNinos/IntroduccionParte2';
import { Bienvenida } from '../components/ninos/lavadoManos/Bienvenida';
import { Opciones } from '../components/ninos/lavadoManos/Opciones';
import { PresentacionVideoMomentos } from '../components/ninos/lavadoManos/PresentacionVideoMomentos';
import { VideoMomentos } from '../components/ninos/lavadoManos/VideoMomentos';
import { MenuNinos } from '../components/ninos/menuNinos/MenuNinos';

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
            <Route exact path="/ninos/lavado-manos/introduccion" component={ Bienvenida } />
            <Route exact path="/ninos/lavado-manos/opciones" component={ Opciones } />
            <Route exact path="/ninos/lavado-manos/5-momentos-oms" component={ PresentacionVideoMomentos } />
            <Route exact path="/ninos/lavado-manos/videos/5-momentos-oms" component={ VideoMomentos } />

        </>
    )
}
