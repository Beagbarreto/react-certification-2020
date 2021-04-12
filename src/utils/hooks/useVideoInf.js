import { useState, useEffect } from 'react';
import getVideoInf from '../AxiosService';

const useVideoInf = () => {
  const [ title, setTitle ] = useState('');
  
  const fetchData = async (videoID) => {
    try {
      const response = await getVideoInf(videoID);
      const videoData = response;
      console.log('-----VIDEODATA:', data);
      setTitle(videoData.data.items[0].snippet)
    } catch (err) {
      console.log('HAS ERROR 123:', err);
      throw err;
    }
  };
  useEffect(() => {
    fetchData(videoID);
  })
};

export default useVideoInf;