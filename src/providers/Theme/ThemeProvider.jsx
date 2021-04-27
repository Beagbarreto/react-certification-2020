import React, { useContext, useReducer } from 'react';
import theReducer from './ThemeReducer';
import { themes } from '../../utils/constants';
import getSearch from '../../utils/hooks/getSearchedVideos';

const initState = {
  theme: themes.light, 
  videos: [],
  selectedVideo: '',
  // favoriteVideos: {}
}

const TheContext = React.createContext({
  theme: themes.light,
  selectedVideo: '',
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

export { useStore, themes, TheContext };
export default StoreProvider;
