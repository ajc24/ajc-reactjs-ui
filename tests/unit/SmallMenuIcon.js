import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { SmallMenuIcon } from '../../src';

describe('SmallMenuIcon', () => {
  describe('Default props and rendering - Component in black colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallMenuIcon />
        </React.Fragment>
      );
    });

    it('verifies that the role attribute is set to the root element', () => {
      expect(wrapper.find('div').at(0).prop('role')).toBe('presentation');
    });

    it('verifies that the "ajc-small-menu-icon-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-small-menu-icon-container')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the root element has the correct number of child elements', () => {
      expect(wrapper.find('div').at(0).children()).toHaveLength(3);
    });

    it('verifies that the "ajc-small-menu-icon-upper" class is assigned to the first child element', () => {
      expect(wrapper.find('div').at(0).childAt(0).hasClass('ajc-small-menu-icon-upper')).toBeTruthy();
    });

    it('verifies that the "ajc-background-black" class is assigned to the first child element', () => {
      expect(wrapper.find('div').at(0).childAt(0).hasClass('ajc-background-black')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the first child element', () => {
      expect(wrapper.find('div').at(0).childAt(0).hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-small-menu-icon-upper" class is assigned to the second child element', () => {
      expect(wrapper.find('div').at(0).childAt(1).hasClass('ajc-small-menu-icon-upper')).toBeTruthy();
    });

    it('verifies that the "ajc-background-black" class is assigned to the second child element', () => {
      expect(wrapper.find('div').at(0).childAt(1).hasClass('ajc-background-black')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the second child element', () => {
      expect(wrapper.find('div').at(0).childAt(1).hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-small-menu-icon-lower" class is assigned to the third child element', () => {
      expect(wrapper.find('div').at(0).childAt(2).hasClass('ajc-small-menu-icon-lower')).toBeTruthy();
    });

    it('verifies that the "ajc-background-black" class is assigned to the third child element', () => {
      expect(wrapper.find('div').at(0).childAt(2).hasClass('ajc-background-black')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the third child element', () => {
      expect(wrapper.find('div').at(0).childAt(2).hasClass('ajc-background-white')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component in white colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallMenuIcon colour="white" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-black" class is not assigned to the first child element', () => {
      expect(wrapper.find('div').at(0).childAt(0).hasClass('ajc-background-black')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the first child element', () => {
      expect(wrapper.find('div').at(0).childAt(0).hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-black" class is not assigned to the second child element', () => {
      expect(wrapper.find('div').at(0).childAt(1).hasClass('ajc-background-black')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the second child element', () => {
      expect(wrapper.find('div').at(0).childAt(1).hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-black" class is not assigned to the third child element', () => {
      expect(wrapper.find('div').at(0).childAt(2).hasClass('ajc-background-black')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the third child element', () => {
      expect(wrapper.find('div').at(0).childAt(2).hasClass('ajc-background-white')).toBeTruthy();
    });
  });
});
