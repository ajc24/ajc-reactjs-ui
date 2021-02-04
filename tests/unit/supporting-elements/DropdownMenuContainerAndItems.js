import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TestDev } from 'ajc-jest-enzyme';
import DropdownMenuContainerAndItems from '../../../src/ui-elements/supporting-elements/DropdownMenuContainerAndItems';

describe('DropdownMenuContainerAndItems', () => {
  /* Test data */
  const testDropdownMenuItemsList = [
    {
      route: '/test-menu-item-1',
      title: 'Dropdown Menu Item 1',
    },
    {
      route: '/test-menu-item-2',
      title: 'Dropdown Menu Item 2',
    },
  ];

  describe('Default props and rendering - Component marked as hidden', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(1).prop('id')).toBe('test-id');
    });

    it('verifies that the "ajc-dropdown-menu-container" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-container')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-dropdown-menu-container-hidden" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-container-hidden')).toBeTruthy();
    });

    it('verifies that the "ajc-dropdown-menu-container-visible" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-container-visible')).toBeFalsy();
    });

    it('verifies that the "ajc-hidden" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-hidden')).toBeTruthy();
    });

    it('verifies that the "ajc-visible" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visible')).toBeFalsy();
    });

    it('verifies that the correct number of children menu item links are rendered', () => {
      expect(wrapper.find('div#test-id').children()).toHaveLength(testDropdownMenuItemsList.length);
    });

    it('verifies that the id attribute is set to the first menu item element', () => {
      expect(wrapper.find('a').at(0).prop('id')).toBe('test-id--dropdown-menu-item-0');
    });

    it('verifies that the "ajc-dropdown-menu-item" class is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-dropdown-menu-item')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-bar-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is not assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-bar-item-red')).toBeFalsy();
    });

    it('verifies that the href attribute is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').prop('href')).toBe(testDropdownMenuItemsList[0].route);
    });

    it('verifies that the title text is rendered correctly within the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').text().indexOf(testDropdownMenuItemsList[0].title)).toBeGreaterThan(-1);
    });

    it('verifies that the id attribute is set to the second menu item element', () => {
      expect(wrapper.find('a').at(1).prop('id')).toBe('test-id--dropdown-menu-item-1');
    });

    it('verifies that the "ajc-dropdown-menu-item" class is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-dropdown-menu-item')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-bar-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is not assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-bar-item-red')).toBeFalsy();
    });

    it('verifies that the href attribute is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').prop('href')).toBe(testDropdownMenuItemsList[1].route);
    });

    it('verifies that the title text is rendered correctly within the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').text().indexOf(testDropdownMenuItemsList[1].title)).toBeGreaterThan(-1);
    });
  });

  describe('Default props and rendering - Component marked as visible', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-hidden" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-hidden')).toBeFalsy();
    });

    it('verifies that the "ajc-visible" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visible')).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as hidden', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is not assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-bar-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-bar-item-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-bar-item-grey" class is not assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-bar-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-bar-item-red" class is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-bar-item-red')).toBeTruthy();
    });
  });

  describe('componentDidMount() method behaviour', () => {
    let addEventListenerSpy;
    let setDropdownMenuContainerPositionSpy;
    let wrapper;

    beforeAll(() => {
      jest.useFakeTimers();
      addEventListenerSpy = jest
        .spyOn(global.window, 'addEventListener');
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      addEventListenerSpy.mockClear();
      jest.runAllTimers();
    });

    afterAll(() => {
      addEventListenerSpy.mockRestore();
      setDropdownMenuContainerPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownMenuContainerPosition functionality is invoked', () => {
      expect(setDropdownMenuContainerPositionSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the global window addEventListener functionality is invoked', () => {
      expect(addEventListenerSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that an event listener is added for the "resize" event', () => {
      expect(addEventListenerSpy.mock.calls[0][0]).toBe('resize');
    });

    it('verifies that a "resize" event will invoke the setDropdownMenuContainerPosition functionality', () => {
      expect(addEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownMenuContainerPosition);
    });
  });

  describe('componentDidMount() method behaviour - Window resize event functionality', () => {
    let setDropdownMenuContainerPositionSpy;
    
    beforeAll(() => {
      jest.useFakeTimers();
      const wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest.spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition').mockImplementation(() => {});
      jest.runAllTimers();
      /* Trigger the event that will launch the functionality being tested */
      setDropdownMenuContainerPositionSpy.mockClear();
      window.dispatchEvent(new Event('resize'));
    });

    afterAll(() => {
      setDropdownMenuContainerPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownMenuContainerPosition functionality is invoked', () => {
      expect(setDropdownMenuContainerPositionSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('componentWillUnmount() method behaviour', () => {
    let removeEventListenerSpy;
    let setDropdownMenuContainerPositionSpy;
    let wrapper;

    beforeAll(() => {
      jest.useFakeTimers();
      removeEventListenerSpy = jest
        .spyOn(global.window, 'removeEventListener');
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      jest.runAllTimers();
      /* Invoke the method being tested */
      removeEventListenerSpy.mockClear();
      wrapper.find('DropdownMenuContainerAndItems').instance().componentWillUnmount();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
      setDropdownMenuContainerPositionSpy.mockRestore();
    });

    it('verifies that the global window removeEventListener functionality is invoked', () => {
      expect(removeEventListenerSpy.mock.calls).toHaveLength(1);
    });
    
    it('verifies that an event listener is removed for the "resize" event', () => {
      expect(removeEventListenerSpy.mock.calls[0][0]).toBe('resize');
    });

    it('verifies that the "resize" event functionality is removed', () => {
      expect(removeEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownMenuContainerPosition);
    });
  });

  describe('componentWillUnmount() method behaviour - Window resize event functionality', () => {
    let setDropdownMenuContainerPositionSpy;
    
    beforeAll(() => {
      jest.useFakeTimers();
      const wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      jest.runAllTimers();
      setDropdownMenuContainerPositionSpy.mockClear();
      wrapper.find('DropdownMenuContainerAndItems').instance().componentWillUnmount();
      /* Trigger the event that will launch the functionality being tested */
      window.dispatchEvent(new Event('resize'));
    });

    afterAll(() => {
      /* Restore all of the spies */
      setDropdownMenuContainerPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownMenuContainerPosition functionality is not invoked', () => {
      expect(setDropdownMenuContainerPositionSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('setDropdownMenuContainerPosition() method behaviour - Component with longer width and rendered within screen boundaries', () => {
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let mockDropdownContainerElement;
    let parentElement;
    let querySelectorSpy;
    let setDropdownMenuContainerPositionSpy;
    let wrapper;

    beforeAll(() => {
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      jest.runAllTimers();
      setDropdownMenuContainerPositionSpy.mockRestore();
      /* Set up the mock data for the test */
      parentElement = document.createElement('div');
      parentElement.setAttribute('id', 'test-parent-id');
      document.body.appendChild(parentElement);
      mockDropdownContainerElement = document.createElement('div');
      mockDropdownContainerElement.setAttribute('id', 'test-id');
      document.body.appendChild(mockDropdownContainerElement);
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(parentElement)
        .mockReturnValueOnce(mockDropdownContainerElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(parentElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 100,
            right: 375,
            bottom: 200,
            width: 375,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(mockDropdownContainerElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 924,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownMenuContainerPosition();
    });

    afterAll(() => {
      document.body.removeChild(parentElement);
      document.body.removeChild(mockDropdownContainerElement);
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the top css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.top).toBe('200px');
    });
    
    it('verifies that the left css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.left).toBe('100px');
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.minWidth).toBe('924px');
    });
  });

  describe('setDropdownMenuContainerPosition() method behaviour - Component with shorter width and rendered within screen boundaries', () => {
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let mockDropdownContainerElement;
    let parentElement;
    let querySelectorSpy;
    let setDropdownMenuContainerPositionSpy;
    let wrapper;

    beforeAll(() => {
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      jest.runAllTimers();
      setDropdownMenuContainerPositionSpy.mockRestore();
      /* Set up the mock data for the test */
      parentElement = document.createElement('div');
      parentElement.setAttribute('id', 'test-parent-id');
      document.body.appendChild(parentElement);
      mockDropdownContainerElement = document.createElement('div');
      mockDropdownContainerElement.setAttribute('id', 'test-id');
      document.body.appendChild(mockDropdownContainerElement);
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(parentElement)
        .mockReturnValueOnce(mockDropdownContainerElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(parentElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 100,
            right: 375,
            bottom: 200,
            width: 500,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(mockDropdownContainerElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 100,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownMenuContainerPosition();
    });

    afterAll(() => {
      document.body.removeChild(parentElement);
      document.body.removeChild(mockDropdownContainerElement);
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.minWidth).toBe('500px');
    });
  });

  describe('setDropdownMenuContainerPosition() method behaviour - Component with longer width and exceeding screen boundaries', () => {
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let mockDropdownContainerElement;
    let parentElement;
    let querySelectorSpy;
    let setDropdownMenuContainerPositionSpy;
    let wrapper;

    beforeAll(() => {
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      setDropdownMenuContainerPositionSpy = jest
        .spyOn(wrapper.find('DropdownMenuContainerAndItems').instance(), 'setDropdownMenuContainerPosition')
        .mockImplementation(() => {});
      jest.runAllTimers();
      setDropdownMenuContainerPositionSpy.mockRestore();
      /* Set up the mock data for the test */
      parentElement = document.createElement('div');
      parentElement.setAttribute('id', 'test-parent-id');
      document.body.appendChild(parentElement);
      mockDropdownContainerElement = document.createElement('div');
      mockDropdownContainerElement.setAttribute('id', 'test-id');
      document.body.appendChild(mockDropdownContainerElement);
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(parentElement)
        .mockReturnValueOnce(mockDropdownContainerElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(parentElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 500,
            right: 1024,
            bottom: 200,
            width: 524,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(mockDropdownContainerElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 525,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownMenuContainerPosition();
    });

    afterAll(() => {
      document.body.removeChild(parentElement);
      document.body.removeChild(mockDropdownContainerElement);
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the top css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.top).toBe('200px');
    });
    
    it('verifies that the left css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.left).toBe('499px');
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(mockDropdownContainerElement.style.minWidth).toBe('525px');
    });
  });
});
