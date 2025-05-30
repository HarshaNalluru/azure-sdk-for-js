/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ActiveDeploymentCollection,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Set existing Deployment under the app as active
 *
 * @summary Set existing Deployment under the app as active
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Apps_SetActiveDeployments.json
 */
async function appsSetActiveDeployments() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const activeDeploymentCollection: ActiveDeploymentCollection = {
    activeDeploymentNames: ["default"]
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginSetActiveDeploymentsAndWait(
    resourceGroupName,
    serviceName,
    appName,
    activeDeploymentCollection
  );
  console.log(result);
}

async function main() {
  appsSetActiveDeployments();
}

main().catch(console.error);
