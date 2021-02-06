import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Footer } from '../../src';

describe('Footer', () => {
  describe('Default props and rendering - Component with grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Footer>
            This is a test.
          </Footer>
        </React.Fragment>
      );
    });

    it('verifies that the role attribute is assigned to the root menu element', () => {
      expect(wrapper.find('div').at(0).prop('role')).toBe('contentinfo');
    });

    it('verifies that the "ajc-footer-container" class is assigned to the root menu element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-footer-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-white" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-text-white')).toBeTruthy();
    });
    
    it('verifies that the "ajc-default" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-footer-content-outer" class is assigned to the footer content outer element', () => {
      expect(wrapper.find('div.ajc-footer-container div').at(0).hasClass('ajc-footer-content-outer')).toBeTruthy();
    });

    it('verifies that the "ajc-footer-content-inner" class is assigned to the main content inner element', () => {
      expect(wrapper.find('div.ajc-footer-content-outer div').hasClass('ajc-footer-content-inner')).toBeTruthy();
    });

    it('verifies that the child element text content is correctly rendered in the main content inner element', () => {
      expect(wrapper.find('div.ajc-footer-content-inner').text()).toBe('This is a test.');
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Footer colour="red">
            This is a test.
          </Footer>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-footer-container').hasClass('ajc-background-red')).toBeTruthy();
    });
  });
});
