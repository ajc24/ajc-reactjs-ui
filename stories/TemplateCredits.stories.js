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
        The header section of this site renders various photos depending on the current date.
      </MainContentText>
      <MainContentText>
        All of these photos have been taken from Unsplash, the internets source of freely usable images:
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
        Unsplash Photo Authors
      </MainContentText>
      <MainContentText>
        There are many photos which will appear on this site over the course of the year.
      </MainContentText>
      <MainContentText>
        The following links will redirect you to all of the photo authors on Unsplash images:
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Aaron Burden
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@alex_dream?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Alejandro Mendoza
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@aniket940518?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Aniket Bhattacharya
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@bantersnaps?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Bantersnaps
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Benjamin Voros
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@bielmorro?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Biel Morro
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@heycrisso?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Chris Galbraith
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@dakotaroosphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Dakota Roos
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@drosie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Donnie Rosie
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@ewitsoe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Erik Witsoe
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@fedevitale?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Federico Vitale
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@florianolv?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Florian Olivo
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@freestocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Freestocks
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@goian?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Ian Schneider
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@joannakosinska?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Joanna Kosinska
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@joelholland?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Joel Holland
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@theshuttervision?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Jonathan Cooper
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@kylethacker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Kyle Thacker
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@makariostang?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Makarios Tang
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@maxandrey?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Max Andrey
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@mike?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Mike Kotsch
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Nathan Dumlao
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@nomadicjulien?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Nomadic Julien
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@acleanbake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Nora Schlesinger
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@osmanrana?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Osman Rana
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@caarl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Reynier Carl
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@rohit_c?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Rohit Choudhari
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@usualmorals?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Taylor R
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@theregisti?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        The Registi
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@tjholowaychuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        TJ Holowaychuk
      </MainContentText>
      <MainContentText type="hyperlink" href="https://unsplash.com/@lnz_uk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Vagelis Lnz
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
