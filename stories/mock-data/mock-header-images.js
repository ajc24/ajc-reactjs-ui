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

/* Build the list of images for the header */
const headerAutumnImages = [
  autumnImage1,
  autumnImage2,
  autumnImage3,
];
const headerChristmasImages = [
  christmasImage1,
  christmasImage2,
  christmasImage3,
  christmasImage4,
  christmasImage5,
];
const headerHalloweenImages = [
  halloweenImage1,
  halloweenImage2,
  halloweenImage3,
];
const headerNewYearImages = [
  newYearImage1,
  newYearImage2,
  newYearImage3,
];
const headerRestOfYearImages = [
  restOfYearImage1,
  restOfYearImage2,
  restOfYearImage3,
  restOfYearImage4,
  restOfYearImage5,
  restOfYearImage6,
  restOfYearImage7,
  restOfYearImage8,
  restOfYearImage9,
  restOfYearImage10,
];
const headerSpringImages = [
  springImage1,
  springImage2,
  springImage3,
];
const headerSummerImages = [
  summerImage1,
  summerImage2,
  summerImage3,
];
const headerValentinesImages = [
  valentinesImage1,
];
const headerWinterImages = [
  winterImage1,
  winterImage2,
  winterImage3,
];

/* Set the header depending on the current date */
let headerBackgroundImage;
const todaysDate = new Date();
const date = todaysDate.getDate();
const month = todaysDate.getMonth() + 1;
if (month === 1) {
  /* Set the images for January */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = headerNewYearImages[0];
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = headerNewYearImages[1];
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = headerNewYearImages[2];
  } else {
    headerBackgroundImage = headerRestOfYearImages[2];
  }
} else if (month === 2) {
  /* Set the images for February */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = headerSpringImages[0];
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = headerSpringImages[1];
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = headerSpringImages[2];
  } else if (date === 14) {
    headerBackgroundImage = headerValentinesImages[0];
  } else {
    headerBackgroundImage = headerRestOfYearImages[7];
  }
} else if (month === 3) {
  /* Set the images for March */
  headerBackgroundImage = headerRestOfYearImages[0];
} else if (month === 4) {
  /* Set the images for April */
  headerBackgroundImage = headerRestOfYearImages[1];
} else if (month === 5) {
  /* Set the images for May */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = headerSummerImages[0];
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = headerSummerImages[1];
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = headerSummerImages[2];
  } else {
    headerBackgroundImage = headerRestOfYearImages[8];
  }
} else if (month === 6) {
  /* Set the images for June */
  headerBackgroundImage = headerRestOfYearImages[9];
} else if (month === 7) {
  /* Set the images for July */
  headerBackgroundImage = headerRestOfYearImages[6];
} else if (month === 8) {
  /* Set the images for August */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = headerAutumnImages[0];
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = headerAutumnImages[1];
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = headerAutumnImages[2];
  } else {
    headerBackgroundImage = headerRestOfYearImages[5];
  }
} else if (month === 9) {
  /* Set the images for September */
  headerBackgroundImage = headerRestOfYearImages[4];
} else if (month === 10) {
  /* Set the images for October */
  if (date >= 25 && date <= 27) {
    headerBackgroundImage = headerHalloweenImages[0];
  } else if (date >= 28 && date <= 29) {
    headerBackgroundImage = headerHalloweenImages[1];
  } else if (date >= 30 && date <= 31) {
    headerBackgroundImage = headerHalloweenImages[2];
  } else {
    headerBackgroundImage = headerRestOfYearImages[3];
  }
} else if (month === 11) {
  /* Set the images for November */
  if (date >= 1 && date <= 3) {
    headerBackgroundImage = headerWinterImages[0];
  } else if (date >= 4 && date <= 5) {
    headerBackgroundImage = headerWinterImages[1];
  } else if (date >= 6 && date <= 7) {
    headerBackgroundImage = headerWinterImages[2];
  } else {
    headerBackgroundImage = headerRestOfYearImages[3];
  }
} else {
  /* Set the images for December */
  if (date >= 18 && date <= 20) {
    headerBackgroundImage = headerChristmasImages[0];
  } else if (date >= 21 && date <= 23) {
    headerBackgroundImage = headerChristmasImages[1];
  } else if (date >= 24 && date <= 26) {
    headerBackgroundImage = headerChristmasImages[2];
  } else if (date >= 27 && date <= 29) {
    headerBackgroundImage = headerChristmasImages[3];
  } else if (date >= 30 && date <= 31) {
    headerBackgroundImage = headerChristmasImages[4];
  } else {
    headerBackgroundImage = headerRestOfYearImages[2];
  }
}

export {
  headerAutumnImages,
  headerBackgroundImage,
  headerChristmasImages,
  headerHalloweenImages,
  headerLogoImage,
  headerNewYearImages,
  headerRestOfYearImages,
  headerSpringImages,
  headerSummerImages,
  headerValentinesImages,
  headerWinterImages,
};
