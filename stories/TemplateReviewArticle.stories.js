import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Footer,
  Header,
  HeaderLogo,
  HeaderTitleAndSubtitle,
  MainContentPageTitle,
  MainContentPanel,
  MainContentScreenshot,
  MainContentText,
  Menu
} from '../src';
import {
  headerBackgroundImage,
  headerLogoImage
} from './mock-data/mock-header-images';
import obductionImage from './images/storybook-test-screenshot.png';
import siteMenuItemsListTemplate from './mock-data/mock-menu';

export default {
	title: 'Page Templates/Website',
};

const ReviewArticleTemplate = () => {
	return <React.Fragment>
		<Header id="ajc-header-id-date" backgroundColour="grey" topBorder="red" imageId="header-image-id-date" imageSrc={headerBackgroundImage}>
      <HeaderLogo id="ajc-header-logo-id" imageSrc={headerLogoImage} />
      <HeaderTitleAndSubtitle id="ajc-header-title-subtitle-id" titleTextContent="Web Application Title" subtitleTextContent="This is the subtitle for the application" />
    </Header>
    <BrowserRouter>
      <Menu id="ajc-menu-id" menuItemsList={siteMenuItemsListTemplate} colour="red" />
    </BrowserRouter>
    <MainContentPanel title="Review Test" colour="grey">
      <MainContentPageTitle titleText="Review Article" />
      <MainContentText>
        This first paragraph of text will appear above the screenshot. This will give an idea of spacing for paragraphs of text prior to rendering a screenshot
        within an article.
      </MainContentText>
      <MainContentScreenshot id="default-main-content-screenshot-id" imageSrc={obductionImage} caption="Obductions visuals are truly breathtaking" />
      <MainContentText>
        This paragraph appears underneath the screenshot. Again this will give a clear indication of how the spacing beneath an article screenshot will work.
      </MainContentText>
    </MainContentPanel>
    <Footer colour="red">
      Work in progress application
    </Footer>
	</React.Fragment>;
}

export const ReviewPage = ReviewArticleTemplate.bind({});
ReviewPage.parameters = {
  docs: {
    page: null
  }
};
