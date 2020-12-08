// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressOptionDictionary } from "@azure/test-utils-perfstress";
import { KeyVaultTest } from "./keyVaultTest";

interface KeyVaultGetTestOptions {
  size: number;
}

export class KeyVaultGetTest extends KeyVaultTest<KeyVaultGetTestOptions> {
  public options: PerfStressOptionDictionary<KeyVaultGetTestOptions> = {
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
    await this.keyClient.createKey(KeyVaultGetTest.keyName, "EC", {
      keySize: this.parsedOptions.size!.value
    });
  }

  public async globalCleanup() {
    // TODO: Delete all keys
    // await this.keyClient.beginDeleteKey();
  }

  async runAsync(): Promise<void> {
    await this.keyClient.getKey(KeyVaultGetTest.keyName);
  }
}
