import { PerfTest, getEnvVar } from "@azure/test-utils-perf";
import { CosmosClient } from "@azure/cosmos";
import { v4 as generateUuid } from "uuid";


export abstract class CosmosTest<TOptions = {}> extends PerfTest<TOptions> {
  cosmosClient: CosmosClient;
  static databaseId = generateUuid()
  static containerId = generateUuid()

  constructor() {
    super();
    this.cosmosClient = new CosmosClient(getEnvVar("COSMOS_CONNECTION_STRING"))
  }

  public async globalSetup() {
    await this.cosmosClient.databases.createIfNotExists({ id: CosmosTest.databaseId });
    await this.cosmosClient.database(CosmosTest.databaseId).containers.createIfNotExists({ id: CosmosTest.containerId });
  }

  public async globalCleanup() {
    await this.cosmosClient.database(CosmosTest.databaseId).delete();
  }
}
