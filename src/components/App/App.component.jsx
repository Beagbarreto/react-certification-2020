import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import ThemeContext, { themes } from '../../providers/Theme';
import ThemeProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import LoaderContextProvider from '../../utils/hooks/loader';
import StoreProvider from '../../utils/hooks/context';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Layout from '../Layout';
import MainHeader from '../Header';
import SearchPage from '../../pages/Search';

// import { ThemeProvider } from '...';

function App() {
  //const [search, setSearch] = useState('');

  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <LoaderContextProvider>
            <MainHeader />
            <AuthProvider>
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/search/:query">
                    {/* path="/:query" */}
                    <SearchPage />
                  </Route>
                  <Route path="/:videoId">
                    <VideoPage />
                  </Route>
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
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
