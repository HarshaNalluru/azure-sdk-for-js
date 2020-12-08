// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressOptionDictionary } from "@azure/test-utils-perfstress";
import { KeyVaultTest } from "./keyVaultTest";

interface KeyVaultUpdateTestOptions {
  size: number;
}

export class KeyVaultUpdateTest extends KeyVaultTest<KeyVaultUpdateTestOptions> {
  public options: PerfStressOptionDictionary<KeyVaultUpdateTestOptions> = {
    size: {
      required: true,
      description: "Size of the key",
      shortName: "sz",
      longName: "size",
      defaultValue: 10
    }
  };

  static keyName = `KeyName${new Date().getTime()}`;

  public async globalSetup() {
    await this.keyClient.createKey(KeyVaultUpdateTest.keyName, "EC", {
      keySize: this.parsedOptions.size!.value
    });
  }

  public async globalCleanup() {
    // TODO: Delete all keys
    // await this.keyClient.beginDeleteKey();
  }

  async runAsync(): Promise<void> {
    // TODO: What is the version that we need to pass?
    await this.keyClient.updateKeyProperties(KeyVaultUpdateTest.keyName, "1.0");
  }
}
