import { addParameters } from '@storybook/react';
import customTheme from './theme';

addParameters({
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: false,
    showSearchBox: false,
    panelPosition: 'bottom',
    sortStoriesByKind: false,
    hierarchySeparator: '/',
    hierarchyRootSeparator: null,
    selectedAddonPanel: undefined,
  }
});
