import React from 'react';
import PropTypes from 'prop-types';
import ButtonsList from './ButtonsList';
import MainContentText from './MainContentText';
import '../styling/ui-styles.css';

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
class FileUploader extends React.Component {
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
    const buttonsListData = [
      {
        id: `${this.props.id}-choose-button`,
        onClick: this.clickChooseButton,
        title: 'Choose a file to upload',
        type: 'button',
      },
      {
        id: `${this.props.id}-clear-button`,
        onClick: this.clickClearButton,
        title: 'Clear selection',
        type: 'button',
      }
    ];
    /* Create the styling for the component */
    const containerStyling = 'ajc-file-uploader-container ajc-default';
    const fileInputStyling = 'ajc-file-uploader-input';
    let fileInputLabelStyling = 'ajc-file-uploader-input-label ajc-black-text ajc-default';
    if (this.props.addUpperSpacing === true) {
      fileInputLabelStyling += ' ajc-file-uploader-input-label-upper-spacing';
    }
    return (
      <div className={containerStyling}>
        <label htmlFor={`${this.props.id}-file`} className={fileInputLabelStyling}>{this.props.labelText}</label>
        <ButtonsList alignment="left-align" colour={this.props.colour} buttonsList={buttonsListData} />
        <MainContentText type="paragraph-italics">
          <span id={`${this.props.id}-file-status`}></span>
        </MainContentText>
        <input id={`${this.props.id}-file`} name={`${this.props.id}-file`} type="file" className={fileInputStyling} onChange={this.handleChangeFileInput}></input>
      </div>
    );
  }
}
FileUploader.propTypes = {
  /** The unique identifier for the file uploader component */
  id: PropTypes.string.isRequired,
  /** Adds additional upper spacing of 30px to the paragraph / heading. By default this spacing is not added to the component. */
  addUpperSpacing: PropTypes.bool,
  /** The background colour for the buttons. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The label text content for the file uploader component. */
  labelText: PropTypes.string,
};
FileUploader.defaultProps = {
  addUpperSpacing: false,
  colour: 'grey',
  labelText: 'Upload a File:'
};
export default FileUploader;
