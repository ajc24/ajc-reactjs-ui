import React from 'react';
import { ButtonsList } from '../src';

export default {
	component: ButtonsList,
	title: 'Form Items/ButtonsList',
};
  
const Template = args => {
	return <div role="region">
    <ButtonsList {...args} />
  </div>
}

export const DefaultSingleButton = Template.bind({});
DefaultSingleButton.args = {
  buttonsList: [
    {
      id: `default-single-button-1`,
      onClick: () => { alert('Clicked Test Button 1'); },
      title: 'Test Button 1',
      type: 'button',
    }
  ]
};

export const DefaultButtonsList = Template.bind({});
DefaultButtonsList.args = {
  buttonsList: [
    {
      id: `default-multiple-buttons-1`,
      onClick: () => { alert('Clicked Test Button 1'); },
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: `default-multiple-buttons-2`,
      onClick: () => { alert('Clicked Test Button 2'); },
      title: 'Test Button 2',
      type: 'button',
    },
    {
      id: `default-multiple-buttons-3`,
      onClick: () => { alert('Clicked Test Button 3'); },
      title: 'Test Button 3',
      type: 'button',
    }
  ]
};

export const CenteredRedButtonsList = Template.bind({});
CenteredRedButtonsList.args = {
  alignment: 'center-align',
  colour: 'red',
  buttonsList: [
    {
      id: `centered-multiple-buttons-red-1`,
      onClick: () => { alert('Clicked Test Button 1'); },
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: `centered-multiple-buttons-red-2`,
      onClick: () => { alert('Clicked Test Button 2'); },
      title: 'Test Button 2',
      type: 'button',
    },
    {
      id: `centered-multiple-buttons-red-3`,
      onClick: () => { alert('Clicked Test Button 3'); },
      title: 'Test Button 3',
      type: 'button',
    }
  ]
};

export const RightAlignedButtonsList = Template.bind({});
RightAlignedButtonsList.args = {
  alignment: 'right-align',
  buttonsList: [
    {
      id: `right-aligned-buttons-1`,
      onClick: () => { alert('Clicked Test Button 1'); },
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: `right-aligned-buttons-2`,
      onClick: () => { alert('Clicked Test Button 2'); },
      title: 'Test Button 2',
      type: 'button',
    },
    {
      id: `right-aligned-buttons-3`,
      onClick: () => { alert('Clicked Test Button 3'); },
      title: 'Test Button 3',
      type: 'button',
    }
  ]
};

export const SingleRedSubmitButton = Template.bind({});
SingleRedSubmitButton.args = {
  colour: 'red',
  buttonsList: [
    {
      id: 'single-red-submit-button-1',
      onClick: (event) => { event.preventDefault(); alert('Clicked Submit Button 1'); },
      title: 'Submit Button 1',
      type: 'submit',
    }
  ]
};
