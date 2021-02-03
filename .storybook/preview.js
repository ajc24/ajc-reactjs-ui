import { addParameters } from '@storybook/react';
import customTheme from './theme';

addParameters({
  options: {
    theme: customTheme,
    isFullScreen: false,
    showNav: true,
    showPanel: false,
    showSearchBox: false,
    panelPosition: 'bottom',
    sortStoriesByKind: false,
    hierarchySeparator: '/',
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: true,
  }
});
