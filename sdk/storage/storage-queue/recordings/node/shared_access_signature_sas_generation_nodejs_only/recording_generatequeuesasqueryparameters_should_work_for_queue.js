let nock = require('nock');

module.exports.testInfo = {"now":"2019-07-16T00:51:02.868Z","tmr":"2019-07-16T00:51:02.868Z","queue":"queue156323826286804262"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323826286804262')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5deca766-a003-004e-6970-3bbf74000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:02 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323826286804262')
  .query(true)
  .reply(200, "", [ 'Cache-Control',
  'no-cache',
  'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5f167a66-c003-0011-4670-3b4d8a000000',
  'x-ms-version',
  '2018-03-28',
  'x-ms-approximate-messages-count',
  '0',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-approximate-messages-count,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:51:03 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323826286804262')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '529c44b7-5003-00be-7d70-3b6f1a000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:03 GMT',
  'Connection',
  'close' ]);

