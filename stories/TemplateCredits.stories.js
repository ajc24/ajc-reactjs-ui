import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
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
	title: 'Templates/Website',
};

const CreditsTemplate = () => {
	return <React.Fragment>
		<Header id="ajc-header-id-date" backgroundColour="grey" topBorder="red" imageId="header-image-id-date" imageSrc={headerBackgroundImage}>
      <HeaderLogo id="ajc-header-logo-id" imageSrc={headerLogoImage} />
      <HeaderTitleAndSubtitle id="ajc-header-title-subtitle-id" titleTextContent="Web Application Title" subtitleTextContent="This is the subtitle for the application" />
    </Header>
    <BrowserRouter>
      <Menu id="ajc-menu-id" menuItemsList={siteMenuItemsListTemplate} colour="red" />
    </BrowserRouter>
    <MainContentPanel title="Credits" colour="grey">
      <MainContentPageTitle titleText="Credits" />
      <MainContentText>
        Test standard paragraph text
      </MainContentText>
      <MainContentText>
        Second paragraph to test the spacing between paragraph elements.
      </MainContentText>
      <MainContentText type="paragraph-italics">
        This paragraph will appear in italics. Useful for quotes or references etc.
      </MainContentText>
      <MainContentText type="hyperlink" href="https://www.google.ie">
        https://www.google.ie
      </MainContentText>
      <MainContentText addUpperSpacing={true} type="heading">
        Sample paragraph heading which also adds upper spacing to separate it from the above paragraph.
      </MainContentText>
      <MainContentText>
        Another test paragraph to verify the spacing between a heading and a paragraph.
      </MainContentText>
    </MainContentPanel>
    <Footer colour="red">
      Work in progress application
    </Footer>
	</React.Fragment>;
}

export const CreditsPage = CreditsTemplate.bind({});
CreditsPage.parameters = {
  docs: {
    page: null
  }
};
