import React, { useContext } from 'react';
import { VideoCard } from '../molecules';
import { VideoList } from './YoutubeVideos.styles';
import { Consumer } from '../../providers/Theme';
import getSearch from '../../utils/hooks/getSearchedVideos';
import { LoaderContext } from '../../utils/hooks/loader';
import {Loader} from '../atoms';

const YoutubeVideos = ({videoId, handleEntry}) => {
  const [ videos ] = getSearch(videoId);


  return (
    // <Consumer>
    //   {
    //     value => {
    //       console.log('------VALUE-HOME-----', value[0])
    //       if(value === undefined || value.length === 0) {
    //         return <Loader />
    //       } else {
            // return (  
              <VideoList>
                {videos.map(video => 
                  <VideoCard
                   //onVideoSelect={onVideoSelect}
                    key={video.etag}
                    video={video}
                 />
                )}
              </VideoList>
    //        )  
    //       }    
    //     }
    //   }
    // </Consumer>
  );
};

export default YoutubeVideos;