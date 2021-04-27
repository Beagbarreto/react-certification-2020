import React from 'react';
import {
  Display, Hr, Video, TextSection, Title, Description
} from './VIdeoPlayer.styles';
import { useParams } from 'react-router';
import useStore from '../../providers/Theme';

const VideoPlayer = ({video}) => {
  console.log('VIDEOuoouoj', video)
  const { state, dispatch } = useStore();
  //const { videoId } = useParams();
    //let { id } = useParams();
    //const video = video[id];
  // const videoId = video ? video.match.params.id : 'XhX6HJMwDiI';
  // const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // const title = video ? video.snippet.title : 'Something cool';
  // const description = video ? video.snippet.Description :'is about to happen...';
  const videoSrc = `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`;
  const title = state.selectedVideo.snippet.title;
  const description = state.selectedVideo.snippet.Description;

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
