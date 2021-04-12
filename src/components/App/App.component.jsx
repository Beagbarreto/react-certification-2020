import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import ThemeContext, { themes } from '../../providers/Theme';
import ThemeProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import MainHeader from '../Header';

// import { ThemeProvider } from 'styled-components';

function App() {

  return (
    
    <BrowserRouter>
      <ThemeProvider>
        <MainHeader />
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              // <Route exact path="/login">
              //   <LoginPage />
              // </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
