import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
import getSearch from '../../../utils/hooks/getSearchedVideos';
import { Consumer } from '../../../providers/Theme';

const SearchBar = () => {
  const [ query, setQuery ] = useState('');
  const searchInput = useRef(null)

        // dispatch:({
      //   type: 'SEARCH_VIDEOS',
      //   payload: res.data.items
      // })

  const onSearch = (dispatch, e) => {
    e.preventDefault();
    getSearch(query);
    searchInput.current = query;
  }

const handleSearch = e => {
  setQuery(e.target.value);
}

  return (
    // <Consumer>
    //   {
    //     value => {
    //       const { dispatch } = value;
    //       return(
            <SearchContainer>
              <Form onSubmit={onSearch}>
                <Input 
                  type="text"
                  ref={searchInput}
                  //id="search"
                  placeholder="Look for a video..."
                  onChange={handleSearch} 
                  value = { query }
                />
                <Button type="submit">
                  <SearchIcon />
                </Button>
              </Form>
            </SearchContainer>
    //       )
    //     }
    //   }
    // </Consumer>
  );
};

export default SearchBar;
