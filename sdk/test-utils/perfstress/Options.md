## Option-1

```ts
export abstract class PerfStressTest<TOptions = {}> {
  // Framework program.run() makes sure that it runs the method only if defined - what we have right now
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

## Option-2

```ts
export abstract class PerfStressTest<TOptions = {}> {
  // Framework forces the user to define all the methods in the test itself - new proposal
  public abstract globalSetup(): void | Promise<void>;
  public abstract globalCleanup(): void | Promise<void>;

  public abstract setup(): void | Promise<void>;
  public abstract cleanup(): void | Promise<void>;

  public abstract runAsync(abortSignal?: AbortSignalLike): Promise<void>;
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

  cleanup() {}
  setup() {}
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

## Option-3

```ts
export abstract class PerfStressTest<TOptions = {}> {
  // Framework expects the users to call super.globalSetup(), etc from the test to make sure the base code(if added in future) gets loaded
  public globalSetup(): void | Promise<void> {}
  public globalCleanup(): void | Promise<void> {}

  public setup(): void | Promise<void> {}
  public cleanup(): void | Promise<void> {}

  public abstract runAsync(abortSignal?: AbortSignalLike): Promise<void>;
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
