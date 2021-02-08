import React from 'react';
import { MainContentPageTitle } from '../src';

export default {
	component: MainContentPageTitle,
	title: 'Components/MainContentPageTitle',
};
  
const Template = args => {
	return <div role="region">
    <MainContentPageTitle {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  titleText: 'Sample Page Title Text'
};
