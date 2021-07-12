import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { FileUploader } from '../../src';

describe('File Uploader', () => {

  describe('Default props and rendering', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="default-file-uploader-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-file-uploader-container" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-file-uploader-container')).toBeTruthy();
    });

    it('verifies that the "ajc-default" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-file-uploader-container').hasClass('ajc-default')).toBeTruthy();
    });

    it('verifies that the addUpperSpacing property is correctly set to the heading component', () => {
      expect(wrapper.find('MainContentText').at(0).prop('addUpperSpacing')).toBeFalsy();
    });

    it('verifies that the titleTextContent property is correctly set to the heading component', () => {
      expect(wrapper.find('MainContentText').at(0).text()).toBe('Upload a File:');
    });

    it('verifies that the colour property is correctly set to the buttons list component', () => {
      expect(wrapper.find('ButtonsList').prop('colour')).toBe('grey');
    });

    it('verifies that the id property is correctly set to the choose a file button', () => {
      expect(wrapper.find('button').at(0).prop('id')).toBe('default-file-uploader-id-choose-button');
    });

    it('verifies that the id property is correctly set to the clear selection button', () => {
      expect(wrapper.find('button').at(1).prop('id')).toBe('default-file-uploader-id-clear-button');
    });

    it('verifies that the id property is correctly set to the file status element', () => {
      expect(wrapper.find('span').prop('id')).toBe('default-file-uploader-id-file-status');
    });

    it('verifies that the id property is correctly set to the file input element', () => {
      expect(wrapper.find('input').prop('id')).toBe('default-file-uploader-id-file');
    });

    it('verifies that the name attribute is correctly set to the file input element', () => {
      expect(wrapper.find('input#default-file-uploader-id-file').prop('name')).toBe('default-file-uploader-id-file');
    });

    it('verifies that the type attribute is correctly set to the file input element', () => {
      expect(wrapper.find('input#default-file-uploader-id-file').prop('type')).toBe('file');
    });

    it('verifies that the "ajc-file-uploader-input" class is assigned to the file input element', () => {
      expect(wrapper.find('input#default-file-uploader-id-file').hasClass('ajc-file-uploader-input')).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - File upload with red buttons, custom title text and additional upper spacing', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="custom-file-uploader-id" addUpperSpacing={true} colour="red" titleTextContent="Custom File Uploader Title:" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the addUpperSpacing property is correctly set to the heading component', () => {
      expect(wrapper.find('MainContentText').at(0).prop('addUpperSpacing')).toBeTruthy();
    });

    it('verifies that the titleTextContent property is correctly set to the heading component', () => {
      expect(wrapper.find('MainContentText').at(0).text()).toBe('Custom File Uploader Title:');
    });

    it('verifies that the colour property is correctly set to the buttons list component', () => {
      expect(wrapper.find('ButtonsList').prop('colour')).toBe('red');
    });
  });

  describe('componentDidMount() method behaviour', () => {
    let clickClearButtonSpy;
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      clickClearButtonSpy = jest
        .spyOn(FileUploader.prototype, 'clickClearButton')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Reset the componentDidMount mock and invoke the function under test */
      componentDidMountSpy.mockRestore();
      wrapper.instance().componentDidMount();
    });

    afterAll(() => {
      clickClearButtonSpy.mockRestore();
    });

    it('verifies that the clickClearButton functionality is invoked', () => {
      expect(clickClearButtonSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('clickChooseButton() method behaviour', () => {
    let handleFileInputSpy;
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      handleFileInputSpy = jest
        .spyOn(FileUploader.prototype, 'handleFileInput')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.find('button#test-file-uploader-id-choose-button').prop('onClick')();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      handleFileInputSpy.mockRestore();
    });

    it('verifies that the handleFileInput functionality is invoked', () => {
      expect(handleFileInputSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "click" parameter is correctly passed to the handleFileInput functionality', () => {
      expect(handleFileInputSpy.mock.calls[0][0]).toBe('click');
    });
  });

  describe('clickClearButton() method behaviour', () => {
    let handleChooseButtonSpy;
    let handleFileInputSpy;
    let componentDidMountSpy;
    let setFileStatusSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      handleFileInputSpy = jest
        .spyOn(FileUploader.prototype, 'handleFileInput')
        .mockImplementation(() => {});
      setFileStatusSpy = jest
        .spyOn(FileUploader.prototype, 'setFileStatus')
        .mockImplementation(() => {});
      handleChooseButtonSpy = jest
        .spyOn(FileUploader.prototype, 'handleChooseButton')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.find('button#test-file-uploader-id-clear-button').prop('onClick')();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      handleFileInputSpy.mockRestore();
      setFileStatusSpy.mockRestore();
      handleChooseButtonSpy.mockRestore();
    });

    it('verifies that the handleFileInput functionality is invoked', () => {
      expect(handleFileInputSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "clear" parameter is correctly passed to the handleFileInput functionality', () => {
      expect(handleFileInputSpy.mock.calls[0][0]).toBe('clear');
    });

    it('verifies that the setFileStatus functionality is invoked', () => {
      expect(setFileStatusSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that an "undefined" parameter is correctly passed to the setFileStatus functionality', () => {
      expect(setFileStatusSpy.mock.calls[0][0]).toBeUndefined();
    });

    it('verifies that the handleChooseButton functionality is invoked', () => {
      expect(handleChooseButtonSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "enable" parameter is correctly passed to the handleChooseButton functionality', () => {
      expect(handleChooseButtonSpy.mock.calls[0][0]).toBe('enable');
    });
  });

  describe('handleChangeFileInput() method behaviour - Change event with no file set as uploaded', () => {
    let handleChooseButtonSpy;
    let handleFileInputSpy;
    let componentDidMountSpy;
    let setFileStatusSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      handleFileInputSpy = jest
        .spyOn(FileUploader.prototype, 'handleFileInput')
        .mockImplementation(() => {
          return false;
        });
      setFileStatusSpy = jest
        .spyOn(FileUploader.prototype, 'setFileStatus')
        .mockImplementation(() => {});
      handleChooseButtonSpy = jest
        .spyOn(FileUploader.prototype, 'handleChooseButton')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.find('input#test-file-uploader-id-file').prop('onChange')();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      handleFileInputSpy.mockRestore();
      setFileStatusSpy.mockRestore();
      handleChooseButtonSpy.mockRestore();
    });

    it('verifies that the handleFileInput functionality is invoked only once', () => {
      expect(handleFileInputSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "check-files-uploaded" parameter is correctly passed to the handleFileInput functionality', () => {
      expect(handleFileInputSpy.mock.calls[0][0]).toBe('check-files-uploaded');
    });

    it('verifies that the setFileStatus functionality is not invoked', () => {
      expect(setFileStatusSpy.mock.calls).toHaveLength(0);
    });

    it('verifies that the handleChooseButton functionality is not invoked', () => {
      expect(handleChooseButtonSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('handleChangeFileInput() method behaviour - Change event with file uploaded', () => {
    let handleChooseButtonSpy;
    let handleFileInputSpy;
    let componentDidMountSpy;
    let setFileStatusSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      handleFileInputSpy = jest
        .spyOn(FileUploader.prototype, 'handleFileInput')
        .mockImplementationOnce(() => {
          return true;
        })
        .mockImplementationOnce(() => {
          return 'test-filename.png';
        });
      setFileStatusSpy = jest
        .spyOn(FileUploader.prototype, 'setFileStatus')
        .mockImplementation(() => {});
      handleChooseButtonSpy = jest
        .spyOn(FileUploader.prototype, 'handleChooseButton')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.find('input#test-file-uploader-id-file').prop('onChange')();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      handleFileInputSpy.mockRestore();
      setFileStatusSpy.mockRestore();
      handleChooseButtonSpy.mockRestore();
    });

    it('verifies that the handleFileInput functionality is invoked twice', () => {
      expect(handleFileInputSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the "check-files-uploaded" parameter is correctly passed to the first time handleFileInput functionality', () => {
      expect(handleFileInputSpy.mock.calls[0][0]).toBe('check-files-uploaded');
    });

    it('verifies that the "get-filename" parameter is correctly passed to the second time handleFileInput functionality', () => {
      expect(handleFileInputSpy.mock.calls[1][0]).toBe('get-filename');
    });

    it('verifies that the setFileStatus functionality is invoked', () => {
      expect(setFileStatusSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the return value from the handleFileInput functionality is correctly passed to the setFileStatus functionality', () => {
      expect(setFileStatusSpy.mock.calls[0][0]).toBe('test-filename.png');
    });

    it('verifies that the handleChooseButton functionality is invoked', () => {
      expect(handleChooseButtonSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the "disable" parameter is correctly passed to the handleChooseButton functionality', () => {
      expect(handleChooseButtonSpy.mock.calls[0][0]).toBe('disable');
    });
  });

  describe('handleChooseButton() method behaviour - Default (enable) action', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockChooseButton;
    let wrapper;

    beforeAll(() => {
      /* Create the mock DOM required for the test */
      mockChooseButton = document.createElement('test-file-uploader-id-choose-button');
      mockChooseButton.disabled = true;
      mockChooseButton.style.opacity = 0.25;
      document.body.appendChild(mockChooseButton);
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockChooseButton;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().handleChooseButton();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      document.body.removeChild(mockChooseButton);
    });

    it('verifies that the choose button element is re-enabled by default', () => {
      expect(mockChooseButton.disabled).toBeFalsy();
    });

    it('verifies that the CSS opacity value for the choose button element is correctly set', () => {
      expect(mockChooseButton.style.opacity).toBe("1");
    });
  });

  describe('handleChooseButton() method behaviour - Disable action', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockChooseButton;
    let wrapper;

    beforeAll(() => {
      /* Create the mock DOM required for the test */
      mockChooseButton = document.createElement('test-file-uploader-id-choose-button');
      mockChooseButton.disabled = false;
      mockChooseButton.style.opacity = 1;
      document.body.appendChild(mockChooseButton);
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockChooseButton;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().handleChooseButton('disable');
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      document.body.removeChild(mockChooseButton);
    });

    it('verifies that the choose button element is disabled', () => {
      expect(mockChooseButton.disabled).toBeTruthy();
    });

    it('verifies that the CSS opacity value for the choose button element is correctly set', () => {
      expect(mockChooseButton.style.opacity).toBe("0.25");
    });
  });

  describe('handleChooseButton() method behaviour - Invalid action declaration', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockChooseButton;
    let wrapper;

    beforeAll(() => {
      /* Create the mock DOM required for the test */
      mockChooseButton = document.createElement('test-file-uploader-id-choose-button');
      mockChooseButton.disabled = true;
      mockChooseButton.style.opacity = 0.5;
      document.body.appendChild(mockChooseButton);
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockChooseButton;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().handleChooseButton('invalid');
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      document.body.removeChild(mockChooseButton);
    });

    it('verifies that the choose button element disabled attribute is not changed', () => {
      expect(mockChooseButton.disabled).toBeTruthy();
    });

    it('verifies that the CSS opacity value for the choose button element is not changed', () => {
      expect(mockChooseButton.style.opacity).toBe("0.5");
    });
  });

  describe('handleFileInput() method behaviour - Default (click) file input action', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockClickFileInput;
    let wrapper;

    beforeAll(() => {
      mockClickFileInput = jest.fn();
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return {
            click: mockClickFileInput,
            files: [],
            value: '',
          };
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().handleFileInput();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      mockClickFileInput.mockRestore();
    });

    it('verifies that the click functionality of the file input element is invoked', () => {
      expect(mockClickFileInput.mock.calls).toHaveLength(1);
    });
  });

  describe('handleFileInput() method behaviour - Check files uploaded action when no files present', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let wrapper;

    beforeAll(() => {
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return {
            click: jest.fn(),
            files: [],
            value: '',
          };
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the check files uploaded functionality is invoked and returns the correct response', () => {
      expect(wrapper.instance().handleFileInput('check-files-uploaded')).toBeFalsy();
    });
  });

  describe('handleFileInput() method behaviour - Check files uploaded action with files present', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let wrapper;

    beforeAll(() => {
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return {
            click: jest.fn(),
            files: [
              'test-filename.png',
            ],
            value: '',
          };
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the check files uploaded functionality is invoked and returns the correct response', () => {
      expect(wrapper.instance().handleFileInput('check-files-uploaded')).toBeTruthy();
    });
  });

  describe('handleFileInput() method behaviour - Clear input field value action', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockFileInput;
    let wrapper;

    beforeAll(() => {
      mockFileInput = {
        click: jest.fn(),
        files: [
          'test-filename.png',
        ],
        value: 'Mock value',
      };
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockFileInput;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().handleFileInput('clear');
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the clear functionality is invoked and sets the input field value correctly', () => {
      expect(mockFileInput.value).toBe('');
    });
  });

  describe('handleFileInput() method behaviour - Get filename action', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockFileInput;
    let wrapper;

    beforeAll(() => {
      mockFileInput = {
        click: jest.fn(),
        files: [
          {
            name: 'test-filename.png',
          }
        ],
        value: 'Mock value',
      };
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockFileInput;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the get filename functionality is invoked and returns the correct response', () => {
      expect(wrapper.instance().handleFileInput('get-filename')).toBe('test-filename.png');
    });
  });

  describe('handleFileInput() method behaviour - Invalid action declaration', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let wrapper;

    beforeAll(() => {
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return {};
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
    });

    it('verifies that the correct response is returned', () => {
      expect(wrapper.instance().handleFileInput('invalid')).toBeNull();
    });
  });

  describe('setFileStatus() method behaviour - Default (undefined) parameter', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockFileStatusElement;
    let wrapper;

    beforeAll(() => {
      mockFileStatusElement = document.createElement('span');
      mockFileStatusElement.setAttribute('id', 'test-file-uploader-id-file-status');
      mockFileStatusElement.textContent = '';
      document.body.appendChild(mockFileStatusElement);
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockFileStatusElement;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().setFileStatus();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      document.body.removeChild(mockFileStatusElement);
    });

    it('verifies that the file status is set correctly', () => {
      expect(mockFileStatusElement.textContent).toBe('You have not yet selected a file.');
    });
  });

  describe('setFileStatus() method behaviour - Valid filename parameter', () => {
    let componentDidMountSpy;
    let documentGetElementByIdSpy;
    let mockFileStatusElement;
    let wrapper;

    beforeAll(() => {
      mockFileStatusElement = document.createElement('span');
      mockFileStatusElement.setAttribute('id', 'test-file-uploader-id-file-status');
      mockFileStatusElement.textContent = '';
      document.body.appendChild(mockFileStatusElement);
      /* Create the spies required for the test */
      componentDidMountSpy = jest
        .spyOn(FileUploader.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      documentGetElementByIdSpy = jest
        .spyOn(global.document, 'getElementById')
        .mockImplementation(() => {
          return mockFileStatusElement;
        });
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <React.Fragment>
          <FileUploader id="test-file-uploader-id" />
        </React.Fragment>
      );
      /* Invoke the function under test */
      wrapper.instance().setFileStatus('test-filename.png');
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      documentGetElementByIdSpy.mockRestore();
      document.body.removeChild(mockFileStatusElement);
    });

    it('verifies that the file status is set correctly', () => {
      expect(mockFileStatusElement.textContent).toBe('Selected file: test-filename.png');
    });
  });
});
