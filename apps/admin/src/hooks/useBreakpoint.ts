import { Theme, useTheme, useMediaQuery } from '@mui/material';
import { Breakpoint } from '@mui/system';

type BreakpointOrNull = Breakpoint | null;

export const useBreakpoint = (): { breakpoint: Breakpoint; isMobile: boolean; isDesktop: boolean } => {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys];
  const breakpoint =
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return matches ? key : output;
    }, null) ?? 'xs';

  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';
  const isDesktop = !isMobile;

  return {
    breakpoint,
    isMobile,
    isDesktop,
  };
};
