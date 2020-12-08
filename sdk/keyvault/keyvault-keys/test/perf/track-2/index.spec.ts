// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressProgram, selectPerfStressTest } from "@azure/test-utils-perfstress";
import { KeyVaultCreateTest } from "./createKey.spec";
import { KeyVaultGetTest } from "./getKey.spec";
import { KeyVaultUpdateTest } from "./updateKey.spec";
import { KeyVaultListTest } from "./listKeys.spec";

console.log("=== Starting the perfStress test ===");

const perfStressProgram = new PerfStressProgram(
  selectPerfStressTest([KeyVaultCreateTest, KeyVaultGetTest, KeyVaultListTest, KeyVaultUpdateTest])
);

perfStressProgram.run();
