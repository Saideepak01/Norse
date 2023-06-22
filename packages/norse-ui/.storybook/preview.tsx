import { globalStyles } from '../src/lib/defaultTheme';

export const decorators = [
  (Story: any) => {
    globalStyles();
    return <Story />;
  },
];
