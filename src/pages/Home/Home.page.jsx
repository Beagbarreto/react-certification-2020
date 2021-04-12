import React, { useState, useEffect } from 'react';
// import config from '../../components/config';
import { VideoCard } from '../../components/molecules';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos.component';
// import VideoList from '../../components/VideoList';
import axiosService from '../../utils/axiosService';
import { Home, HomeTitle, VideoListSection } from './Home.styles.js';

const HomePage = () => {
  const [ defaultVideos, setDefaultVideos] = useState();
  // const [ query, setQuery ] = useState('');
  // const [ videos, setVideos ] = useState([]);
  // const [ currentPage, setCurrentPage ] = useState(1);
  // const [ totalPages, setTotalPages ] = useSate(3);

  const max = 9;

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
