import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('wiseline');

  return(
    <SearchContext.Provider value={{search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => useContext(SearchContext);

export { SearchContext, useSearch };
export default SearchProvider;