// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample uses the PII-recognition endpoint to detect sensitive
 * personally identifiable information in documents (such as social security
 * numbers, addresses, and more). The API returns information about the
 * location of the sensitive information in the text, which we use to perform
 * redaction of the PII text.
 *
 * @summary detects personally-identifiable information
 * @azsdk-weight 100
 */

import {
  TextAnalysisClient,
  KnownPiiEntityDomain,
  KnownPiiEntityCategory,
} from "@azure/ai-language-text";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

export async function main(): Promise<void> {
  console.log(`Running recognizePii sample`);

  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["LANGUAGE_ENDPOINT"] || "<cognitive language service endpoint>";

  const client = new TextAnalysisClient(endpoint, new DefaultAzureCredential());

  const documents = ["My phone number is 555-5555"];

  const [result] = await client.analyze("PiiEntityRecognition", documents, "en", {
    domainFilter: KnownPiiEntityDomain.Phi,
    categoriesFilter: [
      KnownPiiEntityCategory.PhoneNumber,
      KnownPiiEntityCategory.USSocialSecurityNumber,
    ],
  });

  if (!result.error) {
    console.log(`Redacted text: "${result.redactedText}"`);
    console.log("Pii Entities: ");
    for (const entity of result.entities) {
      console.log(`\t- "${entity.text}" of type ${entity.category}`);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
