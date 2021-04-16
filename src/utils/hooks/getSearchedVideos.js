import { useState, useEffect, useContext } from 'react';
import axiosService from '../axiosService';
import {LoaderContext} from './loader';

const getSearch = (query) => {
  const [videos, setVideos] = useState([]);
  const { hideLoader, showLoader } = useContext(LoaderContext);
  const [ search, setSearch ] = useState('wizeline')

  // const fetchData = async (search) => {
  const fetchData = async () => {
    //const videoId = video.id.videoId;
    showLoader();
    try {
      const res = await axiosService.get(`/search`, {
        params: {
          type: 'video',
          q: search,
        }
      })
      console.log('---RES GET SEARCH---:', res.data.items)
      setVideos(res.data.items);
      hideLoader();
    } catch(error) {
        console.log(error, 'Could not retrieve videos')
        error
      }
    }

  useEffect(() => {
    fetchData(query);
  }, [query])

  return [videos];
};

export default getSearch;