## Option-1

```ts
export abstract class PerfStressTest<TOptions = {}> {
  // Framework program.run() makes sure that it runs the method only if defined
  public globalSetup?(): void | Promise<void>;
  public globalCleanup?(): void | Promise<void>;

  public setup?(): void | Promise<void>;
  public cleanup?(): void | Promise<void>;

  public async runAsync?(abortSignal?: AbortSignalLike): Promise<void>;
}

export abstract class StorageBlobTest<TOptions> extends PerfStressTest<TOptions> {
  constructor() {
    super();
    this.blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    this.containerClient = this.blobServiceClient.getContainerClient(StorageBlobTest.containerName);
  }

  public async globalSetup() {
    await this.containerClient.create();
  }

  public async globalCleanup() {
    await this.containerClient.delete();
  }
}

export class StorageBlobDownloadTest extends StorageBlobTest<StorageBlobDownloadTestOptions> {
  constructor() {
    super();
    this.blockBlobClient = this.containerClient.getBlockBlobClient(
      StorageBlobDownloadTest.blobName
    );
  }

  public async globalSetup() {
    await super.globalSetup();

    // Create a blob
    await this.blockBlobClient.upload(
      Buffer.alloc(this.parsedOptions.size.value!),
      this.parsedOptions.size.value!
    );
  }

  async runAsync(): Promise<void> {
    const downloadResponse = await this.blockBlobClient.download();
    await drainStream(downloadResponse.readableStreamBody!);
  }
}
```
