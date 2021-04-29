import React from 'react';
import { VideoList, FavTitle, NoVideos } from './Favorites.styles';
import { useStore } from '../../providers/Theme';
import { VscSquirrel } from "react-icons/vsc";
import { VideoCard } from '../../components/molecules';

const Favorites = () => {
  const { state, dispatch } = useStore();
  const { favoriteVideos } = state;

    return (
      <>
        <FavTitle>
            Hey squirrel friend, here are your favorite videos!
          </FavTitle>
          <VideoList>
            {favoriteVideos.map((video) => (
              <VideoCard
                key={video.etag}
                video={video}
                id={video.id.videoId}
              />
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


//on delele needs probably Index of and pass it to splice as splice()