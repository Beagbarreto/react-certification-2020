import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import { LongVideoCard } from '../../components/molecules';
import { Link } from 'react-router-dom';
import { CardsContainer } from './Search.styles';
import axiosService from '../../utils/axiosService';

const SearchPage = (props) => {
  let { query } = useParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setVideoInfo([]);
    try {
      const res = await axiosService.get(`/search`, {
        params: {
          part : 'snippet',
          type: 'video',
          q: 'query'
        }
      })
      console.log(res);
      setVideoInfo(res.data.items);
      setIsError(false);
      console.log('-----SEARCH RES: ', res.data.items)
    } catch(err) {
      console.log(err, 'Holy error Batman! Coming from SearchPage');
      setIsError(true);
      // setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(query);
  }, [query])

  return (
      <CardsContainer>
        {videoInfo.map(video => {
          return(
            <Link key={video.videoId} to={`/video/${video.videoId}`}>
              <LongVideoCard 
                // key={video.etag}
                video={video}
                title={video.title}
                image={video.image}
                channel={video.channel}
                description={video.description}
              />
              </Link>
          )}
        )}
      </CardsContainer>
  );
};
export default SearchPage;