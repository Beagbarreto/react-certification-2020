import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import StoreProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import SearchContextProvider from '../../providers/SearchContext';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import MainHeader from '../Header';
import Favorites from '../../pages/Favorites';
import Protected from '../Protected/Protected.component';

function App() {
  const history = useHistory();
  
  return (
    <StoreProvider>
      <BrowserRouter>
          <AuthProvider>
            <SearchContextProvider>
            <MainHeader />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route path="/:videoId">
                    <VideoPage />
                  </Route>
                  <Protected exact path="/favorites">
                    <Favorites />
                  </Protected>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </SearchContextProvider>
          </AuthProvider>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
