import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoList, FavTitle, NoVideos, CardContainer, TextContainer, ThumbnailImg, VideoTitle, VideoDescription } from './Favorites.styles';
import { SearchContext } from '../../providers/SearchContext';
import searchingVideos from '../../utils/services/videoServices';
import { FAVORITE_VIDEOS } from '../../utils/constants';
import { useStore } from '../../providers/Theme';
import { VscSquirrel } from "react-icons/vsc";
import { StarIcon } from '../../components/atoms';
import { useLocation } from 'react-router-dom';

const Favorites = ({videoId}) => {
  let location = useLocation();
  const { state, dispatch } = useStore();
  const { favoriteVideos } = state;
  const handleDelete = (index) => () =>
    dispatch({
      type: DELETE_FAVORITE,
      payload : index
    });

  const str = description;
  const length = str.length
  const desc =  length > 70 ? str.slice(0, 69) : str;
  const vid = video.id.videoId;

  //const { query } = useContext(SearchContext);
  //const [ videos, setVideos ] = useState([]);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try{
    //       const videos = await searchingVideos(query)
    //       setVideos(videos.data.items)
    //     } catch{
    //       alert('No results were found')
    //     }
    //   }
    //   fetchData();
    // }, [query]);

      // useEffect(() => {
  //   if (storage.get(FAVORITE_VIDEOS) === null) {
  //     storage.set(FAVORITE_VIDEOS, { listofVideos: [] });
  //   }
  // }, []);
  
    return (
      <>
        <FavTitle>
            Hey squirrel friend, watch some of your favorite videos!
          </FavTitle>
          <VideoList>
            {videos.map(({ title, desc, image, etag }, i) => (
              <CardContainer key={etag}>
                <Link to={`/user/${vid}`}> 
                  <ThumbnailImg> 
                    <img src={image} 
                    alt={title}
                    />
                  </ThumbnailImg>
                  <TextContainer>
                    <VideoTitle>{title}</VideoTitle>
                  </TextContainer>
                  <TextContainer>
                    <VideoDescription>{desc} ...</VideoDescription>
                  </TextContainer>
                </Link>
                <StarIcon onDelete={handleDelete(i)} />
              </CardContainer>
            ))}
          </VideoList> 
          {favoriteVideos.length === 0 &&
            <NoVideos>
              You have not starred any videos... <VscSquirrel />
            </NoVideos>
          }
      </>
    );
  };

export default Favorites;
