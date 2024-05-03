import { Theme } from "@/types/components";

const THEME: Theme = {
  colors: {
    light: {
      "--color-background": "rgb(247, 247, 255)",
      "--color-text": "rgb(46, 53, 50)",
      "--color-accent": "rgb(46, 134, 171)",
      "--color-warning": "rgb(241, 143, 1)",
      "--color-alert": "rgb(192, 50, 33)",
    },
    dark: {
      "--color-text": "rgb(247, 247, 255)",
      "--color-background": "rgb(46, 53, 50)",
      "--color-accent": "rgb(46, 134, 171)",
      "--color-warning": "rgb(241, 143, 1)",
      "--color-alert": "rgb(192, 50, 33)",
    },
  },
  font: {
    family: {
      "--font-family-serif": "'Helvetica', georgia, times, serif",
      "--font-family-sansSerif":
        '"Open+Sans", -apple-system, BlinkMacSystemFont, "Montserrat", "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    },
    weights: {
      "--font-weight-bold": "500",
      "--font-weight-medium": "400",
      "--font-weight-light": "300",
    },
    sizes: {
      "--font-size-small": "14px",
      "--font-size": "16px",
      "--font-size-medium": "20px",
    },
  },

  breakpoints: ["40em", "52em", "64em"],
};

export default THEME;
