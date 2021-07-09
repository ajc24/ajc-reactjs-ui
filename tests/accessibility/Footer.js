import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { Footer } from '../../src';

describe('Footer', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Component with grey background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Footer>
            This is a test.
          </Footer>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Footer colour="red">
            This is a test.
          </Footer>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
