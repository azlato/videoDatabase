import React from 'react';
import {
  Typography, FormControl, TextField, FormGroup,
} from '@mui/material';
import IndeterminateCheckbox from '../../atom/indeterminateCheckbox/IndeterminateCheckbox';

interface IProps {
  filters: IFilter[];
  onChange(filter: IFilter, value: string): void;
}

export const enum FilterType {
  String,
  Boolean,
}

export interface IFilter {
  label: string;
  fieldName: string;
  type: FilterType;
}

function Filter({ filters, onChange }: IProps) {
  return (
    <>
      <Typography variant="subtitle1">Filters</Typography>
      <FormGroup>
        {filters.map((filter) => (
          <FormControl key={filter.fieldName} sx={{ m: 1, minWidth: 120 }}>
            {filter.type === FilterType.Boolean
              ? (
                <IndeterminateCheckbox
                  label="DRM"
                  onChange={(value: string) => onChange(filter, value)}
                />
              )
              : (
                <TextField
                  label={filter.label}
                  variant="outlined"
                  onChange={(event) => onChange(filter, event.target.value)}
                />
              )}
          </FormControl>
        ))}
      </FormGroup>
    </>
  );
}

export default React.memo(Filter);
