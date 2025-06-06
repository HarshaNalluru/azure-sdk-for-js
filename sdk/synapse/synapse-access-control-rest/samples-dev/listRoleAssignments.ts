// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how list all role assignments
 *
 * @summary list role assignments
 * @azsdk-weight 20
 */

import AccessControl, { isUnexpected, paginate } from "@azure-rest/synapse-access-control";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";
const endpoint = process.env["ENDPOINT"] || "";

async function main(): Promise<void> {
  const client = AccessControl(endpoint, new DefaultAzureCredential());
  const initialResponse = await client.path("/roleAssignments").get();

  if (isUnexpected(initialResponse)) {
    throw initialResponse.body.error;
  }

  const assignments = paginate(client, initialResponse);

  for await (const assignment of assignments) {
    console.log(assignment.id);
  }
}

main().catch(console.error);
