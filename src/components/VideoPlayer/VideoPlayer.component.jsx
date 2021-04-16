import React from 'react';
import {
  Display, Hr, Video, TextSection, Title, Description
} from './VIdeoPlayer.styles';

const VideoPlayer = (props) => {
  const [ videos ] = useVideoID(videoId);
  const player = `https://www.youtube.com/embed/${videoId}`;
  // const player = `https://www.youtube.com/embed/XhX6HJMwDiI`;
  const title = 'something cool';
  const description = 'is about to happen';

  return (
    <Display >
      <Video src={player} allowFullScreen title='Video player' />
      <TextSection>
        <Title>
          {/* {videos.title} */}
          {title}</Title>
        <Hr />
        <Description>
          {/* {videos.description} */}
          {description}</Description>
      </TextSection>
    </Display>
  )
}

export default VideoPlayer;
