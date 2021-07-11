import React from 'react';
import { MainContentScreenshot } from '../src';
import testImage from './images/storybook-test-screenshot.png';

export default {
	component: MainContentScreenshot,
	title: 'Page Content/MainContentScreenshot',
};
  
const Template = args => {
	return <React.Fragment>
		<MainContentScreenshot {...args} />
	</React.Fragment>;
}

export const Default = Template.bind({});
Default.args = {
	id: 'default-main-content-screenshot-id',
  imageSrc: testImage,
  caption: 'Captions such as this appear below the screenshot.'
};
