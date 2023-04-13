import React, { useState, useCallback } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface IProps {
  label: string;
  onChange(value: string): void;
}

enum Checked {
  Unchecked = 0,
  Indeterminate = 1,
  Checked = 2,
}

function IndeterminateCheckbox({ label, onChange }: IProps) {
  const [checked, setCheckedState] = useState(Checked.Unchecked);

  const onClick = useCallback(() => {
    switch (checked) {
      // unchecked, going indeterminate
      case Checked.Unchecked:
        setCheckedState(Checked.Indeterminate);

        onChange('false');
        break;

        // indeterminate, going checked
      case Checked.Indeterminate:
        setCheckedState(Checked.Checked);

        onChange('true');
        break;

        // checked, going unchecked
      default:
        setCheckedState(Checked.Unchecked);
        onChange('');
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
          onClick={onClick}
        />
      )}
    />
  );
}

export default IndeterminateCheckbox;
