import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { MainContentHeading } from '../../src';

describe('MainContentHeading', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContentHeading pageHeading="Test Page Heading" />
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
