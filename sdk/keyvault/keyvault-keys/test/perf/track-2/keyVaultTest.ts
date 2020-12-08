// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressTest } from "@azure/test-utils-perfstress";
import { DefaultAzureCredential } from "@azure/identity";
import { KeyClient } from "../../../src";

// Expects the .env file at the same level as the "test" folder
import * as dotenv from "dotenv";
dotenv.config();

export abstract class KeyVaultTest<TOptions> extends PerfStressTest<TOptions> {
  keyClient: KeyClient;

  constructor() {
    super();
    // DefaultAzureCredential expects the following three environment variables:
    // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
    // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
    // - AZURE_CLIENT_SECRET: The client secret for the registered application
    const credential = new DefaultAzureCredential();
    this.keyClient = new KeyClient(
      `https://${KeyVaultTest.getEnvVar("KEYVAULT_NAME")}.vault.azure.net`,
      credential
    );
  }

  static getEnvVar(name: string) {
    const val = process.env[name];
    if (!val) {
      throw `Environment variable ${name} is not defined.`;
    }
    return val;
  }
}
