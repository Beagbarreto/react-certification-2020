import { useState, useEffect } from 'react';

const getSavedSearch = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if(savedValue) return savedValue;
  if(initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocatStorage = (key, initialValue) => {
  const [local, setLocal] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(local))
  }, [local])

  return [local, setLocal];
}

export default useLocatStorage;