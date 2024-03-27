import { createContext, useContext } from 'react';
import { SpotlightContextProps } from './types';

const defaultContext: SpotlightContextProps = {
  query: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuery: () => {},
};

const SpotlightContext = createContext(defaultContext);

export const SpotlightContextProvider = SpotlightContext.Provider;
export const SpotlightContextConsumer = SpotlightContext.Consumer;

export const useSpotlightContext = () => useContext(SpotlightContext);

export default SpotlightContext;
