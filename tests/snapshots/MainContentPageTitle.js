import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentPageTitle } from '../../src';

describe('MainContentPageTitle', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContentPageTitle titleText="Test Page Title Text" />
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
