import React from 'react';
import { Redirect, Route, Switch as RouterSwitch } from 'react-router-dom';
import { AppNavbar } from '../widgets';
import { WelcomePage } from './index';

export const HomePage: React.FunctionComponent = () => {
    return (
        <AppNavbar title="Admin Dashboard">
            <RouterSwitch>
                <Route exact path="/app">
                    <Redirect to="/app/welcome" />
                </Route>
            </RouterSwitch>
            <Route path="/app/welcome" component={WelcomePage} />
        </AppNavbar>
    )
}