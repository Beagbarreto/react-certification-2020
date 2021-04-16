import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';

export const VideoCard = (
  props,
  onPress,
  isSmall = false,
) => (
  <CardContainer
    width={isSmall ? '70%' : '290px'}
    height={isSmall ? 'fit-content' : '237'} 
  >
    <Link to={`/video/${props.video.id.videoId}`}> 
      <ThumbnailImg> 
        <img src={props.video.snippet.thumbnails.medium.url} 
        alt={props.video.snippet.title}
        />
      </ThumbnailImg>
      <TextContainer>
          <VideoTitle>{props.video.snippet.title}</VideoTitle>
      </TextContainer>
    </Link>
  </CardContainer>
);

export default VideoCard;
