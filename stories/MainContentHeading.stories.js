import React from 'react';
import { MainContentHeading } from '../src';

export default {
	component: MainContentHeading,
	title: 'Components/MainContentHeading',
};
  
const Template = args => {
	return <div role="region">
    <MainContentHeading {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  pageHeading: 'Sample Page Heading'
};
