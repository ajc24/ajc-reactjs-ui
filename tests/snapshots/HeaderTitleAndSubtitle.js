import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { HeaderTitleAndSubtitle } from '../../src';

describe('HeaderTitleAndSubtitle', () => {
  /* Test data */
  const titleText = 'Web Application Title';
  const subtitleText = 'Web application subtitle / description text goes here';

  describe('Default props and rendering - Header title and subtitle with black text and white outline', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderTitleAndSubtitle id="test-header-title-and-subtitle-id" titleTextContent={titleText} subtitleTextContent={subtitleText} />
        </div>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Header title and subtitle with white text and black outline', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="banner">
          <HeaderTitleAndSubtitle id="test-header-title-and-subtitle-id" titleTextOutline="black" titleTextColour="white" titleTextContent={titleText} subtitleTextOutline="black" subtitleTextColour="white" subtitleTextContent={subtitleText} />
        </div>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
