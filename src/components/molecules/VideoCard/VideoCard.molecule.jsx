import React from 'react';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';

export const VideoCard = (props) => (
  <CardContainer>
    <ThumbnailImg>
    <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />
    </ThumbnailImg>
    <TextContainer>
        <VideoTitle>{props.video.title}</VideoTitle>
    </TextContainer>

  </CardContainer>
);

export default VideoCard;
