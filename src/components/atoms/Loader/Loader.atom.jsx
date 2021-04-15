import React from 'react';
import {
  LoaderImg
} from './Loader.styles';

const Loader = () => {
  return(
    <LoaderImg>
      <img src='https://media.giphy.com/media/vwSZNNVeb6uxTTXwnT/source.gif' alt='Loading ...' />
    </LoaderImg>
  )
}

export default Loader;