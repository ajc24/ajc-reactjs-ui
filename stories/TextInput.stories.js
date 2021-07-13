import React from 'react';
import { TextInput } from '../src';

export default {
	component: TextInput,
	title: 'Form Items/TextInput',
};
  
const Template = args => {
	return <div role="region">
    <TextInput {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-text-input-id',
};

export const WithUpperSpacingAndCustomLabel = Template.bind({});
WithUpperSpacingAndCustomLabel.args = {
  id: 'text-input-with-upper-spacing-id',
  labelText: 'With Upper Spacing and Custom Label:',
  addUpperSpacing: true,
};

export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  id: 'text-input-with-character-limit-id',
  characterLimit: 30,
};
