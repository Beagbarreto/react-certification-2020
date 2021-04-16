import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';

export const VideoCard = ({ 
  video,
  onPress,
  isSmall = false,
}) => (
  <CardContainer
    width={isSmall ? '70%' : '290px'}
    height={isSmall ? 'fit-content' : '237'} 
    //onPress={ () => handleEntry(props.video)}
  >
    <Link to={`/video/${video.id.videoId}`}> 
      <ThumbnailImg> 
        <img src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title}
        />
      </ThumbnailImg>
      <TextContainer>
          <VideoTitle>{video.snippet.title}</VideoTitle>
      </TextContainer>
    </Link>
  </CardContainer>
);

export default VideoCard;
