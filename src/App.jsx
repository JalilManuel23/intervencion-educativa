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

export const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" render={() => {
                    return <Inicio />
                }}>
                </Route>
                <Route exact path="/categoria" render={() => {
                    return <Categoria />
                }}>
                </Route>
                <Route exact path="/menu-adultos" render={() => {
                    return <MenuAdultos />
                }}>
                </Route>
                <Route exact path="/menu-ninos" render={() => {
                    return <MenuNinos />
                }}>
                </Route>
                <Route exact path="/introduccion-adultos" render={() => {
                    return <Introduccion />
                }}>
                </Route>
                <Route exact path="/introduccion-ninos" render={() => {
                    return <IntroduccionNinos />
                }}>
                </Route>
                <Route exact path="/introduccion-ninos2" render={() => {
                    return <IntroduccionParte2 />
                }}>
                </Route>
                <Route exact path="/sintomas-adultos" render={() => {
                    return <Sintomas tipo="adultos" color="#0249ac" />
                }}>
                </Route>
                <Route exact path="/sintomas-ninos" render={() => {
                    return <Sintomas tipo="ninos" color="#6fa1e6"  />
                }}>
                </Route>
            </Switch>
        </Router>
    )
}
