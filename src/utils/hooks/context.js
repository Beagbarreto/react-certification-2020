import React, { useEffect, useContext, useState } from 'react';
import axiosService from '../../utils/axiosService';
import config from '../../components/config';

const Context = React.createContext();

const StoreProvider = ({children}) => {
  const [video, setVideo] = useState([]);
  // const [currentChannelId, setCurrentChannelId] = useState(config.wizeline_uploads);

  // const useSearch = async () => {
  //   try {
  //     const res = await axiosService.get(`/playlistItems`, {
  //       params: {
  //         part : 'snippet',
  //         playlistId: currentChannelId,
  //       }
  //     })
  //     console.log(res);
  //     setVideo(res.data.items);
  //     console.log('-------VALUE2 SETTING------: ', res.data.items);
  //   } catch(error) {
  //       console.log(error, 'error from context')
  //       error
  //   }
  // }

  // useEffect(() => {
  //   useSearch()
  // }, [currentChannelId])

  return(
    <Context.Provider value={[video, setVideo]}>
      {children}
    </Context.Provider>
  )
};

export const Consumer = Context.Consumer;
export default StoreProvider;