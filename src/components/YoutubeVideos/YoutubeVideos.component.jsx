import React, { useContext } from 'react';
import { VideoCard } from '../molecules';
import { VideoList } from './YoutubeVideos.styles';
import getSearch from '../../utils/hooks/getSearchedVideos';
import { LoaderContext } from '../../utils/hooks/loader';
import {Loader} from '../atoms';

const YoutubeVideos = ({ videoId }) => {
  const [ videos ] = getSearch(videoId);


  return (
    <VideoList>
      {videos.map(video => 
        <VideoCard
          //onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video}
          id={video.id.videoId}
        />
      )}
    </VideoList>
  );
};

export default YoutubeVideos;