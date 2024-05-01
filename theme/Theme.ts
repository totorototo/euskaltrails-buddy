import { Theme } from "@/types/components";

const THEME: Theme = {
  colors: {
    light: {
      "--color-text": "hsl(222deg, 22%, 5%)",
      "--color-background": "hsl(0deg, 0%, 100%)",
      "--color-blurred-background": "hsla(0deg, 0%, 100%, 0.85)",
      "--color-primary": "hsl(245deg, 100%, 60%)",
      "--color-secondary": " hsl(333deg, 100% d, 45%)",
      "--color-tertiary": " hsl(255deg, 85%, 30%)",
      "--color-decorative": " hsl(200deg, 75%, 65%)",
      "--color-muted": " hsl(210deg, 55%, 92%)",
      "--color-muted-background": " hsla(210deg, 55%, 92%, 0.85)",
      "--color-info": " hsl(245deg, 100%, 60%)",
      "--color-success": " hsl(160deg, 100%, 40%)",
      "--color-success-background": " hsla(160deg, 100%, 40%, 0.1)",
      "--color-error": " hsl(340deg, 95%, 50%)",
      "--color-error-background": " hsla(340deg, 95%, 43%, 0.1)",
      "--color-alert": "hsl(37deg, 100%, 50%)",
      "--color-alert-background": "hsla(52deg, 100%, 50%, 0.25)",
      "--color-venn-0": " hsl(190deg, 100%, 65%)",
      "--color-venn-1": "hsl(340deg, 100%, 65%)",
      "--color-gray-100": "hsl(225deg, 25%, 95%)",
      "--color-gray-200": "hsl(225deg, 16%, 90%)",
      "--color-gray-300": "hsl(225deg, 8%, 80%)",
      "--color-gray-400": "hsl(225deg, 8%, 70%)",
      "--color-gray-500": "hsl(225deg, 7%, 60%)",
      "--color-gray-600": "hsl(225deg, 15%, 50%)",
      "--color-gray-700": "hsl(225deg, 12%, 40%)",
      "--color-gray-900": "hsl(225deg, 25%, 20%)",
      "--color-gray-1000": "hsl(225deg, 15%, 15%)",
      "--color-subtle-background": " hsl(225deg, 25%, 95%)",
      "--color-subtle-floating": "hsl(0deg, 0%, 100%)",
      "--color-homepage-light": "hsl(204deg, 67%, 85%)",
      "--color-homepage-dark": "hsl(202deg, 71%, 90%)",
      "--color-homepage-bg": "hsl(204deg, 67%, 85%)",
      "--syntax-bg": "hsl(225deg, 25%, 97%)",
      "--syntax-highlight": "hsl(225deg, 25%, 93%)",
      "--syntax-txt": " RGB(42, 42, 42)",
      "--syntax-comment": "#467790",
      "--syntax-prop": "#da0079",
      "--syntax-bool": "#bf00b8",
      "--syntax-val": "#78909C",
      "--syntax-str": "#651fff",
      "--syntax-name": "#AA00FF",
      "--syntax-del": "rgb(255, 85, 85)",
      "--syntax-regex": "#3600d6",
      "--syntax-fn": "#3D5AFE",
    },
    dark: {
      "--color-text": "hsl(0deg, 0%, 80%)",
      "--color-background": "#212429",
      "--color-blurred-background": " hsla(210deg, 30%, 8%, 0.85)",
      "--color-primary": " hsl(333deg, 100%, 52%)",
      "--color-secondary": " hsl(230deg, 92%, 63%)",
      "--color-tertiary": " hsl(53deg, 100%, 50%)",
      "--color-decorative": " hsl(200deg, 50%, 60%)",
      "--color-muted": " hsl(210deg, 38%, 15%)",
      "--color-muted-background": " hsla(210deg, 38%, 15%, 0.85)",
      "--color-info": " hsl(230deg, 92%, 63%)",
      "--color-success": " hsl(160deg, 100%, 40%)",
      "--color-success-background": " hsla(160deg, 100%, 40%, 0.1)",
      "--color-error": " hsl(340deg, 95%, 60%)",
      "--color-error-background": " hsla(340deg, 95%, 43%, 0.1)",
      "--color-alert": " hsl(30deg, 100%, 50%)",
      "--color-alert-background": " hsla(38deg, 100%, 50%, 0.1)",
      "--color-venn-0": " hsl(250deg, 100%, 50%)",
      "--color-venn-1": " hsl(175deg, 100%, 50%)",
      "--color-gray-100": " hsl(210deg, 15%, 20%)",
      "--color-gray-200": " hsl(210deg, 15%, 25%)",
      "--color-gray-300": " hsl(210deg, 10%, 40%)",
      "--color-gray-400": " hsl(210deg, 9%, 45%)",
      "--color-gray-500": " hsl(210deg, 8%, 50%)",
      "--color-gray-600": " hsl(210deg, 12%, 55%)",
      "--color-gray-700": " hsl(210deg, 14%, 66%)",
      "--color-gray-900": " hsl(210deg, 25%, 88%)",
      "--color-gray-1000": " hsl(210deg, 25%, 96%)",
      "--color-subtle-background": " hsl(210deg, 30%, 8%)",
      "--color-subtle-floating": " hsl(210deg, 22%, 15%)",
      "--color-homepage-light": " hsla(200deg, 100%, 85%, 0)",
      "--color-homepage-dark": " hsla(200deg, 100%, 85%, 0.1)",
      "--color-homepage-bg": " hsl(210deg, 30%, 8%)",
      "--syntax-bg": " hsl(210deg, 30%, 12%)",
      "--syntax-highlight": " hsl(210deg, 30%, 18%)",
      "--syntax-txt": "#FFF",
      "--syntax-comment": "#6c8998",
      "--syntax-prop": "#FF39A8",
      "--syntax-bool": "#FFD600",
      "--syntax-val": "#61747D",
      "--syntax-str": "rgb(155, 109, 255)",
      "--syntax-name": "#C653FF",
      "--syntax-del": "#e17251",
      "--syntax-regex": "#F9C846",
      "--syntax-fn": " rgb(0, 190, 255)",
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
