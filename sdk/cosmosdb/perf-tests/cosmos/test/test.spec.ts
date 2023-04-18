
import { PerfOptionDictionary } from "@azure/test-utils-perf";
import { CosmosTest } from "./cosmos.spec";

export class QueryTest extends CosmosTest {
  // The next section talks about the custom options that you can provide for a test
  public options: PerfOptionDictionary = {};

  constructor() {
    super();
    // Setting up the client
  }

  async run(): Promise<void> {
    const container = this.cosmosClient.database(CosmosTest.databaseId).container(CosmosTest.containerId);
    const res = await container.items.readAll().fetchAll();
    res.resources.map((p) => p.id);
  }
}
