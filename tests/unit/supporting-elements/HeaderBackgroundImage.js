import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import HeaderBackgroundImage from '../../../src/ui-elements/supporting-elements/HeaderBackgroundImage';
import testImage from '../../../stories/images/storybook-header-bg.png';

describe('HeaderBackgroundImage', () => {
  const imageAlt = 'undefined header background image data / path';
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

    it('verifies that the alt attribute is set to the root image element', () => {
      expect(wrapper.find('img#test-image-id').prop('alt')).toBe(imageAlt);
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
});
