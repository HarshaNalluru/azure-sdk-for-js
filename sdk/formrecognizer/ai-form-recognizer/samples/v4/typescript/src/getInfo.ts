// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to programmatically retrieve metadata about the number of custom models in the Form Recognizer
 * resource and the limit of custom models that the resource will allow to be created.
 *
 * @summary get information about the count and limit of custom models in the resource
 */

import { AzureKeyCredential, DocumentModelAdministrationClient } from "@azure/ai-form-recognizer";

import "dotenv/config";

async function main(): Promise<void> {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "<endpoint>";
  const credential = new AzureKeyCredential(process.env.FORM_RECOGNIZER_API_KEY || "<api key>");

  const client = new DocumentModelAdministrationClient(endpoint, credential);

  const info = await client.getResourceDetails();

  console.log(
    `Custom document models: ${info.customDocumentModels.count} of ${info.customDocumentModels.limit}`
  );
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
