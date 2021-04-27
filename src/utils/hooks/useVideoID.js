import {useState, useEffect} from 'react';
import axiosService from '../services/axiosService';

const useFetchID = () => { 
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const videoId = video.id.videoId;
    try {
      const res = await axiosService.get('/videos', {
        params: {
          id: videoID
        }
      })
      console.log('---RES FROM FETCH ID--:', res);
      setVideoData(res.data.items)
    } catch(error) {
      console.log(error, 'Could not retrieve details')
      error
    }
  }

  useEffect(()=>{
    fetchData(videoID)
  }, [])

  return [videoData];
}

export default useFetchID;
