import React, { useState, useCallback } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import Checked from './Checked';

export interface ISetting {
  title: string;
  icon: React.ReactNode;
}

interface IProps {
  label?: string;
  defaultValue?: Checked;
  settings?: { [key: string]: ISetting };
  onChange(value: string): void;
}

function IndeterminateCheckbox({
  defaultValue = Checked.Unchecked, label, settings, onChange,
}: IProps) {
  const [checked, setCheckedState] = useState(defaultValue);

  const onClick = useCallback(() => {
    switch (checked) {
      // unchecked, going indeterminate
      case Checked.Unchecked:
        setCheckedState(Checked.Indeterminate);
        onChange(Checked.Indeterminate);
        break;

        // indeterminate, going checked
      case Checked.Indeterminate:
        setCheckedState(Checked.Checked);
        onChange(Checked.Checked);
        break;

        // checked, going unchecked
      default:
        setCheckedState(Checked.Unchecked);
        onChange(Checked.Unchecked);
        break;
    }
  }, [checked]);

  return (
    <FormControlLabel
      label={label}
      control={(
        <Checkbox
          checked={checked === Checked.Checked}
          indeterminate={checked === Checked.Indeterminate}
          checkedIcon={settings && settings[Checked.Checked]?.icon}
          icon={settings && settings[Checked.Unchecked]?.icon}
          indeterminateIcon={settings && settings[Checked.Indeterminate]?.icon}
          title={settings && settings[checked]?.title}
          onClick={onClick}
        />
      )}
    />
  );
}

export default IndeterminateCheckbox;
