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
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
    this.resetFileStatus = this.resetFileStatus.bind(this);
    this.setFileForUpload = this.setFileForUpload.bind(this);
  }

  componentDidMount() {
    this.resetFileStatus();
  }

  /**
   * Handles the changing of the file input element
   * Sets the file status to that of the selected file where appropriate
   */
  handleChangeFileInput() {
    const fileInput = document.getElementById(`${this.props.id}-file`);
    if (fileInput.files.length > 0) {
      const fileStatus = document.getElementById(`${this.props.id}-file-status`);
      fileStatus.textContent = `Selected file: ${fileInput.files[0].name}`;
      /* Disable the choose file button after successful upload */
      const chooseFileButton = document.getElementById(`${this.props.id}-choose-button`);
      chooseFileButton.disabled = true;
      chooseFileButton.style.opacity = 0.25;
    }
  }

  /**
   * Resets the file input value and status to the user
   */
  resetFileStatus() {
    /* Clear the file input value */
    const fileInput = document.getElementById(`${this.props.id}-file`);
    fileInput.value = '';
    /* Reset the status for the user */
    const fileStatus = document.getElementById(`${this.props.id}-file-status`);
    fileStatus.textContent = 'You have not yet selected a file.';
    /* Re-enable the choose file button after clearing the last file upload selection */
    const chooseFileButton = document.getElementById(`${this.props.id}-choose-button`);
    chooseFileButton.disabled = false;
    chooseFileButton.style.opacity = 1;
  }

  /**
   * Fires a click event on the file input field in order to allow
   * a user to set a file to be uploaded
   */
  setFileForUpload() {
    const fileInput = document.getElementById(`${this.props.id}-file`);
    fileInput.click();
  }

  render() {
    const buttonsListData = [
      {
        id: `${this.props.id}-choose-button`,
        onClick: this.setFileForUpload,
        title: 'Choose a file to upload',
        type: 'button',
      },
      {
        id: `${this.props.id}-clear-button`,
        onClick: this.resetFileStatus,
        title: 'Clear selection',
        type: 'button',
      }
    ];
    /* Create the styling for the component */
    const containerStyling = 'ajc-file-uploader-container ajc-default';
    const fileInputStyling = 'ajc-file-uploader-input';
    return (
      <div className={containerStyling}>
        <MainContentText type="heading" addUpperSpacing={this.props.addUpperSpacing}>
          {this.props.titleTextContent}
        </MainContentText>
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
  /** The title text content for the file uploader component. */
  titleTextContent: PropTypes.string,
};
FileUploader.defaultProps = {
  addUpperSpacing: false,
  colour: 'grey',
  titleTextContent: 'Upload a File:'
};
export default FileUploader;
