import { useState } from 'react';
import { SpotlightContextProps } from './types';

export const useSpotlightContextValue = (): SpotlightContextProps => {
  const [query, setQuery] = useState('');

  return {
    query,
    setQuery,
  };
};
