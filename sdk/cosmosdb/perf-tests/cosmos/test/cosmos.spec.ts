import { PerfTest, getEnvVar } from "@azure/test-utils-perf";
import {
  CosmosClient
} from "@azure/cosmos";
import { } from "@azure/core-util";

export abstract class CosmosTest<TOptions = {}> extends PerfTest<TOptions> {
  cosmosClient: CosmosClient;

  constructor() {
    super();
    this.cosmosClient = new CosmosClient(getEnvVar("COSMOS_CONNECTION_STRING"))
  }

  public async globalSetup() {
    await this.cosmosClient.databases.create({ id:})
  }

  public async globalCleanup() {
    // .deleteResources() using serviceNameClient
  }
}
