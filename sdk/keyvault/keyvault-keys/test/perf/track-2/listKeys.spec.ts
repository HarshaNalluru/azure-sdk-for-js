// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyVaultTest } from "./keyVaultTest";
import { PerfStressOptionDictionary } from "@azure/test-utils-perfstress";

interface KeyVaultListTestOptions {
  count: number;
}

export class KeyVaultListTest extends KeyVaultTest<KeyVaultListTestOptions> {
  public options: PerfStressOptionDictionary<KeyVaultListTestOptions> = {
    count: {
      required: true,
      description: "Number of keys to be listed",
      longName: "count",
      defaultValue: 10
    }
  };

  public async globalSetup() {
    const tasks = [];
    for (let i = 0; i < this.parsedOptions.count.value!; i++) {
      tasks.push(this.keyClient.createKey(`KeyName${new Date().getTime()}`, "EC"));
    }
    await Promise.all(tasks);
  }

  public async globalCleanup() {
    // TODO: Delete all keys
    // await this.keyClient.beginDeleteKey();
  }

  async runAsync(): Promise<void> {
    for await (const _ of this.keyClient.listPropertiesOfKeys()) {
    }
  }
}
