import React, { createContext, useState, useEffect } from 'react';
import { Loader } from '../../components/atoms';
import styled from 'styled-components';

const LoaderContext = createContext();

const LoaderContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  
  const hideLoader = () => setLoading(false);
  const showLoader = () => setLoading(true);

  return (
    <LoaderContext.Provider value={{hideLoader, showLoader}}>
      {children}
      { loading &&
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      }
    </LoaderContext.Provider>
  )
};

export { LoaderContext };
export default LoaderContextProvider;

export const LoaderContainer = styled.div`
  postition: absolute;
  align-items: center;
  justify-content: center;
`;
