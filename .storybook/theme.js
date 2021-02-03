import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotsilverpink',
  colorSecondary: 'deepskyblue',

  /* UI */
  appBg: 'white',
  appContentBg: '#fafafa',
  appBorderColor: 'black',
  appBorderRadius: 4,

  /* Typography */
  fontBase: 'Arial, "Open Sans", sans-serif',
  fontCode: 'monospace',

  /* Text colors */
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  /* Toolbar default and active colors */
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  /* Form colors */
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'AJC ReactJs UI',
  brandUrl: 'https://ajc24.github.io/ajc-reactjs-ui/',
  brandImage: '',
});