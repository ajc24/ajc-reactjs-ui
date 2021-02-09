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
  Menu,
  Screenshot
} from '../src';
import {
  headerBackgroundImage,
  headerLogoImage,
  headerNewYearImages,
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
        The header section of this site renders various photos depending on the current date. All of these photos have been taken from Unsplash, the internets source of freely
        usable images:
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/">
        https://unsplash.com/
      </MainContentText>
      <MainContentText>
        The rules of using Unsplash images are quite simple. All photos on their site can be downloaded and used for free for both commercial and non-commercial purposes with no
        permissions required. Unsplash does indicate that attribution to their images is appreciated and this is exactly what this page is all about.
      </MainContentText>
      <MainContentText>
        The Unsplash license terms read as follows:
      </MainContentText>
      <MainContentText type="paragraph-italics">
        "Unsplash grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from Unsplash for free,
        including for commercial purposes, without permission from or attributing the photographer or Unsplash. This license does not include the right to compile photos from
        Unsplash to replicate a similar or competing service."
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/license">
        https://unsplash.com/license
      </MainContentText>
      <MainContentText addUpperSpacing={true} type="heading">
        Photo Authors
      </MainContentText>
      <MainContentText>
        The following links will redirect you to all of the photo authors used via Unsplash images:
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@goian?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Ian Schneider
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@kylethacker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Kyle Thacker
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@acleanbake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Nora Schlesinger
      </MainContentText>
      <MainContentText addUpperSpacing={true} type="heading">
        New Years Day Celebrations
      </MainContentText>
      <MainContentText>
        The following images appear in the header section between the dates of the 1st January and 7th January inclusive of each new year:
      </MainContentText>
      <Screenshot id="new-year-screenshot-1" imageSrc={headerNewYearImages[0]} caption="Original photo by Kyle Thacker"/>
      <Screenshot id="new-year-screenshot-2" imageSrc={headerNewYearImages[1]} caption="Original photo by Nora Schlesinger" />
      <Screenshot id="new-year-screenshot-3" imageSrc={headerNewYearImages[2]} caption="Original photo by Ian Schneider" />
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
