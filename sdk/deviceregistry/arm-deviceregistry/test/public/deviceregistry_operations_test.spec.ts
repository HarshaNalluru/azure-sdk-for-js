/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { Recorder } from "@azure-tools/test-recorder";
import { env, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { createRecorder } from "./utils/recordedClient.js";
import { DeviceRegistryManagementClient } from "../../src/deviceRegistryManagementClient.js";

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("DeviceRegistry test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: DeviceRegistryManagementClient;

  beforeEach(async (context) => {
    process.env.SystemRoot = process.env.SystemRoot || "C:\\Windows";
    recorder = await createRecorder(context);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new DeviceRegistryManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
  });

  afterEach(async () => {
    await recorder.stop();
  });
  it("operations list test", async () => {
    const resArray = new Array();
    for await (const item of client.operations.list()) {
      resArray.push(item);
    }
    assert.notEqual(resArray.length, 0);
  });
});
