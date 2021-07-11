import React from 'react';
import { SmallRightArrowIcon } from '../src';

export default {
	component: SmallRightArrowIcon,
	title: 'Icon Components/SmallRightArrowIcon',
};
  
const Template = args => {
	return <React.Fragment>
    <SmallRightArrowIcon {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
