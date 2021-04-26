import React from 'react';
import { Favs, Title } from './Favorites.styles.js';

const Favorites = () => {

  //if not authenticated return 404 page
  // useEffect(() => {
  //   if (storage.get(FAVORITE_VIDEOS) === null) {
  //     storage.set(FAVORITE_VIDEOS, { listofVideos: [] });
  //   }
  // }, []);

  return (
    <>
      <Favs>
        <Title>HaLLeLoO!</Title>
        <p>Here are your favorite videos...</p>
      </Favs>
    </>
  );
};

// export default withAuth(Favorites);

export default Favorites;
