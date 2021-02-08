import React from 'react';
import { MainContentText } from '../src';

export default {
	component: MainContentText,
	title: 'Components/MainContentText',
};
  
const Template = args => {
	return <div role="region">
    <MainContentText {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default MainContentText component using the paragraph property type.'
};

export const HeadingWithUpperSpacing = Template.bind({});
HeadingWithUpperSpacing.args = {
  addUpperSpacing: true,
  children: 'This is an example of a paragraph heading with upper spacing added',
  type: 'heading'
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  children: 'https://ajc24.github.io/ajc-reactjs-ui/?path=/story/components-maincontenttext--default',
  href: 'https://ajc24.github.io/ajc-reactjs-ui/?path=/story/components-maincontenttext--default',
  type: 'hyperlink'
};

export const ParagraphInItalics = Template.bind({});
ParagraphInItalics.args = {
  children: 'This is an example of a paragraph in which all text will appear in italics.',
  type: 'paragraph-italics'
};
