import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { Categoria } from './components/categoria/Categoria';
import { Inicio } from './components/inicio/Inicio';
import { MenuAdultos } from './components/menuAdultos/MenuAdultos';

export const App = () => {
    return (
        <Router>
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
            </Switch>
        </Router>
    )
}
