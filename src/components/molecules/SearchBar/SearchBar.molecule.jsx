import React, { useRef, useContext } from 'react';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';
import { SearchContext } from '../../../providers/SearchContext';

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);


  // const handleSearch = async (e) => {
  //   if(e.key === 'Enter') {
  //     setQuery(e.target.value);
  //   }
  // };

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
