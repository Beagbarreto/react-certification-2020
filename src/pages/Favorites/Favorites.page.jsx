import React, { useContext, useEffect, useState } from 'react';
import { VideoCard } from '../../components/molecules';
import { VideoList } from './Favorites.styles';
import { SearchContext } from '../../providers/SearchContext';
import searchingVideos from '../../utils/services/videoServices';
import { FAVORITE_VIDEOS } from '../../utils/constants';
import { useStore } from '../../providers/Theme';

const Favorites = ({videoId}) => {
  const { state, dispatch } = useStore();
  const { favoriteVideos } = state;
  const handleDelete = (index) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload : index
    });
  }
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
      <p>Here are your favorite videos...</p>
      {/* <VideoList>
        {videos.map(video => 
          <VideoCard
            //onVideoSelect={onVideoSelect}
            key={video.etag}
            video={video}
            id={video.id.videoId}
          />
        )}
      </VideoList> */}
      {FAVORITE_VIDEOS.length === 0 &&
        <span>
          You haven't starred any videos :(
        </span>
      }
      </>
    );
  };

// export default withAuth(Favorites);

export default Favorites;
