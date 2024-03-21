import { Theme } from '@mui/material';
import { PALETTE } from './constants';
import { DeepPartial, ThemeMode } from '../types';

export const getDesignTokens = (mode: ThemeMode): DeepPartial<Theme> => {
  // TODO
  return {
    palette: {
      primary: {
        main: 'rgb(170,3,83)',
      },
      secondary: {
        main: 'rgb(110,110,110)',
      },
      background: {
        default: mode === 'light' ? PALETTE.backgroundDefault.light : PALETTE.backgroundDefault.dark,
      },
    },
  };
};
