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
