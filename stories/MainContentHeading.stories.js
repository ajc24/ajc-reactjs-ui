import React from 'react';
import { MainContentHeading } from '../src';

export default {
	component: MainContentHeading,
	title: 'Components/MainContentHeading',
};
  
const Template = args => {
	return <React.Fragment>
    <MainContentHeading {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {
  pageHeading: 'Sample Panel Heading'
};
