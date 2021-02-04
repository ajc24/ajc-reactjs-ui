import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { HeaderLogo } from '../../src';
import testImage from '../../stories/images/storybook-header-logo.png';

describe('HeaderLogo', () => {
  describe('Default props and rendering - Image src as an import of image data', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderLogo id="test-logo-id" imageSrc={testImage} />
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
      const testImagePath = '../../stories/images/storybook-header-logo.png';
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderLogo id="test-logo-id" imageSrc={testImagePath} />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
