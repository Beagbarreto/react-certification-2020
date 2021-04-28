import React, { useState } from "react";
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { Button, UnselectedIcon, SelectedIcon } from './StarIcon.styles';
import { ADD_FAVORITE, DELETE_FAVORITE, star, TOGGLE_STAR } from '../../../utils/constants';

const StarIcon = () => {
  const { state, dispatch } = useStore();
  const { favoriteVideos } = state;
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  const handleAdd = () => {
    dispatch({
      type: ADD_FAVORITE,
      payload: {
        title: `${something.title}`,
        description: `${something.description}`,
        image: `${something.image}`,
        etag: `${something.etag}`,
      }
    })
    state.favoriteVideos //storage for add and delete
  }

  const handleDelete = () => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: index
      //delete by etag
      //find and delete index
    })
  }

  return (
    checked ? (
      <SelectedIcon 
        onClick={() => {
          dispatch({
            type: TOGGLE_STAR,
          });
          handleDelete()
          setChecked(false)
        }}
      />
    ) : (
      <UnselectedIcon 
        onClick={() => {
          dispatch({
            type: TOGGLE_STAR,
          });
          handleAdd()
          setChecked(true)
      }}
      />
    )
  )
};

export default StarIcon;
