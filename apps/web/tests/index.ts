import { localesTests } from "./validation/locales";

const appTests = [
  localesTests,
];

for (const appTest of appTests) {
  appTest();
}
