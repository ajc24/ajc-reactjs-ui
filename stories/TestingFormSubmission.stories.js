import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ButtonsList,
  FileUploader,
  Footer,
  Header,
  HeaderLogo,
  HeaderTitleAndSubtitle,
  MainContentPageTitle,
  MainContentPanel,
  MainContentText,
  Menu
} from '../src';
import {
  headerBackgroundImage,
  headerLogoImage
} from './mock-data/mock-header-images';
import siteMenuItemsListTemplate from './mock-data/mock-menu';

export default {
	title: 'Testing/Forms',
};

class FormSubmissionTest extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      articleScreenshots: 3
    };
    this.handleOnClickSubmitButton = this.handleOnClickSubmitButton.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}

  handleOnClickSubmitButton(event) {
    event.preventDefault();
    alert('Clicked submit button');
    const validation = this.validateForm();
    if (validation === true) {
      return this.handleSubmitForm();
    }
    return false;
  }

  handleSubmitForm() {
    alert('Form submitted');
    const mainForm = document.getElementById('main-form');
    const mainFormData = new FormData(mainForm);
    mainFormData.append('numberOfArticleScreenshots', this.state.articleScreenshots);
    for(let pair of mainFormData.entries()) {
      alert(pair[0] + ', ' + pair[1]);
   }
    return false;
  }

  validateForm() {
    const screenshotUploader1 = document.getElementById('screenshot-uploader-1-file');
    const screenshotUploader2 = document.getElementById('screenshot-uploader-2-file');
    const screenshotUploader3 = document.getElementById('screenshot-uploader-3-file');
    if (screenshotUploader1.files.length === 0) {
      alert('Validation failed - file 1 is not set');
      return false;
    }
    if (screenshotUploader2.files.length === 0) {
      alert('Validation failed - file 2 is not set');
      return false;
    }
    if (screenshotUploader3.files.length === 0) {
      alert('Validation failed - file 3 is not set');
      return false;
    }
    return true;
  }

  render() {
    const formButtonsList = [
      {
        id: 'main-form-submit-button',
        onClick: this.handleOnClickSubmitButton,
        title: 'Submit Form Details',
        type: 'submit',
      }
    ];
    return (
      <React.Fragment>
        <Header id="ajc-header-id-date" backgroundColour="grey" topBorder="red" imageId="header-image-id-date" imageSrc={headerBackgroundImage}>
          <HeaderLogo id="ajc-header-logo-id" imageSrc={headerLogoImage} />
          <HeaderTitleAndSubtitle id="ajc-header-title-subtitle-id" titleTextContent="Web Application Title" subtitleTextContent="This is the subtitle for the application" />
        </Header>
        <BrowserRouter>
          <Menu id="ajc-menu-id" menuItemsList={siteMenuItemsListTemplate} colour="red" />
        </BrowserRouter>
        <MainContentPanel title="Form Submission Test" colour="grey">
          <MainContentPageTitle titleText="Form Submission Test" />
          <MainContentText>
            This page tests form data entry and submitting that data from the front end of an application.
          </MainContentText>
          <form id="main-form">
            <FileUploader id="screenshot-uploader-1" addUpperSpacing={true} colour="red" titleTextContent="Upload Screenshot 1:" />
            <FileUploader id="screenshot-uploader-2" addUpperSpacing={false} colour="red" titleTextContent="Upload Screenshot 2:" />
            <FileUploader id="screenshot-uploader-3" addUpperSpacing={false} colour="red" titleTextContent="Upload Screenshot 3:" />
            <MainContentText addUpperSpacing={true} type="heading">
              When you are finished, click to submit the form:
            </MainContentText>
            <ButtonsList colour="red" buttonsList={formButtonsList} />
          </form>
        </MainContentPanel>
        <Footer colour="red">
          Work in progress application
        </Footer>
      </React.Fragment>
    );
  }
}

const FormSubmissionTemplate = args => {
	return <React.Fragment>
    <FormSubmissionTest {...args} />
  </React.Fragment>
}

export const FormSubmission = FormSubmissionTemplate.bind({});
FormSubmission.parameters = {
  docs: {
    page: null
  }
};
