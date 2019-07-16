let nock = require('nock');

module.exports.testInfo = {"now":"2019-07-16T00:51:05.967Z","tmr":"2019-07-16T00:51:05.967Z","queue":"queue156323826596708277"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323826596708277')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c6cecfdd-7003-006e-2270-3bd3b8000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:05 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323826596708277', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><SignedIdentifiers><SignedIdentifier><Id>unique-id</Id><AccessPolicy><Start>2019-07-16T00:46:05.9670000Z</Start><Expiry>2019-07-17T00:51:05.9670000Z</Expiry><Permission>raup</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>")
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '39ce2ba4-7003-008b-5870-3bc14f000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:05 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323826596708277/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>hello</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>7e2972be-2d64-48ba-85ec-eba1c217eb73</MessageId><InsertionTime>Tue, 16 Jul 2019 00:51:06 GMT</InsertionTime><ExpirationTime>Tue, 23 Jul 2019 00:51:06 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAviMhjXA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:51:06 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '9fdec927-4003-0066-0f70-3bc8cb000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:05 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323826596708277/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>7e2972be-2d64-48ba-85ec-eba1c217eb73</MessageId><InsertionTime>Tue, 16 Jul 2019 00:51:06 GMT</InsertionTime><ExpirationTime>Tue, 23 Jul 2019 00:51:06 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>hello</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd9280e0f-a003-00c6-6170-3b07ad000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:51:06 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323826596708277/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>7e2972be-2d64-48ba-85ec-eba1c217eb73</MessageId><InsertionTime>Tue, 16 Jul 2019 00:51:06 GMT</InsertionTime><ExpirationTime>Tue, 23 Jul 2019 00:51:06 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAuMkXjnA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:51:08 GMT</TimeNextVisible><DequeueCount>1</DequeueCount><MessageText>hello</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '03ccf404-2003-005f-3870-3b886f000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:51:07 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323826596708277/messages/7e2972be-2d64-48ba-85ec-eba1c217eb73')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '160a27b6-0003-000c-6a70-3b9460000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:51:09 GMT',
  'Connection',
  'close' ]);

