import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
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
