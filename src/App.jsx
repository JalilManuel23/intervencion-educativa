import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Inicio } from './components/general/inicio/Inicio';
import { MenuNinos } from './components/ninos/menuNinos/MenuNinos';
import { Sintomas } from './components/adultos/sintomas/Sintomas';
import { IntroduccionNinos } from './components/ninos/introduccionNinos/IntroduccionNinos';
import { Menu } from './components/general/menu/Menu';
import { IntroduccionParte2 } from './components/ninos/introduccionNinos/IntroduccionParte2';
import { Memorama } from './components/general/memorama/Memorama';
import { QuizGame } from './components/general/quizGame/QuizGame';
import { PuzzleGame } from './components/general/puzzle/PuzzleGame'
import { AdultosRouter } from './routes/AdultosRouter';

export const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={ Inicio } />

                {/* Adultos */}
                <Route path="/adultos" component={ AdultosRouter } />

                {/* --------------------------NIÑOS-------------------------- */}

                <Route exact path="/ninos/menu" component={ MenuNinos } />

                {/* Introducción niños */}
                <Route exact path="/ninos/introduccion" component={ IntroduccionNinos } />
                <Route exact path="/ninos/introduccion/pt2" component={ IntroduccionParte2 } />
                <Route exact path="/ninos/introduccion/sintomas" render={() => {
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
