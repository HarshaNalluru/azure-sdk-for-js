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
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2025-04-15/examples/CosmosDBCassandraTableMigrateToAutoscale.json
 */
async function cosmosDbCassandraTableMigrateToAutoscale(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const tableName = "tableName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.cassandraResources.beginMigrateCassandraTableToAutoscaleAndWait(
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbCassandraTableMigrateToAutoscale();
}

main().catch(console.error);
