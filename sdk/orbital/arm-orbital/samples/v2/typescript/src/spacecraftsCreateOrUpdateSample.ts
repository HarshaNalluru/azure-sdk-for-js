/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureOrbital } from "@azure/arm-orbital";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a spacecraft resource.
 *
 * @summary Creates or updates a spacecraft resource.
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/stable/2022-11-01/examples/SpacecraftCreate.json
 */
async function createASpacecraft(): Promise<void> {
  const subscriptionId =
    process.env["ORBITAL_SUBSCRIPTION_ID"] ||
    "c1be1141-a7c9-4aac-9608-3c2e2f1152c3";
  const resourceGroupName =
    process.env["ORBITAL_RESOURCE_GROUP"] || "contoso-Rgp";
  const spacecraftName = "CONTOSO_SAT";
  const location = "eastus2";
  const titleLine = "CONTOSO_SAT";
  const tleLine1 = "1 27424U 02022A   22167.05119303  .00000638  00000+0  15103-3 0  9994";
  const tleLine2 = "2 27424  98.2477 108.9546 0000928  92.9194 327.0802 14.57300770 69982";
  const links = [
    {
      "name": "uplink_lhcp1",
      "centerFrequencyMHz": 2250.0,
      "bandwidthMHz": 2.0,
      "direction": "Uplink",
      "polarization": "LHCP"
    },
    {
      "name": "downlink_rhcp1",
      "centerFrequencyMHz": 8160.0,
      "bandwidthMHz": 15.0,
      "direction": "Downlink",
      "polarization": "RHCP"
    }
  ];
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const result = await client.spacecrafts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    spacecraftName,
    location,
    titleLine,
    tleLine1,
    tleLine2,
    links
  );
  console.log(result);
}

async function main(): Promise<void> {
  createASpacecraft();
}

main().catch(console.error);
