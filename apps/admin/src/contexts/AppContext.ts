import { createContext, useContext } from 'react';
import { themeModeKeys } from '../enums';
import { ThemeMode } from '../types';
import { LANG_DEFAULT } from '../constants';

interface AppContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  lang: string;
  setLang: (lang: string) => void;
}

const defaultContext: AppContextProps = {
  mode: themeModeKeys.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode: () => {},
  sidebarOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSidebarOpen: () => {},
  lang: LANG_DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: () => {},
};

const AppContext = createContext(defaultContext);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export const useAppContext = () => useContext(AppContext);

export default AppContext;
