import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { TextInput } from '../../src';

describe('Text Input', () => {

  describe('Default props and rendering - No upper spacing, no character limit, default label text', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="default-text-input-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-text-input-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-text-input-container')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the for attribute is correctly set to the label element', () => {
      expect(wrapper.find('label').prop('htmlFor')).toBe('default-text-input-id');
    });

    it('verifies that the "ajc-text-input-label" class is assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-text-input-label')).toBeTruthy();
    });

    it('verifies that the "ajc-text-input-label-upper-spacing" class is not assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-text-input-label-upper-spacing')).toBeFalsy();
    });

    it('verifies that the label text is rendered in the label element', () => {
      expect(wrapper.find('label').text()).toBe('Text Input Label Text:');
    });

    it('verifies that the id attribute is correctly set to the input element', () => {
      expect(wrapper.find('input').prop('id')).toBe('default-text-input-id');
    });

    it('verifies that the name attribute is correctly set to the input element', () => {
      expect(wrapper.find('input').prop('name')).toBe('default-text-input-id');
    });

    it('verifies that the type attribute is correctly set to the input element', () => {
      expect(wrapper.find('input').prop('type')).toBe('text');
    });

    it('verifies that the "ajc-text-input" class is assigned to the input element', () => {
      expect(wrapper.find('input').hasClass('ajc-text-input')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the input element', () => {
      expect(wrapper.find('input').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the input element', () => {
      expect(wrapper.find('input').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the onChange functionality is correctly assigned to the input element', () => {
      expect(wrapper.find('input').prop('onChange')).toBeDefined();
    });

    it('verifies that the character limit element is not rendered', () => {
      expect(wrapper.find('span').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - With upper spacing and custom label text, no character limit', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-upper-spacing-id" labelText="With Upper Spacing and Custom Label:" addUpperSpacing={true} />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-text-input-label-upper-spacing" class is assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-text-input-label-upper-spacing')).toBeTruthy();
    });

    it('verifies that the label text is rendered in the label element', () => {
      expect(wrapper.find('label').text()).toBe('With Upper Spacing and Custom Label:');
    });

    it('verifies that the character limit element is not rendered', () => {
      expect(wrapper.find('span').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - With character limit, no upper spacing or custom label text', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-character-limit-id" characterLimit={30} />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-text-input-label-upper-spacing" class is not assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-text-input-label-upper-spacing')).toBeFalsy();
    });

    it('verifies that the character limit element is rendered', () => {
      expect(wrapper.find('span').exists()).toBeTruthy();
    });

    it('verifies that the id attribute is set correctly to the character limit element', () => {
      expect(wrapper.find('span').prop('id')).toBe('text-input-with-character-limit-id-characters-remaining');
    });

    it('verifies that the "ajc-text-input-character-limit" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-input-character-limit')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-text-red" class is not assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-red')).toBeFalsy();
    });

    it('verifies that no text content is initially rendered in the character limit element', () => {
      expect(wrapper.find('span').text()).toBe('');
    });
  });

  describe('Transferred props and rendering - Exceeded character limit', () => {
    let componentDidMountSpy;
    let getCharactersRemainingSpy;
    let handleCharactersRemainingSpy;
    let setCharacterLimitTextContentSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementation(() => {
          return -1;
        });
      handleCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'handleCharactersRemaining');
      setCharacterLimitTextContentSpy = jest
        .spyOn(TextInput.prototype, 'setCharacterLimitTextContent')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-character-limit-id" characterLimit={30} />
        </React.Fragment>
      );
      /* Invoke an onChange event to update component state and trigger an exceeded character limit state */
      wrapper.find('input').prop('onChange')();
      wrapper.update();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
      handleCharactersRemainingSpy.mockRestore();
      setCharacterLimitTextContentSpy.mockRestore();
    });

    it('verifies that the handleCharactersRemaining functionality is invoked', () => {
      expect(handleCharactersRemainingSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the character limit element is rendered', () => {
      expect(wrapper.find('span').exists()).toBeTruthy();
    });

    it('verifies that the "ajc-text-black" class is not assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-black')).toBeFalsy();
    });

    it('verifies that the "ajc-text-red" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-red')).toBeTruthy();
    });
  });

  describe('handleCharactersRemaining() method behaviour - Exceeded character limit', () => {
    let componentDidMountSpy;
    let getCharactersRemainingSpy;
    let setCharacterLimitTextContentSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementation(() => {
          return -1;
        });
      setCharacterLimitTextContentSpy = jest
        .spyOn(TextInput.prototype, 'setCharacterLimitTextContent')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-character-limit-id" characterLimit={30} />
        </React.Fragment>
      );
      /* Invoke an onChange event to update component state and trigger an exceeded character limit state */
      wrapper.find('input').prop('onChange')();
      wrapper.update();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
      setCharacterLimitTextContentSpy.mockRestore();
    });

    it('verifies that the getCharactersRemaining functionality is invoked', () => {
      expect(getCharactersRemainingSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the setCharacterLimitTextContent functionality is invoked', () => {
      expect(setCharacterLimitTextContentSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "ajc-text-black" class is not assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-black')).toBeFalsy();
    });

    it('verifies that the "ajc-text-red" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-red')).toBeTruthy();
    });
  });

  describe('handleCharactersRemaining() method behaviour - Fixed character limit after exceeding', () => {
    let componentDidMountSpy;
    let getCharactersRemainingSpy;
    let setCharacterLimitTextContentSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementationOnce(() => {
          return -1;
        })
        .mockImplementationOnce(() => {
          return 0;
        });
      setCharacterLimitTextContentSpy = jest
        .spyOn(TextInput.prototype, 'setCharacterLimitTextContent')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-character-limit-id" characterLimit={30} />
        </React.Fragment>
      );
      /* Invoke an onChange event to update component state and trigger an exceeded character limit state */
      wrapper.find('input').prop('onChange')();
      wrapper.update();
      /* Invoke an onChange event to update component state and trigger a fixed character limit state */
      wrapper.find('input').prop('onChange')();
      wrapper.update();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
      setCharacterLimitTextContentSpy.mockRestore();
    });

    it('verifies that the getCharactersRemaining functionality is invoked twice', () => {
      expect(getCharactersRemainingSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the setCharacterLimitTextContent functionality is invoked twice', () => {
      expect(setCharacterLimitTextContentSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the "ajc-text-black" class is assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-black')).toBeTruthy();
    });

    it('verifies that the "ajc-text-red" class is not assigned to the character limit element', () => {
      expect(wrapper.find('span').hasClass('ajc-text-red')).toBeFalsy();
    });
  });

  describe('handleCharactersRemaining() method behaviour - No character limit set', () => {
    let componentDidMountSpy;
    let getCharactersRemainingSpy;
    let setCharacterLimitTextContentSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementation(() => {});
      setCharacterLimitTextContentSpy = jest
        .spyOn(TextInput.prototype, 'setCharacterLimitTextContent')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-with-character-limit-id" characterLimit={0} />
        </React.Fragment>
      );
      /* Invoke an onChange event to attempt an update to component state */
      wrapper.find('input').prop('onChange')();
      wrapper.update();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
      setCharacterLimitTextContentSpy.mockRestore();
    });

    it('verifies that the character limit element is not rendered', () => {
      expect(wrapper.find('span').exists()).toBeFalsy();
    });

    it('verifies that the getCharactersRemaining functionality is not invoked', () => {
      expect(getCharactersRemainingSpy.mock.calls).toHaveLength(0);
    });

    it('verifies that the setCharacterLimitTextContent functionality is not invoked', () => {
      expect(setCharacterLimitTextContentSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('componentDidMount() method behaviour', () => {
    let clearExistingTextEntrySpy;
    let componentDidMountSpy;
    let handleCharactersRemainingSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      clearExistingTextEntrySpy = jest
        .spyOn(TextInput.prototype, 'clearExistingTextEntry')
        .mockImplementation(() => {});
      handleCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'handleCharactersRemaining')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-id" />
        </React.Fragment>
      );
      /* Invoke an function being tested */
      componentDidMountSpy.mockRestore();
      wrapper.instance().componentDidMount();
    });

    afterAll(() => {
      clearExistingTextEntrySpy.mockRestore();
      handleCharactersRemainingSpy.mockRestore();
    });

    it('verifies that the clearExistingTextEntry functionality is invoked', () => {
      expect(clearExistingTextEntrySpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the handleCharactersRemainingSpy functionality is invoked', () => {
      expect(handleCharactersRemainingSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('clearExistingTextEntry() method behaviour', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockInputElement;
    let wrapper;

    beforeAll(() => {
      mockInputElement = {
        value: 'Test text',
      };
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockInputElement;
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-id" />
        </React.Fragment>
      );
      /* Invoke an function being tested */
      wrapper.instance().clearExistingTextEntry();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the value of the text element is cleared', () => {
      expect(mockInputElement.value).toBe('');
    });
  });

  describe('getCharactersRemaining() method behaviour', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockInputElement;
    let wrapper;

    beforeAll(() => {
      mockInputElement = {
        value: 'Test text',
      };
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockInputElement;
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-id" characterLimit={9} />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the correct number of permitted characters is determined', () => {
      expect(wrapper.instance().getCharactersRemaining()).toBe(0);
    });
  });

  describe('setCharacterLimitTextContent() method behaviour - Character limit not exceeded', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let getCharactersRemainingSpy;
    let mockSpanElement;
    let wrapper;

    beforeAll(() => {
      mockSpanElement = {
        textContent: '',
      };
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockSpanElement;
        });
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementation(() => {
          return 0;
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-id" />
        </React.Fragment>
      );
      /* Invoke an function being tested */
      wrapper.instance().setCharacterLimitTextContent();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
    });

    it('verifies that the getCharactersRemaining functionality is invoked', () => {
      expect(getCharactersRemainingSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the characters remaining text is correctly rendered', () => {
      expect(mockSpanElement.textContent).toBe('Characters remaining: 0');
    });
  });

  describe('setCharacterLimitTextContent() method behaviour - Character limit exceeded', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let getCharactersRemainingSpy;
    let mockSpanElement;
    let wrapper;

    beforeAll(() => {
      mockSpanElement = {
        textContent: '',
      };
      componentDidMountSpy = jest
        .spyOn(TextInput.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockSpanElement;
        });
      getCharactersRemainingSpy = jest
        .spyOn(TextInput.prototype, 'getCharactersRemaining')
        .mockImplementation(() => {
          return -1;
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <TextInput id="text-input-id" />
        </React.Fragment>
      );
      /* Invoke an function being tested */
      wrapper.instance().setCharacterLimitTextContent();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      getCharactersRemainingSpy.mockRestore();
    });

    it('verifies that the getCharactersRemaining functionality is invoked', () => {
      expect(getCharactersRemainingSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the characters remaining text is correctly rendered', () => {
      expect(mockSpanElement.textContent).toBe('You have exceeded the character limit by 1 character(s)');
    });
  });
});
