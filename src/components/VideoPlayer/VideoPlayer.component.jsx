import React from 'react';
import {
  Display, Hr, Video, TextSection, Title, Description
} from './VIdeoPlayer.styles';
import { useParams } from 'react-router-dom';
import useStore from '../../providers/Theme';

const VideoPlayer = () => {
  // console.log('VIDEOuoouoj', props)
  // const { state, dispatch } = useStore();
  // const { videoId } = useParams();
  // const videoId = video ? video.match.params.id : 'XhX6HJMwDiI';
  let { videoId } = useParams();
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // const title = videoId ? videoId.snippet.title : 'Something cool';
  // const description = videoId ? videoId.snippet.Description :'is about to happen...';
  // const videoSrc = `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`;


  return (
    <Display >
      <Video
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
      />
      {/* <TextSection>
        <Title>
          {title}</Title>
        <Hr />
        <Description>
          {description}
        </Description>
      </TextSection> */}
    </Display>
  )
}

export default VideoPlayer;
