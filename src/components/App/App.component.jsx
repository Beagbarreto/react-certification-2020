import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

// import TheContext, { themes } from '../../providers/Theme';
import StoreProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth';
import LoaderContextProvider from '../../utils/hooks/loader';
import HomePage from '../../pages/Home';
//import SearchPage from '../../pages/Search';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import MainHeader from '../Header';

// import { ThemeProvider } from '...';

function App() {
  //let { id } = useParams();
  //const [search, setSearch] = useState('');

  return (
    <StoreProvider>
      <BrowserRouter>
          <LoaderContextProvider>
            <MainHeader />
            {/* <Search
              handleSearch={getSearchedVideos}
            /> */}
            <AuthProvider>
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  {/* <Route path="/search/:query">
                    <SearchPage />
                  </Route> */}
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
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
