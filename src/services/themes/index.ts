import main from "./main";
import dark from "./dark";

const complete = (theme) => { return { ...main, ...theme }; };

export default { dark: complete(dark) };