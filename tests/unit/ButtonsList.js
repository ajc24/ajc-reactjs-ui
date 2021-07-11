import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { ButtonsList } from '../../src';

describe('Buttons List', () => {
  const mockOnClick = jest.fn();
  const mockOnClickLeft = jest.fn();
  const mockOnClickRight = jest.fn();
  const singleButtonList = [
    {
      id: 'test-single-button-id',
      onClick: mockOnClick,
      title: 'Test Default Single Grey Button',
      type: 'button',
    },
  ];
  const twoButtonsList = [
    {
      id: 'test-button-1-id',
      onClick: mockOnClickLeft,
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: 'test-button-2-id',
      onClick: mockOnClickRight,
      title: 'Test Button 2',
      type: 'button',
    },
  ];

  describe('Default props and rendering - Single grey button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ButtonsList buttonsList={singleButtonList} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-buttons-list-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-buttons-list-container')).toBeTruthy();
    });

    it('verifies that the "ajc-buttons-list-container-center-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-center-align')).toBeFalsy();
    });

    it('verifies that the "ajc-buttons-list-container-right-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-right-align')).toBeFalsy();
    });

    it('verifies that the "ajc-buttons-list-container-left-align" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-left-align')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that a single button is rendered as a child of the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').children()).toHaveLength(1);
    });

    it('verifies that the id attribute is set to the button element', () => {
      expect(wrapper.find('button').prop('id')).toBe('test-single-button-id');
    });

    it('verifies that the "ajc-button" class is assigned to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').hasClass('ajc-button')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-button-red" class is not assigned to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').hasClass('ajc-button-red')).toBeFalsy();
    });

    it('verifies that the "ajc-button-grey" class is assigned to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').hasClass('ajc-button-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-button-right-spacing" class is not assigned to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').hasClass('ajc-button-right-spacing')).toBeFalsy();
    });

    it('verifies that the type attribute is set to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').prop('type')).toBe('button');
    });

    it('verifies that the onClick functionality is set to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').prop('onClick')).toBeDefined();
    });

    it('verifies that the title text content is set to the button element', () => {
      expect(wrapper.find('button#test-single-button-id').text()).toBe('Test Default Single Grey Button');
    });
  });

  describe('onClick() method behaviour - Default single grey button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ButtonsList buttonsList={singleButtonList} />
        </React.Fragment>
      );
      /* Invoke the onClick functionality */
      wrapper.find('button#test-single-button-id').prop('onClick')();
    });

    afterAll(() => {
      mockOnClick.mockClear();
    });

    it('verifies that the onClick functionality is invoked', () => {
      expect(mockOnClick.mock.calls).toHaveLength(1);
    });
  });

  describe('Transferred props and rendering - Two center aligned red buttons', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ButtonsList colour="red" alignment="center-align" buttonsList={twoButtonsList} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-buttons-list-container-center-align" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-center-align')).toBeTruthy();
    });

    it('verifies that the "ajc-buttons-list-container-right-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-right-align')).toBeFalsy();
    });

    it('verifies that the "ajc-buttons-list-container-left-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-left-align')).toBeFalsy();
    });

    it('verifies that two buttons are rendered as a child of the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').children()).toHaveLength(2);
    });

    it('verifies that the "ajc-button-red" class is not assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-button-red')).toBeTruthy();
    });

    it('verifies that the "ajc-button-grey" class is assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-button-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-button-right-spacing" class is assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-button-right-spacing')).toBeTruthy();
    });

    it('verifies that the title text content is set to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').text()).toBe('Test Button 1');
    });

    it('verifies that the id attribute is set to the rightmost button element', () => {
      expect(wrapper.find('button').at(1).prop('id')).toBe('test-button-2-id');
    });

    it('verifies that the "ajc-button" class is assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-button-red" class is assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button-red')).toBeTruthy();
    });

    it('verifies that the "ajc-button-grey" class is not assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-button-right-spacing" class is not assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button-right-spacing')).toBeFalsy();
    });

    it('verifies that the type attribute is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').prop('type')).toBe('button');
    });

    it('verifies that the onClick functionality is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').prop('onClick')).toBeDefined();
    });

    it('verifies that the title text content is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').text()).toBe('Test Button 2');
    });
  });

  describe('onClick() method behaviour - Two center aligned red buttons', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ButtonsList colour="red" alignment="center-align" buttonsList={twoButtonsList} />
        </React.Fragment>
      );
      /* Invoke the onClick functionality in both buttons */
      wrapper.find('button#test-button-1-id').prop('onClick')();
      wrapper.find('button#test-button-2-id').prop('onClick')();
    });

    afterAll(() => {
      mockOnClickLeft.mockClear();
      mockOnClickRight.mockClear();
    });

    it('verifies that the onClick functionality for the leftmost button is invoked', () => {
      expect(mockOnClickLeft.mock.calls).toHaveLength(1);
    });

    it('verifies that the onClick functionality for the rightmost button is invoked', () => {
      expect(mockOnClickRight.mock.calls).toHaveLength(1);
    });
  });

  describe('Transferred props and rendering - Single right aligned grey button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ButtonsList colour="grey" alignment="right-align" buttonsList={singleButtonList} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-buttons-list-container-center-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-center-align')).toBeFalsy();
    });

    it('verifies that the "ajc-buttons-list-container-right-align" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-right-align')).toBeTruthy();
    });

    it('verifies that the "ajc-buttons-list-container-left-align" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-buttons-list-container').hasClass('ajc-buttons-list-container-left-align')).toBeFalsy();
    });
  });
});
