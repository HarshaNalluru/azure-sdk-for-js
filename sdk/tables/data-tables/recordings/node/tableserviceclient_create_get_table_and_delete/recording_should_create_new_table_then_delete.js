let nock = require('nock');

module.exports.hash = "9a79213ad92e0d0d2f97cf019ee198ef";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://fakestorageaccount.table.core.windows.net:443', {"encodedQueryParams":true})
  .post('/Tables', {"TableName":"testTablenode"})
  .query(true)
  .reply(201, {"odata.metadata":"https://fakestorageaccount.table.core.windows.net/$metadata#Tables/@Element","TableName":"testTablenode"}, [
  'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  'Location',
  "https://fakestorageaccount.table.core.windows.net/Tables('testTablenode')",
  'Server',
  'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '54bafd2e-1002-0004-0803-f5937e000000',
  'x-ms-client-request-id',
  '71a98aba-f525-447d-90bc-a5680a21a341',
  'x-ms-version',
  '2019-02-02',
  'X-Content-Type-Options',
  'nosniff',
  'Preference-Applied',
  'return-content',
  'Date',
  'Wed, 27 Jan 2021 23:27:25 GMT'
]);

nock('https://fakestorageaccount.table.core.windows.net:443', {"encodedQueryParams":true})
  .get('/Tables')
  .query(true)
  .reply(200, {"odata.metadata":"https://fakestorageaccount.table.core.windows.net/$metadata#Tables","value":[{"TableName":"testTablenode"}]}, [
  'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  'Server',
  'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '54bafdad-1002-0004-0503-f5937e000000',
  'x-ms-client-request-id',
  '4594cf78-eed4-4aee-943d-1f1b5fbb980e',
  'x-ms-version',
  '2019-02-02',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 27 Jan 2021 23:27:25 GMT'
]);

nock('https://fakestorageaccount.table.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/Tables(%27testTablenode%27)')
  .query(true)
  .reply(204, "", [
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '54bafe3d-1002-0004-1303-f5937e000000',
  'x-ms-client-request-id',
  '1a932e19-5f50-401d-a8ac-e8b02f747fb8',
  'x-ms-version',
  '2019-02-02',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 27 Jan 2021 23:27:25 GMT'
]);
