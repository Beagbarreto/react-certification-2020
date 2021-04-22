import {useState, useEffect} from 'react';
import axiosService from '../services/axiosService';
import {LoaderContext} from '../hooks/loader';

const useFetchID = () => { 
  const [videos, setVideos] = useState([]);
  const { hideLoader, showLoader } = useContext(LoaderContext);

  const fetchData = async () => {
    showLoader();
    const videoId = video.id.videoId;
    try {
      const res = await axiosService.get('/videos', {
        params: {
          id: videoID
        }
      })
      console.log('---RES FROM FETCH ID--:', res);
      setVideoData(res.data.items)
      hideLoader();
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
