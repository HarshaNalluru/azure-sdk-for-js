/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  Certificate,
  ConnectedEnvironmentsCertificatesCreateOrUpdateOptionalParams,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/ConnectedEnvironmentsCertificate_CreateOrUpdate.json
 */
async function createOrUpdateCertificate() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const connectedEnvironmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope: Certificate = {
    location: "East US",
    properties: {
      password: "private key password",
      value: Buffer.from("Y2VydA=="),
    },
  };
  const options: ConnectedEnvironmentsCertificatesCreateOrUpdateOptionalParams =
    { certificateEnvelope };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironmentsCertificates.createOrUpdate(
    resourceGroupName,
    connectedEnvironmentName,
    certificateName,
    options,
  );
  console.log(result);
}

async function main() {
  createOrUpdateCertificate();
}

main().catch(console.error);
