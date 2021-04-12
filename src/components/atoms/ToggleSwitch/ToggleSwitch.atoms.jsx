import React, {useState} from 'react';
import { SwitchInput, SwitchLabel, SwitchButton } from './ToggleSwitch.styles';

const ToggleSwitch = ({ id, toggled, onChange }) => {
  // const [theme, setTheme] = useState(themes.dark);

  // const toggleTheme = () => {
  //   theme === themes.dark 
  //   ? setTheme(temes.light)
  //   : setTheme(themes.dark);
  // }

  return (
    <>
      <SwitchInput id={id} type="checkbox" checked={toggled} onChange={onChange} />
      <SwitchLabel htmlFor={id}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};

export default ToggleSwitch;
