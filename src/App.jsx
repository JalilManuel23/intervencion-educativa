import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { Categoria } from './components/general/categoria/Categoria';
import { Inicio } from './components/general/inicio/Inicio';
import { Introduccion } from './components/adultos/introduccion/Introduccion';
import { MenuAdultos } from './components/adultos/menuAdultos/MenuAdultos';
import { MenuNinos } from './components/ninos/menuNinos/MenuNinos';
import { Sintomas } from './components/adultos/sintomas/Sintomas';
import { IntroduccionNinos } from './components/ninos/introduccionNinos/IntroduccionNinos';
import { Menu } from './components/general/menu/Menu';
import { IntroduccionParte2 } from './components/ninos/introduccionNinos/IntroduccionParte2';
import { Memorama } from './components/general/memorama/Memorama';

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
                <Route exact path="/sintomas-adultos" render={() => {
                    return <Sintomas tipo="adultos" color="#0249ac" />
                }}>
                </Route>
                <Route exact path="/sintomas-ninos" render={() => {
                    return <Sintomas tipo="ninos" color="#6fa1e6"  />
                }}>
                </Route>
                {/* Ruta de prueba */}
                <Route exact path="/memorama" component={<Memorama  />} />
            </Switch>
        </Router>
    )
}
