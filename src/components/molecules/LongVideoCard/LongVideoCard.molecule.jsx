import React from 'react';
import { Link } from 'react-router-dom';
import { Channel, ChannelBlock, LongCard, Title, Text, TextContainer, ThumbnailImg } from './LongVideoCard.styles';
import { Avatar } from '../../atoms';

const LongVideoCard = (props) => {

  return (
    <LongCard>
      <Link to={`/video/${props.video.id.videoId}`}> 
        <ThumbnailImg>
          <img src={props.video.snippet.thumbnails.medium.url} 
          alt={props.video.snippet.title}
          />
        </ThumbnailImg>
        <TextContainer>
          <Title>{props.video.snippet.title}Title</Title>
          <ChannelBlock>
            <Avatar />
            <Channel>{props.video.snippet.channelTitle}Channel</Channel>
          </ChannelBlock>
          <Text>{props.video.snippet.description}description</Text>
        </TextContainer>
      </Link>
    </LongCard>
  )
}

export default LongVideoCard;