let nock = require('nock');

module.exports.testInfo = {"queue":"queue156323823669808979"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323823669808979')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '18916237-b003-00b4-4e70-3b7693000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:35 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323823669808979/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>8516a8fa-eea5-4f11-a693-c4cc6bfac1cb</MessageId><InsertionTime>Tue, 16 Jul 2019 00:50:37 GMT</InsertionTime><ExpirationTime>Tue, 23 Jul 2019 00:50:37 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAgBl8e3A71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:50:37 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '35a8b702-e003-00c1-4570-3bf128000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:36 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323823669808979')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '6a9f11be-3003-0004-7e70-3b8f13000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:50:37 GMT',
  'Connection',
  'close' ]);

