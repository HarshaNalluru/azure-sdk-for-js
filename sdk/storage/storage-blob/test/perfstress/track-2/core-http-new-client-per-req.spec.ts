// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PerfStressOptionDictionary,
  executeParallel,
  PerfStressTest
} from "@azure/test-utils-perfstress";

// Expects the .env file at the same level as the "test" folder
import * as dotenv from "dotenv";
import { BlobServiceClient } from "../../../src";
import { getEnvVar, StorageBlobTest } from "./storageTest.spec";
dotenv.config();

interface StorageBlobListTestOptions {
  count: number;
}

const connectionString = getEnvVar("STORAGE_CONNECTION_STRING");

export class ListNewClientPerReqTest extends PerfStressTest<StorageBlobListTestOptions> {
  public options: PerfStressOptionDictionary<StorageBlobListTestOptions> = {
    count: {
      required: true,
      description: "Number of blobs to be listed",
      longName: "count",
      defaultValue: 10
    }
  };

  public async globalSetup() {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(StorageBlobTest.containerName);
    await containerClient.create();
    await executeParallel(
      async (count: number, _: number) => {
        await containerClient.uploadBlockBlob(`blob-${count}`, Buffer.alloc(0), 0);
      },
      this.parsedOptions.count.value!,
      1000
    );
  }

  public async globalCleanup() {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(StorageBlobTest.containerName);
    await containerClient.delete();
  }

  async runAsync(): Promise<void> {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(StorageBlobTest.containerName);
    for await (const segmentResponse of containerClient.listBlobsFlat().byPage()) {
      for (const _ of segmentResponse.segment.blobItems) {
      }
    }
  }
}
