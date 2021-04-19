import React, { useContext, useState, useReducer } from 'react';
import getSearch from '../../utils/hooks/getSearchedVideos';
import theReducer from './ThemeReducer';
import mock from '../../mockData/youtube-videos-mock.json';
import axiosService from '../../utils/axiosService';
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

const useStore = () => useContext(TheContext);

const StoreProvider = ({children}) => {
  //const [state, setState] = useState(initState)
  const [ state, dispatch ] = useReducer(theReducer, initState)

// useEffect(() => {
//   getSearch()
// }, [])

  return (
    <TheContext.Provider value={{state, dispatch}}>
      {children}
    </TheContext.Provider>
  )
}

export { useStore, themes };
export default StoreProvider;
export const Consumer = TheContext.Consumer;
