import React from 'react';
import { Footer } from '../src';

export default {
	component: Footer,
	title: 'Components/Footer',
};

const Template = args => {
	return <React.Fragment>
    <Footer {...args}>
      You may render any text content you wish inside the footer component.
    </Footer>
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {};

export const RedFooter = Template.bind({});
RedFooter.args = {
  colour: 'red'
};
