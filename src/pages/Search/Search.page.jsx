import React, { useState, useEffect } from 'react';
//import {useParams} from 'react-router';
import { LongVideoCard } from '../../components/molecules';
import { Link } from 'react-router-dom';
import { CardsContainer } from './Search.styles';
import getSearch from '../../utils/hooks/getSearchedVideos';

const SearchPage = ({videoId}) => {
  //let { query } = useParams();
  const [ videos ] = getSearch(videoId);

  return (
      <CardsContainer>
        {videos.map(video => 
          <Link key={video.videoId} to={`/video/${video.videoId}`}>
            <LongVideoCard 
              // key={video.etag}
              video={video}
            />
            </Link>
        )}
      </CardsContainer>
  );
};
export default SearchPage;