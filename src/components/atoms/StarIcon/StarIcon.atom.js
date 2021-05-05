import React, { useState } from "react";
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { Button, UnselectedIcon, SelectedIcon } from './StarIcon.styles';
import { ADD_FAVORITE, DELETE_FAVORITE, star, TOGGLE_STAR } from '../../../utils/constants';

const StarIcon = ({video}) => {
  const { state, dispatch } = useStore();
  const { favoriteVideos } = state;
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  const handleAdd = () => {
    dispatch({
      type: ADD_FAVORITE,
      payload: video,
    })
    state.favoriteVideos //storage for add and delete
  }

  const handleDelete = () => {
  let removeIndex = favoriteVideos.findIndex((vid) => vid.etag === video.etag)
  dispatch({
    type: DELETE_FAVORITE,
    payload : removeIndex
  });
  }

//  const removeIndex =  favoriteVideos.findIndex(vid)
// splice(removeIndex, 1)

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
