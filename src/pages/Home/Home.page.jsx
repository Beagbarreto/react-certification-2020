import React from 'react';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos.component';
import { Home, HomeTitle, VideoListSection } from './Home.styles.js';

const HomePage = () => {

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
