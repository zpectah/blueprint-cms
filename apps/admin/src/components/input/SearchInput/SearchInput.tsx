import React, { forwardRef, ComponentType } from 'react';
import { OutlinedInput, InputAdornment, OutlinedInputProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchInputProps extends Partial<OutlinedInputProps> {
  icon?: ComponentType;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  const { icon, ...rest } = props;

  const Icon = icon ?? SearchIcon;

  return (
    <OutlinedInput
      type="search"
      startAdornment={
        <InputAdornment position="start">
          <Icon />
        </InputAdornment>
      }
      ref={ref}
      {...rest}
    />
  );
});

export default SearchInput;
