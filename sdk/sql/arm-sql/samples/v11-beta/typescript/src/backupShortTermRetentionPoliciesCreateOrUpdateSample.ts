/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  BackupShortTermRetentionPolicy,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a database's short term retention policy.
 *
 * @summary Updates a database's short term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/UpdateShortTermRetentionPolicy.json
 */
async function updateTheShortTermRetentionPolicyForTheDatabase(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "resourceGroup";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const policyName = "default";
  const parameters: BackupShortTermRetentionPolicy = {
    diffBackupIntervalInHours: 24,
    retentionDays: 7,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.backupShortTermRetentionPolicies.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      databaseName,
      policyName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  updateTheShortTermRetentionPolicyForTheDatabase();
}

main().catch(console.error);
