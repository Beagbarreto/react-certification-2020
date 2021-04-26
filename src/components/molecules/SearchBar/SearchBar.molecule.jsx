import React, { useState, useRef, useContext } from 'react';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { SEARCH_VIDEOS } from '../../../utils/constants';
import getSearch from '../../../utils/hooks/getSearchedVideos';

const SearchBar = () => {
  // const [query, setQuery] = useRef('wizeline');
  const {state, dispatch} = useStore();
  
  const searchForVideos = (e, query) => {
    const videos = getSearch(query);
    dispatch({ 
      type: SEARCH_VIDEOS,
      payload: e.target.value });
  };

  // const handleSearch = (e) => {
  //   dispatch({
  //     type: SEARCH_VIDEOS,
  //     payload: { ...state, query: e.target.value },
  //   })
  // };


  return (
    <SearchContainer>
      <Form>
        <Input 
          type="text"
          placeholder="Look for a video..."
          onChange={(e) =>
            dispatch({
              type: SEARCH_VIDEOS,
              payload: { param: e.target.value },
            })
          }
          value = {state.query}
        />
        <Button 
          type="submit"
          onClick={() =>
            dispatch({
              type: SEARCH_VIDEOS,
              payload: state,
            })
          }
        >
            <SearchIcon />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;

// import React, { useState, useRef, useContext } from 'react';
// import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
// import getSearch from '../../../utils/hooks/getSearchedVideos';
// import { useStore } from '../../../providers/Theme';
// import {useHistory} from 'react-router-dom';
// import { SEARCH_VIDEOS } from '../../../utils/constants';
// import { Link } from 'react-router-dom';

// const SearchBar = () => {
//    const searchRef = useRef(null);
//   // const [isCurrent] = useRef(null);
//   // const history = useHistory();
//   // const {state, dispatch} = useStore();
//   const [search, setSearch] = useState('wizeline');

//   const onSearch = (dispatch, e) => {
//     e.preventDefault();
//     searchRef.current.focus();
//     //getSearch(searchRef);
//   }

// const handleSearch = e => {
//   if(e.key === 'Enter') {
//     dispatch({
//       type: SEARCH_VIDEOS,
//       payload: e.target.value
//     });
//     history.push({pathname: `/${searchRef}`});
//   }
// }

//   return (
//     <SearchContainer>
//       <Form onSubmit={onSearch}>
//         <Input 
//           type="text"
//           ref={searchRef}
//           //id="search"
//           placeholder="Look for a video..."
//           onChange={handleSearch} 
//         />
//         <Button 
//           type="submit"
//           onClick ={() => console.log('REFERENCEEEEE:', onSearch)}
//         >
//           <Link to = {`/${searchRef.current}`} >
//             <SearchIcon />
//           </Link>
//         </Button>
//       </Form>
//     </SearchContainer>
//   );
// };

// export default SearchBar;
