import React from 'react';
import { SmallMenuIcon } from '../src';

export default {
	component: SmallMenuIcon,
	title: 'Components/SmallMenuIcon',
};
  
const Template = args => {
	return <React.Fragment>
    <SmallMenuIcon {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
