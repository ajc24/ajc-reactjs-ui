import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { HeaderTitleAndSubtitle } from '../../src';

describe('HeaderTitleAndSubtitle', () => {
  /* Create the test data for the menu */
  const titleText = 'Web Application Title';
  const subtitleText = 'Web application subtitle / description text goes here';
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Header title and subtitle with black text and white outline', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="banner">
          <HeaderTitleAndSubtitle id="test-header-title-and-subtitle-id" titleTextContent={titleText} subtitleTextContent={subtitleText} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Header title and subtitle with white text and black outline', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="banner">
          <HeaderTitleAndSubtitle id="test-header-title-and-subtitle-id" titleTextOutline="black" titleTextColour="white" titleTextContent={titleText} subtitleTextOutline="black" subtitleTextColour="white" subtitleTextContent={subtitleText} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
