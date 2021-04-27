import React, { useState } from "react";
import { useStore } from '../../../providers/Theme/ThemeProvider';
import { Button, UnselectedIcon, SelectedIcon } from './StarIcon.styles';
import { star, TOGGLE_STAR } from '../../../utils/constants';

const StarIcon = () => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  const {state, dispatch} = useStore();
  
  const toggleStar = () => {
    onToggle();
    if (state.theme.isDark) {
      dispatch({
        type: TOGGLE_STAR,
        payload: star.light
      });
    } else {
      dispatch({
        type: TOGGLE_STAR,
        payload: star.dark
      });
    }
  }

  return (
    <>
    <section>
      <Button>
        {clicked ? (
          <UnselectedIcon />
        ) : (
          <SelectedIcon />
        )}
      </Button>
    </section>
    </>
  );
};

export default StarIcon;
