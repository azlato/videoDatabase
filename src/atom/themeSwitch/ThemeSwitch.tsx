import React, { useCallback } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import IndeterminateCheckbox, { ISetting } from '../indeterminateCheckbox/IndeterminateCheckbox';
import Checked from '../indeterminateCheckbox/Checked';

const CHECKBOX_SETTINGS: { [key: string]: ISetting } = {
  [Checked.Checked]: {
    title: 'Light theme',
    icon: <LightModeIcon color="warning" />,
  },
  [Checked.Indeterminate]: {
    title: 'Auto theme based on system',
    icon: <SettingsBrightnessIcon color="secondary" />,
  },
  [Checked.Unchecked]: {
    title: 'Dark theme',
    icon: <DarkModeIcon />,
  },
};

const THEME_TO_CHECKED_STATE_MAP = new Map([
  ['light', Checked.Checked],
  ['', Checked.Indeterminate],
  ['dark', Checked.Unchecked],
]);
const CHECKED_STATE_TO_THEME_MAP = new Map([
  [Checked.Checked, 'light'],
  [Checked.Indeterminate, ''],
  [Checked.Unchecked, 'dark'],
]);

interface IProps {
  theme: string;
  onSetTheme: (theme: string) => void;
}

function ThemeSwitch({ theme, onSetTheme }: IProps) {
  const onCheckboxChange = useCallback((checkState: Checked) => {
    const value = CHECKED_STATE_TO_THEME_MAP.get(checkState);
    if (value === undefined) {
      throw new Error('Uknown to setTehem value for ThemeSwitch');
    }
    onSetTheme(value);
  }, []);
  const defualtValue = THEME_TO_CHECKED_STATE_MAP.get(theme);

  return (
    <IndeterminateCheckbox
      defaultValue={defualtValue}
      settings={CHECKBOX_SETTINGS}
      onChange={onCheckboxChange}
    />
  );
}

export default ThemeSwitch;
