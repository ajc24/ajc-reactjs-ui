import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentPageTitle } from '../../src';

describe('MainContentPageTitle', () => {
  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPageTitle titleText="Test Page Heading" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-main-content-heading-container" class is assigned to the root menu element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-main-content-heading-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-heading-container').hasClass('ajc-text-black')).toBeTruthy();
    });
    
    it('verifies that the "ajc-default" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-heading-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-main-content-heading-text" class is assigned to the page heading element', () => {
			expect(wrapper.find('div.ajc-main-content-heading-container h1').hasClass('ajc-main-content-heading-text')).toBeTruthy();
		});

    it('verifies that the title text content property is set correctly', () => {
			expect(wrapper.find('h1.ajc-main-content-heading-text').text()).toBe('Test Page Heading');
		});

    it('verifies that the "ajc-main-content-heading-divider-outer" class is assigned to the outer divider element', () => {
      expect(wrapper.find('div.ajc-main-content-heading-container div').at(0).hasClass('ajc-main-content-heading-divider-outer')).toBeTruthy();
    });

    it('verifies that the role attribute is set to the outer divider element', () => {
      expect(wrapper.find('div.ajc-main-content-heading-divider-outer').prop('role')).toBe('presentation');
    });

    it('verifies that the "ajc-main-content-heading-divider-inner" class is assigned to the inner divider element', () => {
      expect(wrapper.find('div.ajc-main-content-heading-divider-outer div').hasClass('ajc-main-content-heading-divider-inner')).toBeTruthy();
    });
  });
});
