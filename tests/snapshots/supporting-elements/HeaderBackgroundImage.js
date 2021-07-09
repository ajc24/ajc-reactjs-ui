import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import HeaderBackgroundImage from '../../../src/ui-elements/supporting-elements/HeaderBackgroundImage';
import testImage from '../../../stories/images/storybook-header-bg.png';

describe('HeaderBackgroundImage', () => {
  describe('Default props and rendering - Image src as an import of image data', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderBackgroundImage id="test-image-id" imageSrc={testImage} />
        </div>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Default props and rendering - Image src as a string', () => {
    let jsonSnapshot;

    beforeAll(() => {
      const testImagePath = '../../../stories/images/storybook-header-bg.png';
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderBackgroundImage id="test-image-id" imageSrc={testImagePath} />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
