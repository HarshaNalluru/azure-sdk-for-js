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
  BigDataPoolResourceInfo,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new Big Data pool.
 *
 * @summary Create a new Big Data pool.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/CreateOrUpdateBigDataPool.json
 */
async function createOrUpdateABigDataPool(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const bigDataPoolName = "ExamplePool";
  const bigDataPoolInfo: BigDataPoolResourceInfo = {
    autoPause: { delayInMinutes: 15, enabled: true },
    autoScale: { enabled: true, maxNodeCount: 50, minNodeCount: 3 },
    defaultSparkLogFolder: "/logs",
    isAutotuneEnabled: false,
    libraryRequirements: { content: "", filename: "requirements.txt" },
    location: "West US 2",
    nodeCount: 4,
    nodeSize: "Medium",
    nodeSizeFamily: "MemoryOptimized",
    sparkEventsFolder: "/events",
    sparkVersion: "2.4",
    tags: { key: "value" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.bigDataPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    bigDataPoolName,
    bigDataPoolInfo
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateABigDataPool();
}

main().catch(console.error);
