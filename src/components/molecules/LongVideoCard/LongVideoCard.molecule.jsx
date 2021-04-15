import React from 'react';
import { Channel, LongCard, Title, Text, TextContainer, ThumbnailImg } from './LongVideoCard.styles';

const LongVideoCard = ({image, channel, title, description}) => {

  return (
    <LongCard>
      <ThumbnailImg
        alt={image}
        src={image}
      />
      <TextContainer>
        <Title>{title}</Title>
        <Channel>{channel}</Channel>
        <Text>{description}</Text>
      </TextContainer>
    </LongCard>
  )
}

export default LongVideoCard;