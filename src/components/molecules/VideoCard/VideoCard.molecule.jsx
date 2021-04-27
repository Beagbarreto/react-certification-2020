import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CardContainer, TextContainer, ThumbnailImg, VideoTitle } from './VideoCard.styles';
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { SELECTED_VIDEO } from '../../../utils/constants';

export const VideoCard = ({ 
  video,
  onPress,
  isSmall = false,
}) => {

  const { dispatch } = useStore();
  const history = useHistory();

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
      {/* </Link> */}
    </CardContainer>
);
}

export default VideoCard;
