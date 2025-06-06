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
 * This sample demonstrates how to Gets the specified contact Profile in a specified resource group.
 *
 * @summary Gets the specified contact Profile in a specified resource group.
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/stable/2022-11-01/examples/ContactProfileGet.json
 */
async function getAContactProfile(): Promise<void> {
  const subscriptionId =
    process.env["ORBITAL_SUBSCRIPTION_ID"] ||
    "c1be1141-a7c9-4aac-9608-3c2e2f1152c3";
  const resourceGroupName =
    process.env["ORBITAL_RESOURCE_GROUP"] || "contoso-Rgp";
  const contactProfileName = "CONTOSO-CP";
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const result = await client.contactProfiles.get(
    resourceGroupName,
    contactProfileName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getAContactProfile();
}

main().catch(console.error);
