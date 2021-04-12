import { useState } from 'react';

export const useLocatState = (localItem) => {
  const [local, setState] = useState(localStorage.getItem(localItem));
  
  function setLocal(newItem) {
    localStorage.setitem(localItem, newItem);
    setState(newItem);
  }
  return [local, setLocal];
}
