import React, { useState } from 'react';
//import {useParams} from 'react-router';
import { LongVideoCard } from '../../components/molecules';
import { Link } from 'react-router-dom';
import { CardsContainer } from './Search.styles';
import getSearch from '../../utils/hooks/getSearchedVideos';

const SearchPage = (props) => {
  //let { query } = useParams();
  const [videos, setVideos] = useState([]);

  return (
      <CardsContainer>
        {
          videos.map(video =>
            <Link key={video.videoId} to={`/video/${video.videoId}`}>
              <LongVideoCard 
                //key={video.etag}
                video={video}
              />
              </Link>
          )
        }
      </CardsContainer>
  );
};
export default SearchPage;