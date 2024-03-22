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
    typography: {
      h1: {
        fontSize: '2.35rem',
        fontWeight: 100,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 700,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      h5: {
        fontSize: '1.35rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1.15rem',
        fontWeight: 700,
      },
      subtitle1: {
        fontWeight: 300,
      },
      subtitle2: {
        fontWeight: 300,
      },
      // body1: {},
      // body2: {},
      button: {
        fontWeight: 700,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
  };
};
