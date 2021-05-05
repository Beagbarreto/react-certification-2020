import {useState, useEffect, useContext} from 'react';
import axiosService from '../services/axiosService';
import mock from '../../mockData/youtube-videos-mock.json';

const useRelatedVideos = () => { 
  const [videos, setVideos] = useState([]);
  const [vId]= useState('g5f5l0H371Q')
  const [ currentVideo, setCurrentVideo ] = useState(null);

  const fetchData = async (videoId) => {
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
