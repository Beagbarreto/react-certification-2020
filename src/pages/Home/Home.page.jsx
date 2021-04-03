import React, { useState, useEffect } from 'react';
// import config from '../../components/config';
import { VideoCard } from '../../components/molecules';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos.component';
// import VideoList from '../../components/VideoList';
import { getPopularVideos } from '../../services';
import { Home, HomeTitle, VideoListSection } from './Home.styles.js';


const HomePage = () => {
  const [ defaultVideos, setDefaultVideos] = useState();
  // const [ query, setQuery ] = useState('');
  // const [ videos, setVideos ] = useState([]);
  // const [ currentPage, setCurrentPage ] = useState(1);
  // const [ totalPages, setTotalPages ] = useSate(3);
  const max = 9;

  const fetchInitial = async (max) => {
    //showLoader();
    try {
      const res = await getPopularVideos();
      const popVideos = await res.json();
      console.log('INITIAL VIDEOS:', popVideos);
      setDefaultVideos(popVideos);
    }
    catch(error) {
      throw error;
      console.error('Error: No videos to retrieve', error)
    }
    //hideLoader;
  };
  
  useEffect(()=> {
    fetchInitial()
  }, [])

  return (
    <>
      <Home>
        <HomeTitle>Hello, Hello, Hello!</HomeTitle>
        <YoutubeVideos />
        {/* <VideoListSection>{videoList}</VideoListSection> */}
      </Home>
    </>
  );
};

export default HomePage;
