import React from 'react';
import { something } from './VideoItem.styles';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(vide)}>
          <p>whatever</p>
        </div>
    )
};

export default VideoItem;