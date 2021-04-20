import {useState, useEffect, useContext} from 'react';
import axiosService from '../axiosService';
import {LoaderContext} from '../hooks/loader';
import mock from '../../mockData/youtube-videos-mock.json';

const useRelatedVideos = () => { 
  const [videos, setVideos] = useState([]);
  const { hideLoader, showLoader } = useContext(LoaderContext);
  const [vId]= useState('g5f5l0H371Q')
  const [ currentVideo, setCurrentVideo ] = useState(null);

  const fetchData = async (videoId) => {
    showLoader();
    let res;
    try {
      if (process.env.NODE_ENV === 'development') {
        res = {
          data: mock,
        }
      } else {
        res = await axiosService.get('/search', {
        params: {
          type: 'video',
          relatedToVideoId: videoId,
        }
      })
    }
      console.log('---RES RELATEDVIDEOS--:', res.data.items);
      setVideos(res.data.items)
      setCurrentVideo(res.data.items[0])
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
