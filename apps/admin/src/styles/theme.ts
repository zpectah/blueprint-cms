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
      fontFamily: '"Open Sans", sans-serif',
      h1: {
        fontSize: '2.35rem',
        fontWeight: 300,
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
        textTransform: 'none',
      },
    },
    components: {
      MuiDivider: {
        defaultProps: {},
        styleOverrides: {
          root: {
            'ul .MuiMenuItem-root + &': {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {},
        },
      },
      MuiMenuItem: {
        defaultProps: {},
        styleOverrides: {
          root: {
            '#cms-sidebar &': {
              paddingTop: '.75rem',
              paddingBottom: '.75rem',

              '&.Mui-selected': {
                borderRight: `2px solid rgb(170,3,83)`,
              },
            },
          },
        },
      },
      MuiFormLabel: {
        defaultProps: {},
        styleOverrides: {
          root: {
            fontSize: '.85rem',
            fontWeight: 600,
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {},
      },
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {},
      },
      MuiCard: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {},
      },
    },
  } as DeepPartial<Theme>;
};
