import { coreTests } from "./core";
import { xmlTests } from "./xml";

const allTests = [coreTests, xmlTests];

for (const testSuite of allTests) {
  testSuite();
}
