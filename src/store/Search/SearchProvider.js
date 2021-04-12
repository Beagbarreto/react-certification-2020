import React, { createContext, useContext, useReducer } from 'react'
// import storeReducer, { initialStore } from './storeReducer';

// const SearchContext = createContext();

// const SearchProvider = ({ children }) =>
//   <SearchContext.Provider value={useReducer(SearchReducer, initialSearch)}>
//     {children}
//   </SearchContext.Provider>

// const useSearch = () => useContext(SearchContext)[0]
// const useDispatch = () => useContext(SearchContext)[1]

// export { SearchContext, useSearch, useDispatch }
// export default SearchProvider;

const SearchContext = createContext();

const SearchProvider = ({ children }) =>
  <SearchContext.Provider value={term}>
    {children}
  </SearchContext.Provider>

const useSearch = () => useContext(SearchContext)[0]
const useDispatch = () => useContext(SearchContext)[1]

export { SearchContext, useSearch, useDispatch }
export default SearchProvider;