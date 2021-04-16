import React from 'react';
import { Link } from 'react-router-dom';
import { Channel, ChannelBlock, LongCard, Title, Text, TextContainer, ThumbnailImg } from './LongVideoCard.styles';
import { Avatar } from '../../atoms';

const LongVideoCard = ({ video }) => {

  return (
    <LongCard>
      <Link to={`/video/${video.id.videoId}`}> 
        <ThumbnailImg>
          <img src={video.snippet.thumbnails.medium.url} 
          alt={video.snippet.title}
          />
        </ThumbnailImg>
        <TextContainer>
          <Title>{video.snippet.title}</Title>
          <ChannelBlock>
            <Avatar />
            <Channel>{video.snippet.channelTitle}</Channel>
          </ChannelBlock>
          <Text>{video.snippet.description}</Text>
        </TextContainer>
      </Link>
    </LongCard>
  )
}

export default LongVideoCard;