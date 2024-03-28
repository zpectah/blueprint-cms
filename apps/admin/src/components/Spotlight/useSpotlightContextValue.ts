import { useState } from 'react';
import { SpotlightContextProps } from './types';

export const useSpotlightContextValue = (): SpotlightContextProps => {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const closeHandler = () => {
    setOpen(false);
    setTimeout(() => {
      setQuery('');
    }, 250);
  };

  return {
    open,
    setOpen,
    setClose: closeHandler,
    query,
    setQuery,
  };
};
