let nock = require('nock');

module.exports.testInfo = {"queue":"queue156323817735803698"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323817735803698')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b9cf98a2-1003-007e-1f70-3be55e000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:37 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323817735803698/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>0cab5085-eb85-447f-a219-d030f41abf60</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:37 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:17 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAjkQgWHA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:37 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '02d3fa1c-9003-00ce-7e70-3b1cde000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:37 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323817735803698/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>42a2f062-aa61-4cde-b134-895c3978c58c</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:38 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:18 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAGNdOWHA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:38 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8ebbf006-f003-003b-6c70-3b38cf000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:37 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323817735803698/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>3b0a9a63-8cc3-4473-b4b7-da51a0703a02</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:38 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:49:48 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAwGt5W3A71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:43 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fc5f5c10-f003-005d-5d70-3b8a95000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:37 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323817735803698/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>1dabd70e-7870-4d73-9a58-7993bd3b5a8a</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:38 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:49:58 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAABHIBZHA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:57 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '3473468d-6003-003e-7d70-3bccb0000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323817735803698/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>0cab5085-eb85-447f-a219-d030f41abf60</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:37 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:17 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>Hello World</MessageText></QueueMessage><QueueMessage><MessageId>42a2f062-aa61-4cde-b134-895c3978c58c</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:38 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:18 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>Hello World</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '74fe3a87-4003-000b-4570-3b62e5000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323817735803698/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>0cab5085-eb85-447f-a219-d030f41abf60</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:37 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:17 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAA5sEBX3A71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:49 GMT</TimeNextVisible><DequeueCount>1</DequeueCount><MessageText>Hello World</MessageText></QueueMessage><QueueMessage><MessageId>42a2f062-aa61-4cde-b134-895c3978c58c</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:38 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:18 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAA5sEBX3A71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:49 GMT</TimeNextVisible><DequeueCount>1</DequeueCount><MessageText>Hello World</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1f473965-3003-0040-7070-3b537f000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:39 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323817735803698/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList />", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '816a8277-2003-001b-2f70-3b5403000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:39 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323817735803698')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c6ce2a11-7003-006e-5770-3bd3b8000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:39 GMT',
  'Connection',
  'close' ]);

