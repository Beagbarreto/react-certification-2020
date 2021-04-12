import React, { createContext, useContext, useReducer } from 'react';
import themeReducer from '../../store/Theme/ThemeReducer.jsx';
import {useLocalState} from '../../utils/hooks/localStorage';

const themes = {
  light: {
    font: 'black',
    bakcground: 'white',
  },
  dark: {
    font: 'white',
    background: 'black',
  }
};

const initState = {
  isDark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(themes.light);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(themeReducer, initState)
  // const [ state, setState ] = useLocalState(state);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, useTheme };
export default ThemeProvider;