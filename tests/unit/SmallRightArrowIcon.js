import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { SmallRightArrowIcon } from '../../src';

describe('SmallRightArrowIcon', () => {
  describe('Default props and rendering - Component in black colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallRightArrowIcon />
        </React.Fragment>
      );
    });

    it('verifies that the role attribute is set to the root element', () => {
      expect(wrapper.find('div').prop('role')).toBe('presentation');
    });

    it('verifies that the "ajc-small-right-arrow-icon-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-small-right-arrow-icon-container')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-border-colour-black" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-border-colour-black')).toBeTruthy();
    });

    it('verifies that the "ajc-border-colour-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-border-colour-white')).toBeFalsy();
    });
  });

  describe('Default props and rendering - Component in white colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallRightArrowIcon colour="white" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-border-colour-black" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-border-colour-black')).toBeFalsy();
    });

    it('verifies that the "ajc-border-colour-white" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-border-colour-white')).toBeTruthy();
    });
  });
});
