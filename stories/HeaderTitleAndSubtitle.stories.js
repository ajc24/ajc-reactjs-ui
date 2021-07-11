import React from 'react';
import { HeaderTitleAndSubtitle } from '../src';

export default {
	component: HeaderTitleAndSubtitle,
	title: 'Header Section/HeaderTitleAndSubtitle',
};
  
const Template = args => {
	return <React.Fragment>
		<HeaderTitleAndSubtitle {...args} />
	</React.Fragment>;
}

export const Default = Template.bind({});
Default.args = {
	id: 'header-title-and-subtitle-default-id',
  subtitleTextContent: 'The subtitle text content is displayed here',
  titleTextContent: 'Web Application Title'
};

export const BlackOutlineWhiteText = Template.bind({});
BlackOutlineWhiteText.args = {
	id: 'header-title-and-subtitle-black-outline-white-text-id',
  subtitleTextColour: 'white',
  subtitleTextContent: 'The subtitle text content is displayed here',
  subtitleTextOutline: 'black',
  titleTextColour: 'white',
  titleTextContent: 'Web Application Title',
  titleTextOutline: 'black'
};

export const WithHeadingIndent = Template.bind({});
WithHeadingIndent.args = {
  headingIndent: 150,
	id: 'header-title-and-subtitle-with-heading-indent-id',
  subtitleTextContent: 'The subtitle text content is displayed here',
  titleTextContent: 'Web Application Title'
};
