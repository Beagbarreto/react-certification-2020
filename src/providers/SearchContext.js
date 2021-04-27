import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery}}>
      {children}
    </SearchContext.Provider>
  );
};
