import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Header,
  HeaderLogo,
  HeaderTitleAndSubtitle,
  Menu
} from '../src';
import headerLogoImage from './images/storybook-header-logo.png';
import newYearImage1 from './images/new-year/new-year-8.png';
import newYearImage2 from './images/new-year/new-year-9.png';
import newYearImage3 from './images/new-year/new-year-10.png';
import springImage1 from './images/spring/spring-2.png';
import springImage2 from './images/spring/spring-3.png';
import springImage3 from './images/spring/spring-4.png';
import valentinesImage1 from './images/valentines-day/valentines-day-4.png';
import summerImage1 from './images/summer/summer-1.png';
import summerImage2 from './images/summer/summer-2.png';
import summerImage3 from './images/summer/summer-3.png';
import autumnImage1 from './images/autumn/autumn-1.png';
import autumnImage2 from './images/autumn/autumn-2.png';
import autumnImage3 from './images/autumn/autumn-3.png';
import halloweenImage1 from './images/halloween/halloween-1.png';
import halloweenImage2 from './images/halloween/halloween-2.png';
import halloweenImage3 from './images/halloween/halloween-3.png';
import winterImage1 from './images/winter/winter-1.png';
import winterImage2 from './images/winter/winter-2.png';
import winterImage3 from './images/winter/winter-3.png';
import christmasImage1 from './images/christmas/christmas-1.png';
import christmasImage2 from './images/christmas/christmas-2.png';
import christmasImage3 from './images/christmas/christmas-3.png';
import christmasImage4 from './images/christmas/christmas-4.png';
import christmasImage5 from './images/christmas/christmas-5.png';
import restOfYearImage1 from './images/rest-of-year/rest-of-year-1.png';
import restOfYearImage2 from './images/rest-of-year/rest-of-year-2.png';
import restOfYearImage3 from './images/rest-of-year/rest-of-year-3.png';
import restOfYearImage4 from './images/rest-of-year/rest-of-year-4.png';
import restOfYearImage5 from './images/rest-of-year/rest-of-year-5.png';
import restOfYearImage6 from './images/rest-of-year/rest-of-year-6.png';
import restOfYearImage7 from './images/rest-of-year/rest-of-year-7.png';
import restOfYearImage8 from './images/rest-of-year/rest-of-year-8.png';
import restOfYearImage9 from './images/rest-of-year/rest-of-year-9.png';
import restOfYearImage10 from './images/rest-of-year/rest-of-year-10.png';

export default {
	component: Header,
	title: 'Templates/Header',
};

