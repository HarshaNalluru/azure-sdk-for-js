/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete security contact configurations for the subscription
 *
 * @summary Delete security contact configurations for the subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-12-01-preview/examples/SecurityContacts/DeleteSecurityContact_example.json
 */
async function deletesASecurityContactData(): Promise<void> {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const securityContactName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityContacts.delete(securityContactName);
  console.log(result);
}

async function main(): Promise<void> {
  await deletesASecurityContactData();
}

main().catch(console.error);
