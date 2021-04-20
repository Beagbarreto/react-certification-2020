import React from 'react';
import { AvatarContainer, Image } from './Avatar.styles';

const Avatar = ({ 
  img = null,
  alt = null }) => {

  return (
    <>
      <AvatarContainer>
        {img && 
          <Image style={styles.img} source={img} alt={alt}/>
        }
      </AvatarContainer>
    </>
  );
};

export default Avatar;