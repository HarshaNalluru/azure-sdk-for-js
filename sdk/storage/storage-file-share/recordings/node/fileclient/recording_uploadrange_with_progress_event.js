let nock = require('nock');

module.exports.testInfo = {"uniqueName":{"share":"share157592571325309446","dir":"dir157592571337909173","file":"file157592571353405656"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571325309446')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:33 GMT',
  'ETag',
  '"0x8D77CEBF31342E9"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '263d4aac-f01a-0082-67d4-ae9126000000',
  'x-ms-client-request-id',
  '1480dff1-ae29-46b0-8df2-1aa239cdae79',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Mon, 09 Dec 2019 21:08:32 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571325309446/dir157592571337909173')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:33 GMT',
  'ETag',
  '"0x8D77CEBF3299B5F"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '88fd3a8d-b01a-0024-7cd4-aea938000000',
  'x-ms-client-request-id',
  'd6a5a21c-a8ce-4d78-a91c-22edf3109ccc',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-12-09T21:08:33.4963551Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:33.4963551Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:33.4963551Z',
  'x-ms-file-permission-key',
  '15246684120248489204*13496228697838683005',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:32 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571325309446/dir157592571337909173/file157592571353405656')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:33 GMT',
  'ETag',
  '"0x8D77CEBF340F9A3"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '49733da7-f01a-0001-6ad4-ae318b000000',
  'x-ms-client-request-id',
  '1587dc81-e5f2-4de3-a263-8810e9c2566e',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-permission-key',
  '1435755748577930227*13496228697838683005',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:32 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571325309446/dir157592571337909173/file157592571353405656', "HelloWorld")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'aOEJ8PQMpyoV4FzCJ4b45g==',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:33 GMT',
  'ETag',
  '"0x8D77CEBF347D922"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '49733daa-f01a-0001-6cd4-ae318b000000',
  'x-ms-client-request-id',
  '6e36104c-d8b9-4afb-9110-6cac05ba2552',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:32 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share157592571325309446/dir157592571337909173/file157592571353405656')
  .reply(200, "HelloWorld", [ 'Content-Length',
  '10',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:33 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D77CEBF347D922"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '49733dab-f01a-0001-6dd4-ae318b000000',
  'x-ms-client-request-id',
  'a739c806-374f-4254-aa90-451fe2ae20e8',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-file-change-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:33.6495011Z',
  'x-ms-file-permission-key',
  '1435755748577930227*13496228697838683005',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-lease-status,x-ms-lease-state,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 09 Dec 2019 21:08:32 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share157592571325309446')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '263d4ab0-f01a-0082-68d4-ae9126000000',
  'x-ms-client-request-id',
  'a1314d06-f270-4758-8ec8-0c452d133d2d',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Mon, 09 Dec 2019 21:08:33 GMT' ]);