/* Set the header depending on the current date */
let imageToBeRendered;
const todaysDate = new Date();
const date = todaysDate.getDate();
const month = todaysDate.getMonth() + 1;
if (month === 1) {
  /* Set the images for January */
  if (date >= 1 && date <= 3) {
    imageToBeRendered = newYearImage1;
  } else if (date >= 4 && date <= 5) {
    imageToBeRendered = newYearImage2;
  } else if (date >= 6 && date <= 7) {
    imageToBeRendered = newYearImage3;
  } else {
    imageToBeRendered = restOfYearImage3;
  }
} else if (month === 2) {
  /* Set the images for February */
  if (date >= 1 && date <= 3) {
    imageToBeRendered = springImage1;
  } else if (date >= 4 && date <= 5) {
    imageToBeRendered = springImage2;
  } else if (date >= 6 && date <= 7) {
    imageToBeRendered = springImage3;
  } else if (date === 14) {
    imageToBeRendered = valentinesImage1;
  } else {
    imageToBeRendered = restOfYearImage8;
  }
} else if (month === 3) {
  /* Set the images for March */
  imageToBeRendered = restOfYearImage1;
} else if (month === 4) {
  /* Set the images for April */
  imageToBeRendered = restOfYearImage2;
} else if (month === 5) {
  /* Set the images for May */
  if (date >= 1 && date <= 3) {
    imageToBeRendered = summerImage1;
  } else if (date >= 4 && date <= 5) {
    imageToBeRendered = summerImage2;
  } else if (date >= 6 && date <= 7) {
    imageToBeRendered = summerImage3;
  } else {
    imageToBeRendered = restOfYearImage9;
  }
} else if (month === 6) {
  /* Set the images for June */
  imageToBeRendered = restOfYearImage10;
} else if (month === 7) {
  /* Set the images for July */
  imageToBeRendered = restOfYearImage7;
} else if (month === 8) {
  /* Set the images for August */
  if (date >= 1 && date <= 3) {
    imageToBeRendered = autumnImage1;
  } else if (date >= 4 && date <= 5) {
    imageToBeRendered = autumnImage2;
  } else if (date >= 6 && date <= 7) {
    imageToBeRendered = autumnImage3;
  } else {
    imageToBeRendered = restOfYearImage6;
  }
} else if (month === 9) {
  /* Set the images for September */
  imageToBeRendered = restOfYearImage5;
} else if (month === 10) {
  /* Set the images for October */
  if (date >= 25 && date <= 27) {
    imageToBeRendered = halloweenImage1;
  } else if (date >= 28 && date <= 29) {
    imageToBeRendered = halloweenImage2;
  } else if (date >= 30 && date <= 31) {
    imageToBeRendered = halloweenImage3;
  } else {
    imageToBeRendered = restOfYearImage4;
  }
} else if (month === 11) {
  /* Set the images for November */
  if (date >= 1 && date <= 3) {
    imageToBeRendered = winterImage1;
  } else if (date >= 4 && date <= 5) {
    imageToBeRendered = winterImage2;
  } else if (date >= 6 && date <= 7) {
    imageToBeRendered = winterImage3;
  } else {
    imageToBeRendered = restOfYearImage4;
  }
} else {
  /* Set the images for December */
  if (date >= 18 && date <= 20) {
    imageToBeRendered = christmasImage1;
  } else if (date >= 21 && date <= 23) {
    imageToBeRendered = christmasImage2;
  } else if (date >= 24 && date <= 26) {
    imageToBeRendered = christmasImage3;
  } else if (date >= 27 && date <= 29) {
    imageToBeRendered = christmasImage4;
  } else if (date >= 30 && date <= 31) {
    imageToBeRendered = christmasImage5;
  } else {
    imageToBeRendered = restOfYearImage3;
  }
}

/* Create the list of mock data items */
const testMenuItemsList = [
  {
    route: '/test-item-1',
    title: 'Menu Item 1',
  },
  {
    title: 'Dropdown Menu Item 1',
    dropdownMenuItemsList: [
      {
        route: '/test-dropdown-item-1-1',
        title: 'Dropdown Menu Item 1.1',
      },
      {
        route: '/test-dropdown-item-1-2',
        title: 'Dropdown Menu Item 1.2',
      },
    ],
  },
  {
    route: '/test-item-2',
    title: 'Menu Item 2',
  },
  {
    title: 'Dropdown Menu Item 2',
    dropdownMenuItemsList: [
      {
        route: '/test-dropdown-item-2-1',
        title: 'Dropdown Menu Item 2.1',
      },
      {
        route: '/test-dropdown-item-2-2',
        title: 'Dropdown Menu Item 2.2',
      },
    ],
  },
];

const DateTestTemplate = () => {
	return <React.Fragment>
		<Header id="ajc-header-id-date" backgroundColour="grey" topBorder="red" imageId="header-image-id-date" imageSrc={imageToBeRendered}>
      <HeaderLogo id="ajc-header-logo-id" imageSrc={headerLogoImage} />
      <HeaderTitleAndSubtitle id="ajc-header-title-subtitle-id" titleTextContent="Web Application Title" subtitleTextContent="This is the subtitle for the application" />
    </Header>
    <BrowserRouter>
      <Menu id="ajc-menu-id" menuItemsList={testMenuItemsList} colour="red" />
    </BrowserRouter>
	</React.Fragment>;
}

export const DateTest = DateTestTemplate.bind({});
DateTest.parameters = {
  docs: {
    page: null
  }
};
