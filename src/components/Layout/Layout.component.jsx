import React, { useContext } from 'react';
import TheContext, { useStore } from '../../providers/Theme';
// import { ThemeContext, useTheme } from '../../providers/Theme';

import {Container} from './Layout.styles.js';

const Layout = ({ children }) => {
  const {state} = useStore();

  const themes = useContext(TheContext);

  return (
  <Container
    background={state.theme.background}
    className="container">{children}
  </Container>
  );
};

export default Layout;


// export const GlobalLayout = styled.global`
//   background: url(${(props) => props.bg}) no-repeat;
// `;
