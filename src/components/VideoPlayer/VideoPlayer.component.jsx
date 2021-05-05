import React from 'react';
import {
  Display, Hr, Video, TextSection, Title, Description
} from './VIdeoPlayer.styles';
import { useParams } from 'react-router-dom';
import useStore from '../../providers/Theme';

const VideoPlayer = ({videos}) => {
  let { videoId } = useParams();
  console.log('WHAT IS VIDEO? ', videos)
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const title = videos ? videos.snippet.title : 'Something cool';
  const description = videos ? videos.snippet.Description :'is about to happen...';

  return (
    <Display >
      <Video
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
      />
      <TextSection>
        <Title>
          {title}</Title>
        <Hr />
        <Description>
          {description}
        </Description>
      </TextSection>
    </Display>
  )
}

export default VideoPlayer;
