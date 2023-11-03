import { Theme } from "src/types/themes";

import dark from "./dark";
import main from "./main";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { dark: complete(dark) };

export default themes;
