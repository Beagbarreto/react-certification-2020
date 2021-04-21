import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

import StoreProvider, { useStore } from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import LoaderContextProvider from '../../utils/hooks/loader';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import MainHeader from '../Header';

function App() {
  //let { id } = useParams();
  const [term, setTerm] = useState('wizeline');

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
                {/* <Route exact path="/favorites">
                  <Favorites />
                </Route> */}
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
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
