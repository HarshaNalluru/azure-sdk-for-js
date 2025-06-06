/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2025-04-15/examples/CosmosDBMongoDBDatabaseMigrateToManualThroughput.json
 */
async function cosmosDbMongoDbdatabaseMigrateToManualThroughput() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginMigrateMongoDBDatabaseToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
  );
  console.log(result);
}

async function main() {
  await cosmosDbMongoDbdatabaseMigrateToManualThroughput();
}

main().catch(console.error);
