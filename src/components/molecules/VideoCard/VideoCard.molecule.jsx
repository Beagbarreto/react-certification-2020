import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';

export const VideoCard = ({ 
  video,
  onPress,
  isSmall = false,
}) => {

  const history = useHistory();

  return(
    <CardContainer
      width={isSmall ? '70%' : '290px'}
      height={isSmall ? 'fit-content' : '237'} 
      onClick={() => history.push({ pathname: `/${video.id.videoId}`, video })}
    >
      <Link to={`/VideoPage/${video.id.videoId}`}> 
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
}

export default VideoCard;
