import headerLogoImage from '../images/storybook-header-logo.png';
import newYearImage1 from '../images/new-year/new-year-8.png';
import newYearImage2 from '../images/new-year/new-year-9.png';
import newYearImage3 from '../images/new-year/new-year-10.png';
import springImage1 from '../images/spring/spring-2.png';
import springImage2 from '../images/spring/spring-3.png';
import springImage3 from '../images/spring/spring-4.png';
import valentinesImage1 from '../images/valentines-day/valentines-day-4.png';
import summerImage1 from '../images/summer/summer-1.png';
import summerImage2 from '../images/summer/summer-2.png';
import summerImage3 from '../images/summer/summer-3.png';
import autumnImage1 from '../images/autumn/autumn-1.png';
import autumnImage2 from '../images/autumn/autumn-2.png';
import autumnImage3 from '../images/autumn/autumn-3.png';
import halloweenImage1 from '../images/halloween/halloween-1.png';
import halloweenImage2 from '../images/halloween/halloween-2.png';
import halloweenImage3 from '../images/halloween/halloween-3.png';
import winterImage1 from '../images/winter/winter-1.png';
import winterImage2 from '../images/winter/winter-2.png';
import winterImage3 from '../images/winter/winter-3.png';
import christmasImage1 from '../images/christmas/christmas-1.png';
import christmasImage2 from '../images/christmas/christmas-2.png';
import christmasImage3 from '../images/christmas/christmas-3.png';
import christmasImage4 from '../images/christmas/christmas-4.png';
import christmasImage5 from '../images/christmas/christmas-5.png';
import restOfYearImage1 from '../images/rest-of-year/rest-of-year-1.png';
import restOfYearImage2 from '../images/rest-of-year/rest-of-year-2.png';
import restOfYearImage3 from '../images/rest-of-year/rest-of-year-3.png';
import restOfYearImage4 from '../images/rest-of-year/rest-of-year-4.png';
import restOfYearImage5 from '../images/rest-of-year/rest-of-year-5.png';
import restOfYearImage6 from '../images/rest-of-year/rest-of-year-6.png';
import restOfYearImage7 from '../images/rest-of-year/rest-of-year-7.png';
import restOfYearImage8 from '../images/rest-of-year/rest-of-year-8.png';
import restOfYearImage9 from '../images/rest-of-year/rest-of-year-9.png';
import restOfYearImage10 from '../images/rest-of-year/rest-of-year-10.png';

/* Set the header depending on the current date */
let headerBackgroundImage;
const todaysDate = new Date();
const date = 8// todaysDate.getDate();
const month = 10// todaysDate.getMonth() + 1;
if (month === 1) {
  /* Set the images for January */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = newYearImage1;
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = newYearImage2;
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = newYearImage3;
  } else {
    headerBackgroundImage = restOfYearImage3;
  }
} else if (month === 2) {
  /* Set the images for February */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = springImage1;
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = springImage2;
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = springImage3;
  } else if (date === 14) {
    headerBackgroundImage = valentinesImage1;
  } else {
    headerBackgroundImage = restOfYearImage8;
  }
} else if (month === 3) {
  /* Set the images for March */
  headerBackgroundImage = restOfYearImage1;
} else if (month === 4) {
  /* Set the images for April */
  headerBackgroundImage = restOfYearImage2;
} else if (month === 5) {
  /* Set the images for May */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = summerImage1;
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = summerImage2;
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = summerImage3;
  } else {
    headerBackgroundImage = restOfYearImage9;
  }
} else if (month === 6) {
  /* Set the images for June */
  headerBackgroundImage = restOfYearImage10;
} else if (month === 7) {
  /* Set the images for July */
  headerBackgroundImage = restOfYearImage7;
} else if (month === 8) {
  /* Set the images for August */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = autumnImage1;
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = autumnImage2;
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = autumnImage3;
  } else {
    headerBackgroundImage = restOfYearImage6;
  }
} else if (month === 9) {
  /* Set the images for September */
  headerBackgroundImage = restOfYearImage5;
} else if (month === 10) {
  /* Set the images for October */
  if (date >= 25 && date <= 27) {
    headerBackgroundImage = halloweenImage1;
  } else if (date >= 28 && date <= 29) {
    headerBackgroundImage = halloweenImage2;
  } else if (date >= 30 && date <= 31) {
    headerBackgroundImage = halloweenImage3;
  } else {
    headerBackgroundImage = restOfYearImage4;
  }
} else if (month === 11) {
  /* Set the images for November */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = winterImage1;
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = winterImage2;
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = winterImage3;
  } else {
    headerBackgroundImage = restOfYearImage4;
  }
} else {
  /* Set the images for December */
  if (date >= 18 && date <= 20) {
    headerBackgroundImage = christmasImage1;
  } else if (date >= 21 && date <= 23) {
    headerBackgroundImage = christmasImage2;
  } else if (date >= 24 && date <= 26) {
    headerBackgroundImage = christmasImage3;
  } else if (date >= 27 && date <= 29) {
    headerBackgroundImage = christmasImage4;
  } else if (date >= 30 && date <= 31) {
    headerBackgroundImage = christmasImage5;
  } else {
    headerBackgroundImage = restOfYearImage3;
  }
}
export {
  headerBackgroundImage,
  headerLogoImage
};
