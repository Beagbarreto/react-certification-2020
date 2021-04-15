import React from 'react';
import {
  PageContainer,
} from './Video.styles';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos';

const VideoPage = () => {

  return (
    <PageContainer>
      <VideoPlayer 
        // videoId={videoId}
      />
      <RelatedVideos 
        // videoId={videoId} 
      />
    </PageContainer>
  );
}

export default VideoPage;
