import React, { useState } from 'react';

interface IProps {
  id: string;
  className?: string;
  onChange(value: string): void;
}

enum Checked {
  Unchecked = 0,
  Indeterminate = 1,
  Checked = 2,
}

function IndeterminateCheckbox({ className, id, onChange }: IProps) {
  const [checked, setCheckedState] = useState(Checked.Unchecked);

  const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    switch (checked) {
      // unchecked, going indeterminate
      case Checked.Unchecked:
        setCheckedState(Checked.Indeterminate);
        el.indeterminate = true;
        el.checked = false;

        onChange('false');
        break;

        // indeterminate, going checked
      case Checked.Indeterminate:
        setCheckedState(Checked.Checked);
        el.indeterminate = false;
        el.checked = true;

        onChange('true');
        break;

        // checked, going unchecked
      default:
        setCheckedState(Checked.Unchecked);
        el.indeterminate = false;
        el.checked = false;
        onChange('');
        break;
    }
  };

  return (
    <input
      id={id}
      className={className}
      type="checkbox"
      onClick={onClick}
    />
  );
}

export default IndeterminateCheckbox;
