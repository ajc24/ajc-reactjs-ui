import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { HeaderTitleAndSubtitle } from '../../src';

describe('HeaderTitleAndSubtitle', () => {
	/* Test data */
	const rootId = 'test-header-title-and-subtitle-id';
  const titleText = 'Web Application Title';
  const subtitleText = 'Web application subtitle / description text goes here';

  describe('Default props and rendering - Header title and subtitle with black text and white outline', () => {
		let divMock;
		let wrapper;

    beforeAll(() => {
			/* Create the mocked div for the componentDidMount function */
			divMock = document.createElement('div');
			divMock.setAttribute('id', rootId);
			divMock.style.paddingLeft = '0px';
			document.body.appendChild(divMock);
			/* Mount the component */
      wrapper = TestDev.mount(
        <div role="banner">
          <HeaderTitleAndSubtitle id={rootId} titleTextContent={titleText} subtitleTextContent={subtitleText} />
        </div>
      );
		});
		
		afterAll(() => {
			/* Remove the mocked div */
			document.body.removeChild(divMock);
		});
    
    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(1).prop('id')).toBe(rootId);
    });

    it('verifies that the "ajc-header-title-subtitle-container" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-title-and-subtitle-id').hasClass('ajc-header-title-subtitle-container')).toBeTruthy();
		});
		
		it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-header-title-subtitle-container').hasClass('ajc-default')).toBeTruthy();
		});
		
		it('verifies that the "ajc-header-title-subtitle-top" class is assigned to the title container element', () => {
			expect(wrapper.find('div.ajc-header-title-subtitle-container div').at(0).hasClass('ajc-header-title-subtitle-top')).toBeTruthy();
		});

		it('verifies that the "ajc-header-title-subtitle-bottom" class is assigned to the subtitle container element', () => {
			expect(wrapper.find('div.ajc-header-title-subtitle-container div').at(1).hasClass('ajc-header-title-subtitle-bottom')).toBeTruthy();
		});

		it('verifies that the "ajc-header-text-outline-black" class is not assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-header-text-outline-black')).toBeFalsy();
		});

		it('verifies that the "ajc-header-text-outline-white" class is assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-header-text-outline-white')).toBeTruthy();
		});

		it('verifies that the "ajc-text-white" class is not assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-text-white')).toBeFalsy();
		});

		it('verifies that the "ajc-text-black" class is assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-text-black')).toBeTruthy();
		});

		it('verifies that the title text content property is set correctly', () => {
			expect(wrapper.find('h1').text()).toBe(titleText);
		});

		it('verifies that the "ajc-header-text-outline-black" class is not assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-header-text-outline-black')).toBeFalsy();
		});

		it('verifies that the "ajc-header-text-outline-white" class is assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-header-text-outline-white')).toBeTruthy();
		});

		it('verifies that the "ajc-text-white" class is not assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-text-white')).toBeFalsy();
		});

		it('verifies that the "ajc-text-black" class is assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-text-black')).toBeTruthy();
		});

		it('verifies that the subtitle text content property is set correctly', () => {
			expect(wrapper.find('h2').text()).toBe(subtitleText);
		});

		it('verifies that the heading indent is not assigned to the root element', () => {
			expect(document.querySelector(`div[id="${rootId}"]`).style.paddingLeft).toBe('0px');
		});
  });

  describe('Transferred props and rendering - Header title and subtitle with white text and black outline', () => {
		let divMock;
		let wrapper;

    beforeAll(() => {
			/* Create the mocked div for the componentDidMount function */
			divMock = document.createElement('div');
			divMock.setAttribute('id', rootId);
			divMock.style.paddingLeft = '0px';
			document.body.appendChild(divMock);
			/* Mount the component */
      wrapper = TestDev.mount(
        <div role="banner">
          <HeaderTitleAndSubtitle id="test-header-title-and-subtitle-id" headingIndent={100} titleTextOutline="black" titleTextColour="white" titleTextContent={titleText} subtitleTextOutline="black" subtitleTextColour="white" subtitleTextContent={subtitleText} />
        </div>
      );
		});
		
		afterAll(() => {
			/* Remove the mocked div */
			document.body.removeChild(divMock);
		});

		it('verifies that the "ajc-header-text-outline-black" class is assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-header-text-outline-black')).toBeTruthy();
		});

		it('verifies that the "ajc-header-text-outline-white" class is not assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-header-text-outline-white')).toBeFalsy();
		});

		it('verifies that the "ajc-text-white" class is assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-text-white')).toBeTruthy();
		});

		it('verifies that the "ajc-text-black" class is not assigned to the title text element', () => {
			expect(wrapper.find('h1').hasClass('ajc-text-black')).toBeFalsy();
		});

		it('verifies that the "ajc-header-text-outline-black" class is assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-header-text-outline-black')).toBeTruthy();
		});

		it('verifies that the "ajc-header-text-outline-white" class is not assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-header-text-outline-white')).toBeFalsy();
		});

		it('verifies that the "ajc-text-white" class is assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-text-white')).toBeTruthy();
		});

		it('verifies that the "ajc-text-black" class is not assigned to the subtitle text element', () => {
			expect(wrapper.find('h2').hasClass('ajc-text-black')).toBeFalsy();
		});

		it('verifies that the heading indent is assigned to the root element', () => {
			expect(document.querySelector(`div[id="${rootId}"]`).style.paddingLeft).toBe('100px');
		});
  });
});
