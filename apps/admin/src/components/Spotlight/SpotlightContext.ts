import { createContext, useContext } from 'react';
import { SpotlightContextProps } from './types';

const defaultContext: SpotlightContextProps = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setClose: () => {},
  query: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuery: () => {},
};

const SpotlightContext = createContext(defaultContext);

export const SpotlightContextProvider = SpotlightContext.Provider;
export const SpotlightContextConsumer = SpotlightContext.Consumer;

export const useSpotlightContext = () => useContext(SpotlightContext);

export default SpotlightContext;
