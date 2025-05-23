// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a InstanceResource
 *
 * @summary get a InstanceResource
 * x-ms-original-file: 2024-11-01/Instance_Get_MaximumSet_Gen.json
 */
async function instanceGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.instance.get("rgiotoperations", "aio-instance");
  console.log(result);
}

async function main(): Promise<void> {
  await instanceGet();
}

main().catch(console.error);
