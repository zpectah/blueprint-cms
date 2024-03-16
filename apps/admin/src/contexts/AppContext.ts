import { createContext, useContext } from 'react';
import { themeModeKeys } from '../enums';
import { ThemeMode } from '../types';

export interface AppContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const defaultContext: AppContextProps = {
  mode: themeModeKeys.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode: () => {},
};

const AppContext = createContext(defaultContext);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export const useAppContext = () => useContext(AppContext);

export default AppContext;
