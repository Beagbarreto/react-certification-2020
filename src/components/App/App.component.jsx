import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import StoreProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import LoaderContextProvider from '../../utils/hooks/loader';
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
        <LoaderContextProvider>
          <AuthProvider>
          <MainHeader />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                {/* <Route path="/search/:query">
                  <SearchPage />
                </Route> */}
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
          </AuthProvider>
        </LoaderContextProvider>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
