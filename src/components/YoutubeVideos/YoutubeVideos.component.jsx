import React, { useContext, useEffect, useState } from 'react';
import { VideoCard } from '../molecules';
import { VideoList } from './YoutubeVideos.styles';
import getSearch from '../../utils/hooks/getSearchedVideos';
import { SearchContext } from '../../providers/SearchContext';
import searchingVideos from '../../utils/services/videoServices';
import {Link} from 'react-router-dom';


const YoutubeVideos = ({ videoId }) => {
  const { query } = useContext(SearchContext);
  //const [ videos ] = getSearch(videoId);
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const videos = await searchingVideos(query)
        setVideos(videos.data.items)
      } catch{
        alert('No results were found')
      }
    }
    fetchData();
  }, [query]);

  return (
    <>
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
    </>
  );
};

export default YoutubeVideos;
