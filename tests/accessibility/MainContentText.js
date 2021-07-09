import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentText } from '../../src';

describe('MainContentText', () => {
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Paragraph component', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <MainContentText>
            Test paragraph text.
          </MainContentText>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Heading component with upper spacing', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <MainContentText type="heading" addUpperSpacing={true}>
            Test heading text
          </MainContentText>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Hyperlink component', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <MainContentText type="hyperlink" href="http://www.test.com">
            Test hyperlink
          </MainContentText>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Paragraph in italics component', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <MainContentText type="paragraph-italics">
            Test paragraph in italics text.
          </MainContentText>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
