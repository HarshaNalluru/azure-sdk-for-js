// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PerfStressOptionDictionary,
  executeParallel,
  PerfStressTest
} from "@azure/test-utils-perfstress";

// Expects the .env file at the same level as the "test" folder
import * as dotenv from "dotenv";
import { BlobServiceClient, ContainerClient } from "../../../src";
import { getEnvVar, StorageBlobTest } from "./storageTest.spec";
dotenv.config();

interface StorageBlobListTestOptions {
  count: number;
}

export class ListMultiClientsInParallelTest extends PerfStressTest<StorageBlobListTestOptions> {
  public options: PerfStressOptionDictionary<StorageBlobListTestOptions> = {
    count: {
      required: true,
      description: "Number of blobs to be listed",
      longName: "count",
      defaultValue: 10
    }
  };

  blobServiceClient: BlobServiceClient;
  containerClient: ContainerClient;

  constructor() {
    super();
    const connectionString = getEnvVar("STORAGE_CONNECTION_STRING");
    this.blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    this.containerClient = this.blobServiceClient.getContainerClient(StorageBlobTest.containerName);
  }

  public async globalSetup() {
    await this.containerClient.create();
    await executeParallel(
      async (count: number, _: number) => {
        await this.containerClient.uploadBlockBlob(`blob-${count}`, Buffer.alloc(0), 0);
      },
      this.parsedOptions.count.value!,
      1000
    );
  }

  public async globalCleanup() {
    await this.containerClient.delete();
  }

  async runAsync(): Promise<void> {
    for await (const segmentResponse of this.containerClient.listBlobsFlat().byPage()) {
      for (const _ of segmentResponse.segment.blobItems) {
      }
    }
  }
}
