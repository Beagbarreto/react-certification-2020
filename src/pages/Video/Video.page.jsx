import React, { useState } from 'react';
import {
  PageContainer,
} from './Video.styles';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos';
import useRelatedVideos from '../../utils/hooks/useRelatedVideos';

const VideoPage = ({videoId}) => {
  const [ videos ] = useRelatedVideos(videoId);
  const [ currentVideo ] = useState(null);

  const handleEntry = e => {
    e.preventDefault();
    useFetchData().then(setCurrentVideo)
  }

  return (
    <PageContainer>
      <VideoPlayer 
        video={currentVideo}
      />
      <RelatedVideos 
        video={videoId}
        handleEntry={handleEntry}
      />
    </PageContainer>
  );
}

export default VideoPage;
