import "styled-components";
import { Theme } from "src/types/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
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
  }
}
