import { Theme } from '@mui/material';
import { PALETTE } from './constants';
import { DeepPartial, ThemeMode } from '../types';

export const getDesignTokens = (mode: ThemeMode): DeepPartial<Theme> => {
  // TODO
  return {
    palette: {
      background: {
        default: mode === 'light' ? PALETTE.backgroundDefault.light : PALETTE.backgroundDefault.dark,
      },
    },
  };
};
