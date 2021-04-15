import React, { useState, useEffect } from 'react';
// import config from '../../components/config';
import { VideoCard } from '../../components/molecules';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos.component';
import { Home, HomeTitle, VideoListSection } from './Home.styles.js';

const HomePage = () => {
  const [ defaultVideos, setDefaultVideos] = useState();
  // const [ query, setQuery ] = useState('');
  // const [ videos, setVideos ] = useState([])

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
