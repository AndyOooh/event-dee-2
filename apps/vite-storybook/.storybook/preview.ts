import type { Preview } from '@storybook/react';
import '../src/index.css'; // replace with the name of your tailwind css file
import { themes } from '@storybook/theming';
import { eventDeeTheme } from './eventDeeTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Get Started', '*'],
      },
    },
    docs: {
      theme: eventDeeTheme,
    },
    layout: 'centered',
  },
};

export default preview;
