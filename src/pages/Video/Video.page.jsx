import React, { useContext, useEffect, useState } from 'react';
import {
  PageContainer,
  VideoList,
  RecommendedVideos,
  Display,
  Hr,
  Video,
  TextSection,
  Title,
  Description
} from './Video.styles';
import useStore from '../../providers/Theme';
import { SearchContext } from '../../providers/SearchContext';
import searchingVideos from '../../utils/services/videoServices';
import useRelatedVideos from '../../utils/hooks/useRelatedVideos';
import { VideoCard } from '../../components/molecules';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  let { videoId } = useParams();
  const [ videos ] = useRelatedVideos(videoId);
  console.log('WHAT IS VIDEO? ', videos)
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // const title = videos ? videos.snippet.title : 'Something cool';
  // const description = videos ? videos.snippet.Description :'is about to happen...';
  const title =  'Something cool';
  const description ='is about to happen...';

  return (
    <PageContainer>
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
      <VideoList>
        <RecommendedVideos>
          {
            videos.map(video => 
              <VideoCard
                video={video}
                isSmall={true}
                key={video.etag}
                id={video.id.videoId}
              />
            )
          }
        </RecommendedVideos>
      </VideoList>
    </PageContainer>
  );
}

export default VideoPage;
