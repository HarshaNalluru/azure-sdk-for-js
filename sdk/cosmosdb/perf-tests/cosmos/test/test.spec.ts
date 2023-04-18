
import { PerfOptionDictionary } from "@azure/test-utils-perf";
import { CosmosTest } from "./cosmos.spec";

export class QueryTest extends CosmosTest {
  // The next section talks about the custom options that you can provide for a test
  public options: PerfOptionDictionary = {};

  constructor() {
    super();
    // Setting up the client
  }

  public async globalSetup() {
    await super.globalSetup(); // Calling base class' setup
    // Add any additional setup
  }

  async run(): Promise < void> {
    // call the method on `serviceNameClient` that you're interested in testing
  }
}
