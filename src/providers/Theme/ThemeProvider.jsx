import React, { useContext, useReducer } from 'react';
import theReducer from './ThemeReducer';
import { star, themes } from '../../utils/constants';

const initState = {
  theme: themes.light, 
  starChecked: star.light,
  favoriteVideos: [],
  history: [],
  selectedVideo: '',
}

const TheContext = React.createContext(null);

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

export { useStore, themes, TheContext };
export default StoreProvider;
