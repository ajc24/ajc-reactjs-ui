import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentPanel } from '../../src';

describe('MainContentPanel', () => {
  describe('Default props and rendering - Component with white background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(MainContentPanel.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPanel title="Test Title">
            This is a test.
          </MainContentPanel>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the role attribute is assigned to the root menu element', () => {
      expect(wrapper.find('div').at(0).prop('role')).toBe('region');
    });

    it('verifies that the "ajc-main-content-container" class is assigned to the root menu element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-main-content-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-text-black')).toBeTruthy();
    });
    
    it('verifies that the "ajc-default" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the "ajc-main-content-outer" class is assigned to the main content outer element', () => {
      expect(wrapper.find('div').at(1).hasClass('ajc-main-content-outer')).toBeTruthy();
    });

    it('verifies that the "ajc-main-content-inner" class is assigned to the main content inner element', () => {
      expect(wrapper.find('div').at(2).hasClass('ajc-main-content-inner')).toBeTruthy();
    });

    it('verifies that the child element text content is correctly rendered in the main content inner element', () => {
      expect(wrapper.find('div.ajc-main-content-inner').text()).toBe('This is a test.');
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(MainContentPanel.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPanel title="Test Title" colour="grey">
            This is a test.
          </MainContentPanel>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-grey-1')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with transparent background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(MainContentPanel.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPanel title="Test Title" colour="transparent">
            This is a test.
          </MainContentPanel>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(MainContentPanel.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPanel title="Test Title" colour="yellow">
            This is a test.
          </MainContentPanel>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the root menu element', () => {
      expect(wrapper.find('div.ajc-main-content-container').hasClass('ajc-background-yellow')).toBeTruthy();
    });
  });

  describe('componentDidMount() functionality', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <MainContentPanel title="Test Title" colour="transparent">
            This is a test.
          </MainContentPanel>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = '';
      document.body.classList.remove('ajc-body-full-screen');
    });

    it('verifies that the document title is set correctly', () => {
      expect(document.title).toBe('Test Title');
    });

    it('verifies that the "ajc-bodu-full-screen" class is assigned to the document body', () => {
      expect(document.body.classList.contains('ajc-body-full-screen')).toBeTruthy();
    });
  });
});
