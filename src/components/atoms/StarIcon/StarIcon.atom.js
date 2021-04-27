import React, { useState } from "react";
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { Button, UnselectedIcon, SelectedIcon } from './StarIcon.styles';
import { checked, TOGGLE_STAR } from '../../../utils/constants';

const StarIcon = ({isChecked}) => {
  const { state, dispatch } = useStore();

  return (
    <>
        {isChecked ? (
          <SelectedIcon 
            onClick={() => {
              dispatch({
                type: TOGGLE_STAR,
                payload: star.light
              });
            }}
          />
        ) : (
          <UnselectedIcon 
          onClick={() => {
            dispatch({
              type: TOGGLE_STAR,
              payload: star.dark
            });
          }}
          />
        )}
    </>
  );
};

export default StarIcon;
