import React from 'react';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';
import { Link } from 'react-router-dom';

export const VideoCard = (
  props,
  onPress,
  isSmall = false,
) => (
  <CardContainer
    width={isSmall ? '70%' : '290px'}
    height={isSmall ? 'fit-content' : '237'} 
  >
    <Link to={`/VideoPage`}> 
    {/* `/VideoPage/${video.videoId}` */}
    <ThumbnailImg> 
      <img src={props.video.snippet.thumbnails.medium.url} />
    </ThumbnailImg>
    <TextContainer>
        <VideoTitle>{props.video.snippet.title}</VideoTitle>
    </TextContainer>
</Link>
  </CardContainer>
);

export default VideoCard;
