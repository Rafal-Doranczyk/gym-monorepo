'use client';

import { ReactNode, createContext, useMemo, useState } from 'react';
import { ThemeProvider as MaterialProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PALETTE_MODES } from 'gym-shared';

import { THEME_COLORS } from './colors';

export const ThemeContext = createContext({
  mode: PALETTE_MODES.DARK,
  setMode: (_: PALETTE_MODES) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PALETTE_MODES>(PALETTE_MODES.DARK);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: THEME_COLORS.primary,
          secondary: THEME_COLORS.secondary,
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MaterialProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MaterialProvider>
    </ThemeContext.Provider>
  );
}
