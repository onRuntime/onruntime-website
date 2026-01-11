import { coreTests } from "./core";
import { xmlTests } from "./xml";
import { robotsTests } from "./robots";

const allTests = [coreTests, xmlTests, robotsTests];

for (const testSuite of allTests) {
  testSuite();
}
