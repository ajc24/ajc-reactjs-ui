import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import HeaderBackgroundImage from '../../../src/ui-elements/supporting-elements/HeaderBackgroundImage';
import testImage from '../../../stories/images/storybook-header-bg.png';

describe('HeaderBackgroundImage', () => {
  const testImagePath = '../../../stories/story-content/images/storybook-header-bg.png';

  describe('Default props and rendering - Image src as an import of image data', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="banner">
          <HeaderBackgroundImage id="test-image-id" imageSrc={testImage} />
        </div>
      );
    });

    it('verifies that the id attribute is set to the root image element', () => {
      expect(wrapper.find('img').prop('id')).toBe('test-image-id');
    });

    it('verifies that the "ajc-header-image" class is assigned to the root image element', () => {
      expect(wrapper.find('img#test-image-id').hasClass('ajc-header-image')).toBeTruthy();
    });

    it('verifies that the role attribute is set to the root image element', () => {
      expect(wrapper.find('img#test-image-id').prop('role')).toBe('presentation');
    });

    it('verifies that the src attribute is set to the root image element', () => {
      expect(wrapper.find('img#test-image-id').prop('src')).toBeDefined();
    });
  });

  describe('Default props and rendering - Image src as a string', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="banner">
          <HeaderBackgroundImage id="test-image-id" imageSrc={testImagePath} />
        </div>
      );
    });

    it('verifies that the src attribute is set to the root image element', () => {
      expect(wrapper.find('img#test-image-id').prop('src')).toBe(testImagePath);
    });
  });

  describe('setImageLoaded() functionality', () => {
    let mockImage;
    let wrapper;

    beforeAll(() => {
      /* Add the mock image element for testing */
      mockImage = document.createElement('img');
      mockImage.setAttribute('id', 'test-image-id');
      mockImage.style.opacity = 0;
      document.body.appendChild(mockImage);
      /* Mount the component */
      wrapper = TestDev.mount(
        <div role="banner">
          <HeaderBackgroundImage id="test-image-id" imageSrc={testImage} />
        </div>
      );
      /* Invoke the method being tested */
      wrapper.find('img').prop('onLoad')();
    });

    afterAll(() => {
      document.body.removeChild(mockImage);
    });

    it('verifies that the image is set to displayed after the onLoad event is triggered', () => {
      expect(mockImage.style.opacity).toBe('1');
    });
  });
});
