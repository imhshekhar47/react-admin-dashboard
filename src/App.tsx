import React from 'react';
import { Redirect, Route, Switch as RouterSwitch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import { HomePage } from './components/pages';


const AppTheme = createMuiTheme({
})

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <RouterSwitch>
        <Route exact path="/">
          <Redirect to="/app" />
        </Route>

        <Route path="/app" component={HomePage} />
      </RouterSwitch>
    </ThemeProvider>
  );
}

export default App;
