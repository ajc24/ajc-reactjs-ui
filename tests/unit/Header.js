import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Header } from '../../src';
import testImage from '../../stories/story-content/images/storybook-header-bg.png';

describe('Header', () => {
  describe('Default props and rendering - Header with no top border and transparent background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies that the role attribute is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).prop('role')).toBe('banner');
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('test-header-id');
    });

    it('verifies that the "ajc-header-container" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-container')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-top-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-top-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the HeaderBackgroundImage component is not rendered', () => {
      expect(wrapper.exists('HeaderBackgroundImage')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-outer" class is assigned to the outer content element', () => {
      expect(wrapper.find('div#test-header-id div').at(0).hasClass('ajc-header-content-outer')).toBeTruthy();
    });

    it('verifies that the "ajc-header-content-inner" class is assigned to the inner content element', () => {
      expect(wrapper.find('div#test-header-id div.ajc-header-content-outer div').hasClass('ajc-header-content-inner')).toBeTruthy();
    });

    it('verifies that the header content is rendered as a child of the inner content element', () => {
      expect(wrapper.find('div.ajc-header-content-inner').text()).toBe('Header text content.');
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-header-border-top-grey" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-top-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" imageId="test-header-image-id" imageSrc={testImage}>
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-header-border-top-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-top-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-red')).toBeTruthy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the HeaderBackgroundImage component is rendered', () => {
      expect(wrapper.exists('HeaderBackgroundImage')).toBeTruthy();
    });

    it('verifies that the imageId property is passed to the HeaderBackgroundImage component', () => {
      expect(wrapper.find('HeaderBackgroundImage').prop('id')).toBe('test-header-image-id');
    });

    it('verifies that the imageSrc property is passed to the HeaderBackgroundImage component', () => {
      expect(wrapper.find('HeaderBackgroundImage').prop('imageSrc')).toBeDefined();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-header-border-top-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-top-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-header-border-top-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-grey-1')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id').hasClass('ajc-background-yellow')).toBeTruthy();
    });
  });
});
