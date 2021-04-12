import React from 'react';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';

export const VideoCard = (props) => (
  <CardContainer>
    <ThumbnailImg> 
      <img src={props.video.snippet.thumbnails.medium.url} />
    </ThumbnailImg>
    <TextContainer>
        <VideoTitle>{props.video.snippet.title}</VideoTitle>
    </TextContainer>

  </CardContainer>
);

export default VideoCard;
