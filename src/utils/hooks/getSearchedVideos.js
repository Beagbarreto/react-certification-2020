// import { useState, useEffect, useContext } from 'react';
// import axiosService from '../services/axiosService';
// import {LoaderContext} from './loader';
// import mock from '../../mockData/youtube-videos-mock.json';

// const getSearch = (query) => {
//   const [videos, setVideos] = useState([]);
//   const { hideLoader, showLoader } = useContext(LoaderContext);
//   const [ search, setSearch ] = useState('wizeline')
//   const [ currentVideo, setCurrentVideo ] = useState(null);

//   // const fetchData = async (search) => {
//   const fetchData = async () => {
//     showLoader();
//     let res;
//     try {
//       if (process.env.NODE_ENV === 'development') {
//         res = {
//           data: mock,
//         }
//       } else {
//         res = await axiosService.get(`/search`, {
//         params: {
//           type: 'video',
//           q: search,
//           videoEmbeddable: 'true',
//         }
//       })
//     }
//       console.log('---RES=SEARCH---:', res.data.items)
//       setVideos(res.data.items);
//       setCurrentVideo(res.data.items[0])
//       hideLoader();
//     } catch(error) {
//         console.log(error, 'Could not retrieve videos')
//         error
//       }
//     }

//   useEffect(() => {
//     fetchData(query);
//   }, [query])

//   return [videos];
// };

// export default getSearch;

import { useState, useEffect, useContext } from 'react';
import axiosService from '../services/axiosService';
import mock from '../../mockData/youtube-videos-mock.json';
import { SEARCH_VIDEOS } from '../constants';

const getSearch = () => {
  const [videos, setVideos] = useState([]);
  const [ currentVideo, setCurrentVideo ] = useState('wizeline');

  // const fetchData = async (search) => {
  const fetchData = async () => {
    let res;
    try {
      if (process.env.NODE_ENV === 'development') {
        res = {
          data: mock,
        }
      } else {
        res = await axiosService.get(`/search`, {
        params: {
          type: 'video',
          q: currentVideo,
          videoEmbeddable: 'true',
        }
      })
    }
      console.log('---RES=SEARCH---:', res.data.items)
      setVideos(res.data.items);
      dispatch({ 
        type: SEARCH_VIDEOS,
        payload: res.data.items
      })
    } catch(error) {
        console.log(error, 'Could not retrieve videos')
        error
      }
    }

  useEffect(() => {
    fetchData();
  }, [])

  return [videos];
};

export default getSearch;
