import React, { useContext } from 'react';
import ThemeContext, {themes} from '../../providers/Theme';
// import { ThemeContext, useTheme } from '../../providers/Theme';

import {Container} from './Layout.styles.js';



const Layout = ({ children }) => {
  // const {state} = useContext(context);

  const themes = useContext(ThemeContext);
  return (
  <Container className="container">{children}</Container>
  );
};

export default Layout;


// export const GlobalLayout = styled.global`
//   background: url(${(props) => props.bg}) no-repeat;
// `;
