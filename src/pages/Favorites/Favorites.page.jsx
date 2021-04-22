import React from 'react';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos.component';
import { Favs, Title } from './Favorites.styles.js';

const Favorites = () => {

  return (
    <>
      <Favs>
        <Title>HaLLeLoO!</Title>
        <p>Here are your favorite videos...</p>
      </Favs>
    </>
  );
};

export default Favorites;
