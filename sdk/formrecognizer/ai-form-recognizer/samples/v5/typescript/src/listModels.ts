// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to iterate over the models in a resource. This will include both custom and prebuilt models.
 *
 * @summary iterate over the models in a resource
 */

import { DocumentModelAdministrationClient } from "@azure/ai-form-recognizer";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

async function main(): Promise<void> {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "<endpoint>";
  const credential = new DefaultAzureCredential();

  const client = new DocumentModelAdministrationClient(endpoint, credential);

  for await (const modelSummary of client.listDocumentModels()) {
    console.log("- ID", modelSummary.modelId);
    console.log("  Created:", modelSummary.createdOn);
    console.log("  Description: ", modelSummary.description || "<none>");

    // The model summary does not include `docTypes`, so we must additionally call `getModel` to retrieve them
    const { docTypes } = await client.getDocumentModel(modelSummary.modelId);

    console.log("  Document Types:");
    for (const docType of Object.keys(docTypes || {})) {
      console.log("  -", docType);
    }
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
