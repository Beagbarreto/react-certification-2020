import React, { useContext, useReducer } from 'react';
import theReducer from './ThemeReducer';
import { themes } from '../../utils/constants';


const initState = {
  theme: themes.light, 
  search: 'wizeline',
  history: '',
}

//initState = {
//   isDark: Storage.getItem('isDark') ? JSON.parse(storage.getItem('isDark')) : false 
// }

const TheContext = React.createContext({
  theme: themes.light,
  search: '',
  history: ''
});

// const useStoreContext = () => {
  const useStore = () => useContext(TheContext);
//   if(!useStore){
//     `Can't use "useStore" without a Provider!`
//   }
// }

const StoreProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(theReducer, initState)

  return (
    <TheContext.Provider value={{state, dispatch}}>
      {children}
    </TheContext.Provider>
  )
}

export { useStore, themes };
export default StoreProvider;
