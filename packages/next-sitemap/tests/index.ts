import { coreTests } from "./core";
import { xmlTests } from "./xml";
import { robotsTests } from "./robots";
import { jitiTests } from "./jiti";
import { workerTests } from "./worker";

const allTests = [coreTests, xmlTests, robotsTests, jitiTests, workerTests];

for (const testSuite of allTests) {
  testSuite();
}
