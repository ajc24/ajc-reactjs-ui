import React from 'react';
import { FileUploader } from '../src';

export default {
	component: FileUploader,
	title: 'Form Items/FileUploader',
};
  
const Template = args => {
	return <div role="region">
    <FileUploader {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-file-uploader-id',
};

export const RedButtonsAndUpperSpacing = Template.bind({});
RedButtonsAndUpperSpacing.args = {
  id: 'red-file-uploader-with-upper-spacing-id',
  addUpperSpacing: true,
  colour: 'red',
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  id: 'file-uploader-with-custom-title-id',
  titleTextContent: 'Custom File Uploader Title:'
};
