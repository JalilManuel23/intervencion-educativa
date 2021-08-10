import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Inicio } from './components/general/inicio/Inicio';

import { Memorama } from './components/general/memorama/Memorama';
import { QuizGame } from './components/general/quizGame/QuizGame';
import { PuzzleGame } from './components/general/puzzle/PuzzleGame'
import { AdultosRouter } from './routes/AdultosRouter';
import { NinosRouter } from './routes/NinosRouter';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Inicio } />

                <Route path="/adultos" component={ AdultosRouter } />
                <Route path="/ninos" component={ NinosRouter } />    

                {/* Rutas de prueba */}
                <Route exact path="/memorama" component={ Memorama } />
                <Route exact path="/quiz" component={ QuizGame } />
                <Route exact path="/puzzle" component={ PuzzleGame } />
            </Switch>
        </Router>
    )
}
