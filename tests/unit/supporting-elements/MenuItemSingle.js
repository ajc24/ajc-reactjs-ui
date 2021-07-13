import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemSingle from '../../../src/ui-elements/supporting-elements/MenuItemSingle';

describe('MenuItemSingle', () => {
  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Single Menu Item"/>
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the single menu item parent component is assigned the specified id', () => {
      expect(wrapper.find('div div').prop('id')).toBe('test-menu-item-single');
    });

    it('verifies that the "ajc-menu-bar-item-single" class is assigned to the single menu item parent component', () => {
      expect(wrapper.find('div#test-menu-item-single').hasClass('ajc-menu-bar-item-single')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is assigned to the single menu item parent component', () => {
      expect(wrapper.find('div.ajc-menu-bar-item-single').hasClass('ajc-menu-bar-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is not assigned to the single menu item parent component', () => {
      expect(wrapper.find('div.ajc-menu-bar-item-single').hasClass('ajc-menu-bar-item-red')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-bar-item-content" class is assigned to the menu item content component', () => {
      expect(wrapper.find('div.ajc-menu-bar-item-single a').hasClass('ajc-menu-bar-item-content')).toBeTruthy();
    });

    it('verifies that the href attribute is assigned to the menu item content component', () => {
      expect(wrapper.find('a.ajc-menu-bar-item-content').prop('href')).toBe('/test-route');
    });

    it('verifies that the tab index attribute is assigned to the menu item content component', () => {
      expect(wrapper.find('a.ajc-menu-bar-item-content').prop('tabIndex')).toBe(0);
    });

    it('verfies that the title text is assigned to the menu item content component', () => {
      expect(wrapper.find('a.ajc-menu-bar-item-content').text().trim()).toBe('Single Menu Item');
    });
  });

  describe('Transferred props and rendering: MenuItemSingle with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Single Menu Item" colour="red"/>
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is not assigned to the single menu item parent component', () => {
      expect(wrapper.find('div.ajc-menu-bar-item-single').hasClass('ajc-menu-bar-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is assigned to the single menu item parent component', () => {
      expect(wrapper.find('div.ajc-menu-bar-item-single').hasClass('ajc-menu-bar-item-red')).toBeTruthy();
    });
  });
});
