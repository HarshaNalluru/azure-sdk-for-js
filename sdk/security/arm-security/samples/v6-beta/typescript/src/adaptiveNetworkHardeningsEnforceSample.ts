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
  AdaptiveNetworkHardeningEnforceRequest,
  SecurityCenter,
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Enforces the given rules on the NSG(s) listed in the request
 *
 * @summary Enforces the given rules on the NSG(s) listed in the request
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/AdaptiveNetworkHardenings/EnforceAdaptiveNetworkHardeningRules_example.json
 */
async function enforcesTheGivenRulesOnTheNsgSListedInTheRequest(): Promise<void> {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "rg1";
  const resourceNamespace = "Microsoft.Compute";
  const resourceType = "virtualMachines";
  const resourceName = "vm1";
  const adaptiveNetworkHardeningResourceName = "default";
  const body: AdaptiveNetworkHardeningEnforceRequest = {
    networkSecurityGroups: [
      "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityGroups/nsg1",
      "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/rg2/providers/Microsoft.Network/networkSecurityGroups/nsg2",
    ],
    rules: [
      {
        name: "rule1",
        destinationPort: 3389,
        direction: "Inbound",
        ipAddresses: ["100.10.1.1", "200.20.2.2", "81.199.3.0/24"],
        protocols: ["TCP"],
      },
      {
        name: "rule2",
        destinationPort: 22,
        direction: "Inbound",
        ipAddresses: [],
        protocols: ["TCP"],
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.adaptiveNetworkHardenings.beginEnforceAndWait(
    resourceGroupName,
    resourceNamespace,
    resourceType,
    resourceName,
    adaptiveNetworkHardeningResourceName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  enforcesTheGivenRulesOnTheNsgSListedInTheRequest();
}

main().catch(console.error);
