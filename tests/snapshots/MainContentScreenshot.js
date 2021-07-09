import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentScreenshot } from '../../src';
import testImage from '../../stories/images/storybook-test-screenshot.png';

describe('HeaderLogo', () => {
  describe('Default props and rendering - Image src as an import of image data', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImage} />
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Default props and rendering - Image src as a string', () => {
    let jsonSnapshot;

    beforeAll(() => {
      const testImagePath = '../../stories/images/storybook-test-screenshot.png';
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
		      <MainContentScreenshot id="test-screenshot-id" caption="Test caption text content" imageSrc={testImagePath} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
