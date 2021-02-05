import React from 'react';
import { HeaderLogo } from '../src';
import testImage from './images/storybook-header-logo.png';

export default {
	component: HeaderLogo,
	title: 'Components/HeaderLogo',
};
  
const Template = args => {
	return <React.Fragment>
		<HeaderLogo {...args} />
	</React.Fragment>;
}

export const Default = Template.bind({});
Default.args = {
	id: 'header-logo-id',
	imageSrc: testImage
};
