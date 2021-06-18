import { Theme } from "src/types/themes";

const dark: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgb(0, 0, 0)",
      darker: "rgb(30, 31, 32)",
      dark: "rgb(75, 75, 76)",
      light: "rgb(30, 30, 30)",
      lighter: "rgb(36, 36, 36)",
      lightest: "rgb(45, 45, 45)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(200, 200, 200)",
      light: "rgb(150, 150, 150)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(30, 31, 32)",
    },
    accent: {
      light: "rgb(255, 255, 255)",
    },
  },
};

export default dark;
