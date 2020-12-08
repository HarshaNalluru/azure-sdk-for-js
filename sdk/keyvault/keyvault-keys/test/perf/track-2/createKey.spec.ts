// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressOptionDictionary } from "@azure/test-utils-perfstress";
import { KeyVaultTest } from "./keyVaultTest";

interface KeyVaultCreateTestOptions {
  size: number;
}

export class KeyVaultCreateTest extends KeyVaultTest<KeyVaultCreateTestOptions> {
  public options: PerfStressOptionDictionary<KeyVaultCreateTestOptions> = {
    size: {
      required: true,
      description: "Size of the key",
      shortName: "sz",
      longName: "size",
      defaultValue: 10
    }
  };

  public async globalCleanup() {
    // TODO: Delete all keys
    // await this.keyClient.beginDeleteKey();
  }

  async runAsync(): Promise<void> {
    await this.keyClient.createKey(`KeyName${new Date().getTime()}`, "EC", {
      keySize: this.parsedOptions.size!.value
    });
  }
}
