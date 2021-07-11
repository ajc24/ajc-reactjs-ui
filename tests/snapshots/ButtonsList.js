import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { ButtonsList } from '../../src';

describe('Buttons List', () => {
  const singleButtonList = [
    {
      id: 'test-single-button-id',
      onClick: jest.fn(),
      title: 'Test Default Single Grey Button',
      type: 'button',
    },
  ];
  const singleSubmitButtonList = [
    {
      id: 'test-single-submit-button-id',
      onClick: jest.fn(),
      title: 'Test Submit Button',
      type: 'submit',
    },
  ];
  const twoButtonsList = [
    {
      id: 'test-button-1-id',
      onClick: jest.fn(),
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: 'test-button-2-id',
      onClick: jest.fn(),
      title: 'Test Button 2',
      type: 'button',
    },
  ];
  describe('Default props and rendering - Single grey button', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ButtonsList buttonsList={singleButtonList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Two center aligned red buttons', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ButtonsList colour="red" alignment="center-align" buttonsList={twoButtonsList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Single right aligned grey submit button', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ButtonsList colour="grey" alignment="right-align" buttonsList={singleSubmitButtonList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
