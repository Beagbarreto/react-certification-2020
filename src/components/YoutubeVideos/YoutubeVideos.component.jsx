import React, { useContext } from 'react';
import { VideoCard } from '../molecules';
import { VideoList } from './YoutubeVideos.styles';
import { Consumer } from '../../utils/hooks/context';
import getSearch from '../../utils/hooks/getSearchedVideos';
import { LoaderContext } from '../../utils/hooks/loader';

const YoutubeVideos = ({videoId, handleEntry}) => {
  const [ videos ] = getSearch(videoId);
  const { hideLoader, showLoader } = useContext(LoaderContext);

  return (
    <Consumer>
      {value => {
        // console.log('---------VALUE------------', value)
        // const { videoList2 } = value;
        // if(videoList2 === undefined || videoList2.length === 0) {
        //   return showLoader();
        //showLoader();
        // } else {
          //hideLoader();s

        return (  
          <VideoList>
            {videos.map(video => 
              <VideoCard
                key={video.etag}
                video={video}
              />
            )}
          </VideoList>
        )  
        //}    
      }
      }
    </Consumer>
  );
};

export default YoutubeVideos;