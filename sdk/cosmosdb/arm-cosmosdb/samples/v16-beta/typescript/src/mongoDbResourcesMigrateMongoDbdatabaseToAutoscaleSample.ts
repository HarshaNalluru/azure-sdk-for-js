/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB MongoDB database from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB MongoDB database from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBMongoDBDatabaseMigrateToAutoscale.json
 */
async function cosmosDbMongoDbdatabaseMigrateToAutoscale(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.mongoDBResources.beginMigrateMongoDBDatabaseToAutoscaleAndWait(
      resourceGroupName,
      accountName,
      databaseName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  cosmosDbMongoDbdatabaseMigrateToAutoscale();
}

main().catch(console.error);
