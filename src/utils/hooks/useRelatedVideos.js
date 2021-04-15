import {useState, useEffect, useContext} from 'react';
import axiosService from '../axiosService';
import {LoaderContext} from '../hooks/loader';

const useRelatedVideos = () => { 
  const [videos, setVideos] = useState([]);
  const { hideLoader, showLoader } = useContext(LoaderContext);
  const [vId]= useState('g5f5l0H371Q')

  const fetchData = async (videoId) => {
    // showLoader();
    try {
      const res = await axiosService.get('/search', {
        params: {
          type: 'video',
          relatedToVideoId: videoId,
        }
      })
      console.log('---RES RELATEDVIDEOS--:', res.data.items);
      setVideos(res.data.items)
      hideLoader();
    } catch(error) {
      console.log(error, 'Holy cheetos Batman! Error in related vids')
      error
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return [videos];
}

export default useRelatedVideos;
