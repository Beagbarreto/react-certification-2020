import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle, VideoDescription } from './VideoCard.styles';
import { useAuth } from '../../../providers/Auth';
import { StarIcon } from '../../atoms';

export const VideoCard = ({ 
  video,
  onPress,
  isSmall = false,
}) => {
  
  const { authenticated } = useAuth();
  const str = video.snippet.description;
  const length = str.length
  const description =  length > 70 ? str.slice(0, 69) : str;
  const vid = video.id.videoId;

  // function clickedCard() {
  //   dispatch({
  //     type: SELECTED_VIDEO,
  //     payload: { selectedVideo: video.id.videoId }
  //   });
  //   history.push(`/video${window.location.pathname}`)
  // }

  return(
    <CardContainer
      width={isSmall ? '70%' : '290px'}
      height={isSmall ? 'fit-content' : '237'} 
    >
      <Link to={`/video/${vid}`}> 
        <ThumbnailImg> 
          <img src={video.snippet.thumbnails.medium.url} 
          alt={video.snippet.title}
          />
        </ThumbnailImg>
        <TextContainer>
          <VideoTitle>{video.snippet.title}</VideoTitle>
        </TextContainer>
        <TextContainer>
          <VideoDescription>{description} ...</VideoDescription>
        </TextContainer>
        </Link>
        {authenticated &&
        <StarIcon
          video={video}
        />
        }
    </CardContainer>
);
}

export default VideoCard;
