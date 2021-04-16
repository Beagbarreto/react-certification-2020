import React from 'react';
import {
  Display, Hr, Video, TextSection, Title, Description
} from './VIdeoPlayer.styles';

const VideoPlayer = ({video}) => {
  console.log('VIDEOuoouoj', video)
  //const videoId = 'XhX6HJMwDiI';
  const player = `https://www.youtube.com/embed/${video}`;
  const title = 'something cool';
  const description = 'is about to happen';

  return (
    <Display >
      <Video src={player} allowFullScreen title='Video player'/>
      <TextSection>
        <Title>
          {/* {video.snippet.title} */}
          {title}</Title>
        <Hr />
        <Description>
          {/* {video.snippet.description} */}
          {description}</Description>
      </TextSection>
    </Display>
  )
}

export default VideoPlayer;
