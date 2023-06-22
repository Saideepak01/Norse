import { createStitches, globalCss } from '@stitches/react';
import { rem } from './utils/rem';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    outlineOffset: '2px',
  },
});

export const { theme, createTheme, styled } = createStitches({
  theme: {
    colors: {
      charcoal: '#34282C',
      paper: '#EBE9F0',
      white: '#fff',
      black: '#000',
    },
    space: {
      xs: rem(16 / 2),
      sm: rem(16 / 1.5),
      md: rem(16),
      lg: rem(16 * 1.5),
      xl: rem(16 * 2),
    },
    radii: {
      xs: rem(6 / 2),
      sm: rem(6 / 1.5),
      md: rem(6),
      lg: rem(6 * 1.5),
      xl: rem(6 * 2),
    },
    fontSizes: {
      xs: rem(16 / 1.5),
      sm: rem(16 / 1.25),
      md: rem(16),
      lg: rem(16 * 1.25),
      xl: rem(16 * 1.5),
    },
    shadows: {
      xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
});
