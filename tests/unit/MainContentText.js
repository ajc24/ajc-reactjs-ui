import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentText } from '../../src';

describe('MainContentText', () => {
  describe('Default props and rendering - Paragraph component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentText>
            Test paragraph text.
          </MainContentText>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-text-paragraph-container" class is assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-text-paragraph-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').hasClass('ajc-text-black')).toBeTruthy();
    });
    
    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-text-paragraph-upper-spacing" class is not assigned to the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').hasClass('ajc-text-paragraph-upper-spacing')).toBeFalsy();
    });

    it('verifies that a paragraph heading element is not rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container b')).toBeFalsy();
    });

    it('verifies that a hyperlink element is not rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container a')).toBeFalsy();
    });

    it('verifies that a paragraph italics element is not rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container i')).toBeFalsy();
    });

    it('verifies that the paragraph text content is rendered within the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').text()).toBe('Test paragraph text.');
    });
  });

  describe('Transferred props and rendering - Hyperlink without href property set renders a paragraph component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentText type="hyperlink">
            Test hyperlink text.
          </MainContentText>
        </React.Fragment>
      );
    });

    it('verifies that a hyperlink element is not rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container a')).toBeFalsy();
    });

    it('verifies that the paragraph text content is rendered within the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').text()).toBe('Test hyperlink text.');
    });
  });

  describe('Transferred props and rendering - Heading component with upper spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentText type="heading" addUpperSpacing={true}>
            Test heading text
          </MainContentText>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-text-paragraph-upper-spacing" class is assigned to the root element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container').hasClass('ajc-text-paragraph-upper-spacing')).toBeTruthy();
    });

    it('verifies that a paragraph heading element is rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container b')).toBeTruthy();
    });

    it('verifies that the "ajc-text-paragraph-heading" class is assigned to the paragraph heading element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container b').hasClass('ajc-text-paragraph-heading')).toBeTruthy();
    });

    it('verifies that the heading text content is rendered within the paragraph heading element', () => {
      expect(wrapper.find('b.ajc-text-paragraph-heading').text()).toBe('Test heading text');
    });
  });

  describe('Transferred props and rendering - Hyperlink component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentText type="hyperlink" href="http://www.test.com">
            Test hyperlink
          </MainContentText>
        </React.Fragment>
      );
    });

    it('verifies that a hyperlink element is rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container a')).toBeTruthy();
    });

    it('verifies that the "ajc-hyperlink" class is assigned to the hyperlink element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container a').hasClass('ajc-hyperlink')).toBeTruthy();
    });

    it('verifies that the href attribute is set to the hyperlink element', () => {
      expect(wrapper.find('a.ajc-hyperlink').prop('href')).toBe('http://www.test.com');
    });

    it('verifies that the hyperlink text content is rendered within the hyperlink element', () => {
      expect(wrapper.find('a.ajc-hyperlink').text()).toBe('Test hyperlink');
    });
  });

  describe('Transferred props and rendering - Paragraph in italics component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentText type="paragraph-italics">
            Test paragraph in italics text.
          </MainContentText>
        </React.Fragment>
      );
    });

    it('verifies that a paragraph italics element is rendered as a child of the root element', () => {
      expect(wrapper.exists('p.ajc-text-paragraph-container i')).toBeTruthy();
    });

    it('verifies that the paragraph text content is rendered within the paragraph italics element', () => {
      expect(wrapper.find('p.ajc-text-paragraph-container i').text()).toBe('Test paragraph in italics text.');
    });
  });
});
