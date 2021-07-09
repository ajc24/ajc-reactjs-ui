import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentScreenshot } from '../../src';
import testImage from '../../stories/images/storybook-test-screenshot.png';

describe('MainContentScreenshot', () => {
  const testImagePath = '../../stories/images/storybook-test-screenshot.png';

  describe('Default props and rendering - Image src as an import of image data', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImage} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-screenshot-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-screenshot-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-screenshot-container').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-screenshot-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-screenshot-image-inner" class is assigned to the image parent element', () => {
      expect(wrapper.find('div.ajc-screenshot-container div').hasClass('ajc-screenshot-image-inner')).toBeTruthy();
    });

    it('verifies that the id attribute is set to the image element', () => {
      expect(wrapper.find('div.ajc-screenshot-container div img').prop('id')).toBe('test-screenshot-id');
    });

    it('verifies that the "ajc-screenshot-image" class is assigned to the image element', () => {
      expect(wrapper.find('img#test-screenshot-id').hasClass('ajc-screenshot-image')).toBeTruthy();
    });

    it('verifies that the role attribute is set to the image element', () => {
      expect(wrapper.find('img#test-screenshot-id').prop('role')).toBe('presentation');
    });

    it('verifies that the src attribute is set to the image element', () => {
      expect(wrapper.find('img#test-screenshot-id').prop('src')).toBeDefined();
    });

    it('verifies that the "ajc-screenshot-caption" class is assigned to the caption element', () => {
      expect(wrapper.find('div.ajc-screenshot-container p').hasClass('ajc-screenshot-caption')).toBeTruthy();
    });

    it('verifies that the id attribute is set to the caption element', () => {
      expect(wrapper.find('p.ajc-screenshot-caption').prop('id')).toBe('test-screenshot-id-caption');
    });

    it('verifies that the caption text content is rendered', () => {
      expect(wrapper.find('p.ajc-screenshot-caption').text()).toBe('Test caption text content');
    });
  });

  describe('Default props and rendering - Image src as a string', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImagePath} />
        </React.Fragment>
      );
    });

    it('verifies that the src attribute is set to the image element', () => {
      expect(wrapper.find('img#test-screenshot-id').prop('src')).toBe(testImagePath);
    });
  });

  describe('disableMouseDownEvent() functionality', () => {
    let mockEventPreventDefault;
    let wrapper;

    beforeAll(() => {
      mockEventPreventDefault = jest.fn();
      wrapper = TestDev.mount(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImage} />
        </React.Fragment>
      );
      /* Invoke the method being tested */
      wrapper.find('img#test-screenshot-id').prop('onMouseDown')({
        preventDefault: mockEventPreventDefault,
      });
    });

    it('verifies that the mouse down event is disabled', () => {
      expect(mockEventPreventDefault.mock.calls).toHaveLength(1);
    });
  });

  describe('setImageLoaded() functionality', () => {
    let mockImage;
    let wrapper;

    beforeAll(() => {
      /* Add the mock image element for testing */
      mockImage = document.createElement('img');
      mockImage.setAttribute('id', 'test-screenshot-id');
      mockImage.style.opacity = 0;
      document.body.appendChild(mockImage);
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImage} />
        </React.Fragment>
      );
      /* Invoke the method being tested */
      wrapper.find('img#test-screenshot-id').prop('onLoad')();
    });

    afterAll(() => {
      document.body.removeChild(mockImage);
    });

    it('verifies that the image is set to displayed after the onLoad event is triggered', () => {
      expect(mockImage.style.opacity).toBe('1');
    });
  });
});
