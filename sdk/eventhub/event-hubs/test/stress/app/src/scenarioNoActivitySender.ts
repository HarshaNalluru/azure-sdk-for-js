// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { delay } from "@azure/core-util";
import { EventHubsStressTester, defaultClientAppInsights } from "./eventHubsStressTester";
import parsedArgs from "minimist";
import { createEventHubsBufferedProducerClient } from "./utils";

interface ScenarioNoActivityOptions {
  testDurationInMs?: number;
  maxBatchSize?: number;
}

function sanitizeOptions(args: string[]): Required<ScenarioNoActivityOptions> {
  const options = parsedArgs<ScenarioNoActivityOptions>(args);
  return {
    testDurationInMs: options.testDurationInMs || 8 * 24 * 60 * 60 * 1000, // Default = 2 days
    maxBatchSize: options.maxBatchSize || 100,
  };
}
/// user code ///
////test messages generation
let messages = [];
let batchSize = 58;
for (let i = 0; i < batchSize; i++) {
  let tempObj = {
    Body: '{"metrics":{"metricsName":"system.memory","values":[{"time":"2023-02-14T21:05:12Z","value":52.0},{"time":"2023-02-14T21:05:17Z","value":52.0},{"time":"2023-02-14T21:05:22Z","value":52.0},{"time":"2023-02-14T21:05:27Z","value":52.0},{"time":"2023-02-14T21:05:32Z","value":52.0},{"time":"2023-02-14T21:05:37Z","value":52.0}]}}',
    properties: {
      Event_Metric: "dummy",
      "creation-time-utc": new Date().toISOString(),
      source: "DEVICE_METRIC_EVENTS",
    },
    systemProperties: { "message-id": "ediL039FrrKtImMl" },
  };
  messages.push(tempObj);
}

let batchMessage = {
  properties: {
    batch: "true",
    batchSize: batchSize,
    "iothub-creation-time-utc": new Date().toISOString(),
  },
  body: messages,
};

const eventHubPartitionCount = 2;
/// user code ends


// https://github.com/Azure/azure-sdk-for-js/issues/22899
export async function scenarioNoActivity() {
  const testOptions = sanitizeOptions(process.argv);
  const { testDurationInMs } = testOptions;

  const producer = createEventHubsBufferedProducerClient(
    {
      maxEventBufferLengthPerPartition: 20,
      maxWaitTimeInMs: 500,
      onSendEventsErrorHandler(ctx) {
        console.log("onSendEventsErrorHandler", ctx);
      },
    });

  const startedAt = new Date();

  const stressBase = new EventHubsStressTester({
    testName: "noActivity-Sender",
    snapshotIntervalInMs: 500,
    // writeSnapshotInfoToConsole: true,
  });


  for (let i = 0; i < 500; i++) {
    await delay(50);
    await producer.enqueueEvent({
      body: batchMessage,
      properties: {
        deviceId: `${i % eventHubPartitionCount}_d_${i}`,
        operationTimestamp: new Date().toISOString(),
        "iothub-message-schema": "twinChangeEvents",
        opType: "updateTwin",
      },
    });
    stressBase.eventsSentCount += batchMessage.body.length;
  }
  console.log("Done sending events");

  while (new Date().valueOf() - startedAt.valueOf() < testDurationInMs) {
    await delay(Math.random() * 60 * 10 * 1000);
  }

  await producer.close();
  await stressBase.endTest();
}

scenarioNoActivity().catch((err) => {
  console.log("Error occurred: ", err);
  defaultClientAppInsights.trackException({ exception: err, time: new Date() });
});
