import React, { useState, useRef, useContext } from 'react';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
import getSearch from '../../../utils/hooks/getSearchedVideos';
import { useStore } from '../../../providers/Theme';
import {useHistory} from 'react-router-dom';
import { SEARCH_VIDEOS } from '../../../utils/constants';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const searchInput = useRef(null);
  const history = useHistory();
  const {state, dispatch} = useStore();
  const [search, setSearch] = useState('wizeline');

  const onSearch = (dispatch, e) => {
    e.preventDefault();
    getSearch(searchInput);
    searchInput.current;
  }

const handleSearch = e => {
  if(e.key === 'Enter') {
    dispatch({
      type: SEARCH_VIDEOS,
      payload: e.target.value
    });
    history.push({pathname: `/${searchInput}`});
  }
}

  return (
    <SearchContainer>
      <Form onSubmit={onSearch}>
        <Input 
          type="text"
          ref={searchInput}
          //id="search"
          placeholder="Look for a video..."
          onChange={handleSearch} 
        />
        <Button type="submit">
          <Link to = {`/${searchInput}`} >
            <SearchIcon />
          </Link>
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;
