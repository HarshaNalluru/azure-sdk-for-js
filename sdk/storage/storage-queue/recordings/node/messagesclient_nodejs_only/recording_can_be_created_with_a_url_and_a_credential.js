let nock = require('nock');

module.exports.testInfo = {"queue":"queue156323824583706121"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323824583706121')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '9cce76d7-9003-002b-6d70-3b0e29000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:45 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323824583706121/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>cfd30909-3d8a-49a1-bcc0-c4242288ccc1</MessageId><InsertionTime>Tue, 16 Jul 2019 00:50:46 GMT</InsertionTime><ExpirationTime>Tue, 23 Jul 2019 00:50:46 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAZ5ntgHA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:50:46 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '35267067-9003-00ec-5570-3b72e8000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:45 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323824583706121')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c11f9a53-f003-00de-3c70-3b2a38000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:46 GMT',
  'Connection',
  'close' ]);

