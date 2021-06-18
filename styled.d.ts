import "styled-components";
import { Theme } from "src/types/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}
