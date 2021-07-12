"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonsList = _interopRequireDefault(require("./ButtonsList"));

var _MainContentText = _interopRequireDefault(require("./MainContentText"));

require("../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The FileUploader component allows you to choose a file from your local machine for the purpose of uploading it to your server.
 * 
 * This component will be rendered at a maximum width of 1349px with all content displayed left-aligned within. This component will collapse in size to support smaller
 * screen sizes such as mobile devices.
 * 
 * Setting the addUpperSpacing property will add 30px of additional spacing above the file uploader component. This is especially useful to add a visual break between
 * this component and all other components on each page of the application.
 * 
 * Providing a value for the titleTextContent property will set a custom heading for the file uploader component.
 * 
 * For best results this component is intended for use within the MainContentPanel component and within the scope of a HTML `<form>`.
 */
class FileUploader extends _react.default.Component {
  constructor(props) {
    super(props);
    this.clickChooseButton = this.clickChooseButton.bind(this);
    this.clickClearButton = this.clickClearButton.bind(this);
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
    this.handleChooseButton = this.handleChooseButton.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.setFileStatus = this.setFileStatus.bind(this);
  }

  componentDidMount() {
    this.clickClearButton();
  }
  /**
   * Fires a click event on the file input field in order to allow
   * a user to set a file to be uploaded
   */


  clickChooseButton() {
    this.handleFileInput('click');
  }
  /**
   * Resets the file input value and status to the user
   */


  clickClearButton() {
    this.handleFileInput('clear');
    this.setFileStatus(undefined);
    this.handleChooseButton('enable');
  }
  /**
   * Handles the changing of the file input element
   * Sets the file status to that of the selected file where appropriate
   */


  handleChangeFileInput() {
    if (this.handleFileInput('check-files-uploaded') === true) {
      this.setFileStatus(this.handleFileInput('get-filename'));
      this.handleChooseButton('disable');
    }
  }
  /**
   * Enables or disables the components "Choose a file" button
   * @param {'enable'|'disable'} action
   */


  handleChooseButton(action = 'enable') {
    const chooseFileButton = document.getElementById(`${this.props.id}-choose-button`);

    if (action === 'enable') {
      chooseFileButton.disabled = false;
      chooseFileButton.style.opacity = 1;
    } else if (action === 'disable') {
      chooseFileButton.disabled = true;
      chooseFileButton.style.opacity = 0.25;
    }
  }
  /**
   * Clicks on, clears the value from or checks the length of the files list
   * in the file input element
   * @param {'click'|'clear'|'check-files-uploaded'|'get-filename'} action 
   * @returns {boolean|string|null}
   */


  handleFileInput(action = 'click') {
    let returnValue = null;
    const fileInput = document.getElementById(`${this.props.id}-file`);

    if (action === 'click') {
      fileInput.click();
    } else if (action === 'check-files-uploaded') {
      returnValue = fileInput.files.length > 0;
    } else if (action === 'clear') {
      fileInput.value = '';
    } else if (action === 'get-filename') {
      returnValue = fileInput.files[0].name;
    }

    return returnValue;
  }
  /**
   * Sets the file status text content for the component
   * @param {string} fileName 
   */


  setFileStatus(fileName = undefined) {
    const fileStatus = document.getElementById(`${this.props.id}-file-status`);

    if (fileName !== undefined) {
      fileStatus.textContent = `Selected file: ${fileName}`;
    } else {
      fileStatus.textContent = 'You have not yet selected a file.';
    }
  }

  render() {
    const buttonsListData = [{
      id: `${this.props.id}-choose-button`,
      onClick: this.clickChooseButton,
      title: 'Choose a file to upload',
      type: 'button'
    }, {
      id: `${this.props.id}-clear-button`,
      onClick: this.clickClearButton,
      title: 'Clear selection',
      type: 'button'
    }];
    /* Create the styling for the component */

    const containerStyling = 'ajc-file-uploader-container ajc-default';
    const fileInputStyling = 'ajc-file-uploader-input';
    const fileInputLabelStyling = 'ajc-file-uploader-input-label';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: containerStyling
    }, /*#__PURE__*/_react.default.createElement(_MainContentText.default, {
      type: "heading",
      addUpperSpacing: this.props.addUpperSpacing
    }, this.props.titleTextContent), /*#__PURE__*/_react.default.createElement(_ButtonsList.default, {
      alignment: "left-align",
      colour: this.props.colour,
      buttonsList: buttonsListData
    }), /*#__PURE__*/_react.default.createElement(_MainContentText.default, {
      type: "paragraph-italics"
    }, /*#__PURE__*/_react.default.createElement("span", {
      id: `${this.props.id}-file-status`
    })), /*#__PURE__*/_react.default.createElement("label", {
      for: `${this.props.id}-file`,
      className: fileInputLabelStyling
    }, "Hidden File Input:"), /*#__PURE__*/_react.default.createElement("input", {
      id: `${this.props.id}-file`,
      name: `${this.props.id}-file`,
      type: "file",
      className: fileInputStyling,
      onChange: this.handleChangeFileInput
    }));
  }

}

FileUploader.propTypes = {
  /** The unique identifier for the file uploader component */
  id: _propTypes.default.string.isRequired,

  /** Adds additional upper spacing of 30px to the paragraph / heading. By default this spacing is not added to the component. */
  addUpperSpacing: _propTypes.default.bool,

  /** The background colour for the buttons. */
  colour: _propTypes.default.oneOf(['grey', 'red']),

  /** The title text content for the file uploader component. */
  titleTextContent: _propTypes.default.string
};
FileUploader.defaultProps = {
  addUpperSpacing: false,
  colour: 'grey',
  titleTextContent: 'Upload a File:'
};
var _default = FileUploader;
exports.default = _default;