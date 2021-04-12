import React, { useState, useContext } from 'react';
import { SearchContext } from '../../../store/Search/SearchProvider';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';

const SearchBar = ({setQuery}) => {
  const [ term, setTerm ] = useState('');
  
const handleSearchVideos = e => {
  e.preventDefault();

  
};

// const theTerm = useContext(SearchContext);

  return (
    <SearchContainer>
      <Form>
        <Input type="text" id="name" placeholder="Ask for a video..." />
        <Button>
          <SearchIcon />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;
