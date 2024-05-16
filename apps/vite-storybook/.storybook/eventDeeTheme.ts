// https://storybook.js.org/docs/react/configure/theming
//  assets: https://storybook.js.org/docs/ember/configure/images-and-assets

import { create } from '@storybook/theming/create';

import { colorMap } from '@repo/ui';

export const eventDeeTheme = create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Connecting events',
  brandUrl: 'https://example.com',
  brandImage: '/logo-d-trans.png',
  brandTarget: '_self',

  //
  colorPrimary: colorMap.pink,
  colorSecondary: colorMap.blue,

  // UI
  appBg: colorMap.beige,
  appContentBg: colorMap.white,
  // appBorderColor: colorMap.peach,
  appBorderRadius: 4,

  // Text colors
  textColor: colorMap.black,
  textInverseColor: colorMap.white,

  // Toolbar default and active colors
  barTextColor: colorMap.black,
  // barSelectedColor: colorMap.peach,
  barBg: colorMap.beige,

  // Form colors
  inputBg: colorMap.white,
  // inputBorder: colorMap.peach,
  inputTextColor: colorMap.black,
  inputBorderRadius: 2,
});
