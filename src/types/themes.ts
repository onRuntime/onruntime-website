export type Theme = {
  id: number;
  colors: {
    layout: {
      darkest: string;
      darker: string;
      dark: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    text: {
      lightest: string;
      lighter: string;
      light: string;
      dark: string;
      darker: string;
      darkest: string;
    };
    accent: { light: string };
  };
};

export type MainTheme = {
  family: {
    primary: string;
  };
  weight: {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
  };
  size: {
    title: string;
    large: string;
    medium: string;
    normal: string;
    small: string;
    tiny: string;
  };
  breakpoint: {
    /* Desktops and laptops */
    desktop: string;
    /* iPads (landscape) */
    laptop: string;
    /* iPads (portrait) */
    tablet: string;
    /* Smartphones (landscape) */
    mobile: string;
  };
};
