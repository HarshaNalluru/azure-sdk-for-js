// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageBlobDownloadWithSASTest } from "./dowloadWithSAS.spec";
import { ServiceClient, WebResource } from "@azure/core-http";
import { drainStream } from "@azure/test-utils-perfstress";

export class CoreHTTPNewClientPerReqTest extends StorageBlobDownloadWithSASTest {
  webResource: WebResource;
  constructor() {
    super();
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
    const client = new ServiceClient();
    const response = await client.sendRequest(this.webResource);
    await drainStream(response.readableStreamBody!);
  }
}
