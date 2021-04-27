import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle, VideoDescription } from './VideoCard.styles';
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { useAuth } from '../../../providers/Auth';
import { SELECTED_VIDEO } from '../../../utils/constants';
import { StarIcon } from '../../atoms';

export const VideoCard = ({ 
  video,
  onPress,
  isSmall = false,
}) => {

  const { dispatch } = useStore();
  const history = useHistory();
  const { authenticated } = useAuth();

  function clickedCard() {
    dispatch({
      type: SELECTED_VIDEO,
      payload: { selectedVideo: video.id.videoId }
    });
    history.push(`/video${window.location.pathname}`)
  }

  return(
    <CardContainer
      width={isSmall ? '70%' : '290px'}
      height={isSmall ? 'fit-content' : '237'} 
      // onClick={() => history.push({ pathname: `/${video.id.videoId}`, video })}
      onClick={clickedCard}
    >
      {/* <Link to={`/VideoPage/${video.id.videoId}`}>  */}
        <ThumbnailImg> 
          <img src={video.snippet.thumbnails.medium.url} 
          alt={video.snippet.title}
          />
        </ThumbnailImg>
        <TextContainer>
          <VideoTitle>{video.snippet.title}</VideoTitle>
        </TextContainer>
        <TextContainer>
          <VideoDescription>{video.snippet.description}</VideoDescription>
        </TextContainer>
        {authenticated &&
        <StarIcon />
        }
      {/* </Link> */}
    </CardContainer>
);
}

export default VideoCard;
