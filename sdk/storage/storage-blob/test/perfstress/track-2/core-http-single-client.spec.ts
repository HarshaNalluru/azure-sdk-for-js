// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageBlobDownloadWithSASTest } from "./dowloadWithSAS.spec";
import { ServiceClient, WebResource } from "@azure/core-http";
import { drainStream } from "@azure/test-utils-perfstress";

const client = new ServiceClient();
export class CoreHTTPSingleClientTest extends StorageBlobDownloadWithSASTest {
  client: ServiceClient;
  webResource: WebResource;
  constructor() {
    super();
    this.client = client;
    this.webResource = new WebResource(
      this.sasUrl,
      undefined,
      undefined,
      undefined,
      undefined,
      true, // streamResponseBody
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      true // keepAlive
    );
  }

  async runAsync(): Promise<void> {
    const response = await this.client.sendRequest(this.webResource);
    await drainStream(response.readableStreamBody!);
  }
}
