/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the entity state version of the tag specified by its identifier.
 *
 * @summary Gets the entity state version of the tag specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementHeadApiTagDescription.json
 */
async function apiManagementHeadApiTagDescription(): Promise<void> {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const apiId = "59d6bb8f1f7fab13dc67ec9b";
  const tagDescriptionId = "59306a29e4bbd510dc24e5f9";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiTagDescription.getEntityTag(
    resourceGroupName,
    serviceName,
    apiId,
    tagDescriptionId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementHeadApiTagDescription();
}

main().catch(console.error);
