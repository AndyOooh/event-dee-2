// https://storybook.js.org/docs/react/configure/theming
// https://storybook.js.org/docs/react/configure/features-and-behavior

import { addons } from '@storybook/manager-api';

import { themes } from '@storybook/theming';
import { eventDeeTheme } from './eventDeeTheme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
//   theme: themes.light,
  theme: eventDeeTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
