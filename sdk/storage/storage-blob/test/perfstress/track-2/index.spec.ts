// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfStressProgram, selectPerfStressTest } from "@azure/test-utils-perfstress";
import { StorageBlobDownloadTest } from "./download.spec";
import { StorageBlobUploadTest } from "./upload.spec";
import { StorageBlobUploadFileTest } from "./uploadFromFile.spec";
import { StorageBlobListTest } from "./listBlobs.spec";
import { StorageBlobDownloadWithSASTest } from "./dowloadWithSAS.spec";
import { CoreHTTPDownloadWithSASTest } from "./core-http.spec";
import { NodeFetchDownloadWithSASTest } from "./node-fetch.spec";
import { CoreHTTPSDownloadWithSASTest } from "./core-https.spec";
import { CoreHTTPSingleClientTest } from "./core-http-single-client.spec";
import { CoreHTTPMultiClientsInParallelTest } from "./core-http-multiple-clients-in-parallel.spec";
import { CoreHTTPNewClientPerReqTest } from "./core-http-new-client-per-req.spec";

console.log("=== Starting the perfStress test ===");

const perfStressProgram = new PerfStressProgram(
  selectPerfStressTest([
    StorageBlobDownloadTest,
    StorageBlobUploadTest,
    StorageBlobUploadFileTest,
    StorageBlobListTest,
    StorageBlobDownloadWithSASTest,
    CoreHTTPDownloadWithSASTest,
    CoreHTTPSDownloadWithSASTest,
    NodeFetchDownloadWithSASTest,
    CoreHTTPSingleClientTest,
    CoreHTTPMultiClientsInParallelTest,
    CoreHTTPNewClientPerReqTest
  ])
);

perfStressProgram.run();
