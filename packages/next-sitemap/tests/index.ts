import { coreTests } from "./core";
import { xmlTests } from "./xml";
import { robotsTests } from "./robots";
import { jitiTests } from "./jiti";

const allTests = [coreTests, xmlTests, robotsTests, jitiTests];

for (const testSuite of allTests) {
  testSuite();
}
