import React, { useState, useCallback } from 'react';
import {
  Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Checkbox,
} from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export interface ISort {
  label: string;
  fieldName: string;
}

interface IProps {
  fields: ISort[];
  onChange(fieldName: string, isDescending: boolean): void;
}

function Sort({ fields, onChange }: IProps) {
  const [selectValue, setSelectValue] = useState<undefined | string>('');
  const [orderValue, setOrderValue] = useState<boolean>(false);

  const onSelectChange = useCallback((event: SelectChangeEvent) => {
    const { value } = event.target as any;
    setSelectValue(value);
    onChange(value, orderValue);
  }, [orderValue]);

  const onOrderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setOrderValue(value);
    if (selectValue) {
      onChange(selectValue, value);
    }
  }, [selectValue]);

  return (
    <>
      <Typography variant="subtitle1">Sorting</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sort-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          label="Sort by"
          value={selectValue}
          defaultValue=""
          onChange={onSelectChange}
        >
          <MenuItem disabled hidden value="">-- default --</MenuItem>
          {fields.map((field) => (
            <MenuItem key={field.fieldName} value={field.fieldName}>{field.label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }}>
        <Checkbox
          title="Sort order"
          icon={<SortByAlphaIcon />}
          checkedIcon={<SortByAlphaIcon />}
          checked={orderValue}
          onChange={onOrderChange}
        />
      </FormControl>
    </>
  );
}

export default Sort;
