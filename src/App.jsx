import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Inicio } from './components/general/inicio/Inicio';
import { Introduccion } from './components/adultos/introduccion/Introduccion';
import { MenuAdultos } from './components/adultos/menuAdultos/MenuAdultos';
import { MenuNinos } from './components/ninos/menuNinos/MenuNinos';
import { Sintomas } from './components/adultos/sintomas/Sintomas';
import { IntroduccionNinos } from './components/ninos/introduccionNinos/IntroduccionNinos';
import { Menu } from './components/general/menu/Menu';
import { IntroduccionParte2 } from './components/ninos/introduccionNinos/IntroduccionParte2';
import { Memorama } from './components/general/memorama/Memorama';
import { QuizGame } from './components/general/quizGame/QuizGame';
import { PuzzleGame } from './components/general/puzzle/PuzzleGame'
import { LavadoManos } from './components/adultos/lavadoManos/LavadoManos';
import { OpcionesLavadoManos } from './components/adultos/lavadoManos/OpcionesLavadoManos';
import { IntroduccionLavadoManos } from './components/adultos/lavadoManos/IntroduccionLavadoManos';
import { Historia } from './components/adultos/lavadoManos/Historia';
import { PresentacionVideo1 } from './components/adultos/lavadoManos/PresentacionVideo1';
import { Video1 } from './components/adultos/lavadoManos/Video1';
import { DiaLavadoManos } from './components/adultos/lavadoManos/DiaLavadoManos';

export const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={ Inicio } />
                <Route exact path="/menu-adultos" component={ MenuAdultos } />
                <Route exact path="/menu-ninos" component={ MenuNinos } />
                <Route exact path="/introduccion-adultos" component={ Introduccion } />
                <Route exact path="/introduccion-ninos" component={ IntroduccionNinos } />
                <Route exact path="/introduccion-ninos2" component={ IntroduccionParte2 } />

                {/* Taller 1 de adultos */}
                <Route exact path="/adultos/lavado-manos/presentacion" component={ LavadoManos } />
                <Route exact path="/adultos/lavado-manos/opciones" component={ OpcionesLavadoManos } />
                <Route exact path="/adultos/lavado-manos/introduccion" component={ IntroduccionLavadoManos } />
                <Route exact path="/adultos/lavado-manos/historia" component={ Historia } />
                <Route exact path="/adultos/lavado-manos/presentacion-video1" component={ PresentacionVideo1 } />
                <Route exact path="/adultos/lavado-manos/video1" component={ Video1 } />
                <Route exact path="/adultos/lavado-manos/dia-lavado-manos" component={ DiaLavadoManos } />


                <Route exact path="/sintomas-adultos" render={() => {
                    return <Sintomas tipo="adultos" color="#0249ac" />
                }}>
                </Route>
                <Route exact path="/sintomas-ninos" render={() => {
                    return <Sintomas tipo="ninos" color="#6fa1e6"  />
                }}>
                </Route>
                {/* Rutas de prueba */}
                <Route exact path="/memorama" component={ Memorama } />
                <Route exact path="/quiz" component={ QuizGame } />
                <Route exact path="/puzzle" component={ PuzzleGame } />
            </Switch>
        </Router>
    )
}
