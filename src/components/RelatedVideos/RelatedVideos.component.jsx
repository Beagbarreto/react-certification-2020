import React from 'react';
import { VideoCard } from '../molecules';
import {
  VideoList,
  RecommendedVideos
} from './RelatedVideos.styles';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import useRelatedVideos from '../../utils/hooks/useRelatedVideos';

const RelatedVideos = () => {
  let params = useParams();
  let videoId = params.videoId;
  const [ videos ] = useRelatedVideos(videoId);

  return (
    <VideoList>
      <RecommendedVideos>
        {
          videos.map(video => 
            // <Link key={video.videoId} to={`/VideoPage/${video.videoId}`}>
              <VideoCard
                video={video}
                isSmall={true}
                key={video.etag}
                id={video.id.videoId}
                // handleEntry={handleEntry}
              />
            // </Link>
          )
        }
      </RecommendedVideos>
    </VideoList>
  )
};

export default RelatedVideos;
