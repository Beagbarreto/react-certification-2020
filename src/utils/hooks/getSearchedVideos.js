import { useState, useEffect, useContext } from 'react';
import axiosService from '../axiosService';
import {LoaderContext} from './loader';

const getSearch = (query) => {
  const [videos, setVideos] = useState([]);
  const { hideLoader, showLoader } = useContext(LoaderContext);

  const fetchData = async (search) => {
    showLoader();
    try {
      const res = await axiosService.get(`/search`, {
        params: {
          type: 'video',
          q: 'wizeline',
        }
      })
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