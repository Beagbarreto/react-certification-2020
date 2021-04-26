import React, { useState } from "react";
import { useStore } from '../../../providers/Theme/ThemeProvider';
import "./ToggleSwitch.styles.css";
import { themes, TOGGLE_DARK_MODE } from '../../../utils/constants';

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  const {state, dispatch} = useStore();
  
  const toggleTheme = () => {
    onToggle();
    if (state.theme.isDark) {
      dispatch({
        type: TOGGLE_DARK_MODE,
        payload: themes.light
      });
    } else {
      dispatch({
        type: TOGGLE_DARK_MODE,
        payload: themes.dark
      });
    }
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={toggleTheme} />
      <span className="switch" />
      <h3>{state.theme.isDark ? 'Dark' : 'Light'}</h3>
    </label>
  );
}
export default ToggleSwitch;
