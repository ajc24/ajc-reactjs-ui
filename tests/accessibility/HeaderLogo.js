import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { HeaderLogo } from '../../src';
import testImage from '../../stories/images/storybook-header-logo.png';

describe('HeaderLogo', () => {
  /* Retrieve the timeout for jest-axe tests */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Image src as an import of image data', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="banner">
          <HeaderLogo id="test-logo-id" imageSrc={testImage} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Default props and rendering - Image src as a string', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="banner">
          <HeaderLogo id="test-logo-id" imageSrc="../../stories/images/storybook-header-logo.png" />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
