import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { SearchContext } from '../../../store/Search/SearchProvider';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';

const SearchBar = () => {
  const [ query, setQuery ] = useState('');

const search = e => {
  e.preventDefault();
  useFetchData(query).then(setVideo);
}

// const theTerm = useContext(SearchContext);


  return (
    <SearchContainer>
      <Form onSubmit={search}>
        <Input 
          type="text"
          id="search"
          placeholder="Look for a video..."
          onChange={e => setQuery(e.target.value)} 
          value = { query }
        />
        <Button>
        <Link to = {`/search/${query}`} >
          <SearchIcon />
        </Link>
          </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;
