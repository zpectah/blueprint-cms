import React, { ChangeEvent, useEffect, useRef } from 'react';
import { styled, Box } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { SearchInput } from '../input';

const SpotlightSearchWrapper = styled(Box)({
  width: '100%',
  padding: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export interface SpotlightSearchProps {
  open: boolean;
  focusDelay?: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SpotlightSearch = ({ open, focusDelay = 125, value, onChange }: SpotlightSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), focusDelay);
    }
  }, [open, focusDelay, inputRef]);

  return (
    <SpotlightSearchWrapper>
      <SearchInput fullWidth placeholder="Type to search ..." inputRef={inputRef} value={value} onChange={onChange} />
    </SpotlightSearchWrapper>
  );
};

export default SpotlightSearch;
