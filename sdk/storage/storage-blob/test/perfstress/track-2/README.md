### Guide

1. Build the storage-blob package `rush build -t storage-blob`.
2. Navigate to `storage-blob` folder `cd sdk\storage\storage-blob\`.
3. Create a storage account and populate the .env file at `storage\storage-blob` folder with `STORAGE_CONNECTION_STRING` variables.
4. Run the tests as follows

   - download
     - `npm run perfstress-test:node -- StorageBlobDownloadTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - upload
     - `npm run perfstress-test:node -- StorageBlobUploadTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - upload file
     - `npm run perfstress-test:node -- StorageBlobUploadFileTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - list blobs
     - `npm run perfstress-test:node -- StorageBlobListTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - download using sas with storage-blob
     - `npm run perfstress-test:node -- StorageBlobDownloadWithSASTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - download using sas with node-fetch
     - `npm run perfstress-test:node -- NodeFetchDownloadWithSASTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - download using sas with core-http
     - `npm run perfstress-test:node -- CoreHTTPDownloadWithSASTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - download using sas with core-https
     - `npm run perfstress-test:node -- CoreHTTPSDownloadWithSASTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - list blobs - single client
     - `npm run perfstress-test:node -- ListSingleClientTest --warmup 30 --duration 30 --iterations 3 --parallel 16 --count 50`
   - list blobs - multiple clients in parallel
     - `npm run perfstress-test:node -- ListMultiClientsInParallelTest --warmup 30 --duration 30 --iterations 3 --parallel 16 --count 50`
   - list blobs - multiple clients in parallel
     - `npm run perfstress-test:node -- ListNewClientPerReqTest --warmup 30 --duration 30 --iterations 3 --parallel 16 --count 50`
