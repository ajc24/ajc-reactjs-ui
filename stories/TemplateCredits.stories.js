import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Footer,
  Header,
  HeaderLogo,
  HeaderTitleAndSubtitle,
  MainContentPanel,
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
      <p>Test text</p>
    </MainContentPanel>
    <Footer colour="red">
      Footer text goes here.
    </Footer>
	</React.Fragment>;
}

export const CreditsPage = CreditsTemplate.bind({});
CreditsPage.parameters = {
  docs: {
    page: null
  }
};
