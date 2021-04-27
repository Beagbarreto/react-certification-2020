import React, { useRef, useContext } from 'react';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
import { SearchContext } from '../../../providers/SearchContext';

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);

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

  return (
    <SearchContainer>
      <Form>
        <Input 
          type="text"
          placeholder="Look for a video..."
          onChange={(e) =>
            setQuery(e.target.value)
          }
          value = {query}
//           ref={searchRef}
        />
        <Button type="submit">
            <SearchIcon />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;
