import { Theme } from '@mui/material';
import { DeepPartial } from '@blueprint/types';
import { PALETTE } from './constants';
import { ThemeMode } from '../types';
import { COLOR_PRIMARY, COLOR_SECONDARY, LAYOUT_SIDEBAR_ID, PAGE_LAYOUT_NOTIFICATION_LIST_ID } from '../constants';

export const getDesignTokens = (mode: ThemeMode): DeepPartial<Theme> => {
  // TODO
  return {
    palette: {
      primary: {
        main: COLOR_PRIMARY,
      },
      secondary: {
        main: COLOR_SECONDARY,
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
            [`#${LAYOUT_SIDEBAR_ID} &`]: {
              paddingTop: '.75rem',
              paddingBottom: '.75rem',

              '&.Mui-selected': {
                borderRight: `2px solid ${COLOR_PRIMARY}`,
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
      MuiAlert: {
        defaultProps: {},
        styleOverrides: {
          root: {
            [`#${PAGE_LAYOUT_NOTIFICATION_LIST_ID} &`]: {
              borderRadius: 0,
            },
          },
        },
      },
      MuiAlertTitle: {
        defaultProps: {},
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  } as DeepPartial<Theme>;
};
