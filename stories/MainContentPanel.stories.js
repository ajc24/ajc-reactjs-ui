import React from 'react';
import { MainContentPanel } from '../src';

export default {
	component: MainContentPanel,
	title: 'Page Content/MainContentPanel',
};

const DefaultTemplate = args => {
	return <React.Fragment>
    <MainContentPanel {...args}>
      <p>The main content panel is designed to act as a container for the main content for each individual page of your web application. This is an example of the default main content panel
        which is rendered with a white background.</p>
    </MainContentPanel>
  </React.Fragment>;
}

const GreyTemplate = () => {
	return <React.Fragment>
    <MainContentPanel title="Grey Main Content Panel" colour="grey">
      <p>The main content panel is designed to act as a container for the main content for each individual page of your web application. This is an example of a main content panel with a grey
        background.</p>
    </MainContentPanel>
  </React.Fragment>;
}

const TransparentTemplate = () => {
	return <React.Fragment>
    <MainContentPanel title="Transparent Main Content Panel" colour="transparent">
      <p>The main content panel is designed to act as a container for the main content for each individual page of your web application. This is an example of a main content panel
        with a transparent background.</p>
    </MainContentPanel>
  </React.Fragment>;
}

const YellowTemplate = () => {
	return <React.Fragment>
    <MainContentPanel title="Transparent Main Content Panel" colour="yellow">
      <p>The main content panel is designed to act as a container for the main content for each individual page of your web application. This is an example of a main content panel
        with a yellow background.</p>
    </MainContentPanel>
  </React.Fragment>;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Default Main Content Panel'
};
export const WithGreyBackground = GreyTemplate.bind({});
WithGreyBackground.args = {
  title: 'Grey Main Content Panel'
};
export const withTransparentBackground = TransparentTemplate.bind({});
withTransparentBackground.args = {
  title: 'Transparent Main Content Panel'
};
export const withYellowBackground = YellowTemplate.bind({});
withYellowBackground.args = {
  title: 'Yellow Main Content Panel'
};
