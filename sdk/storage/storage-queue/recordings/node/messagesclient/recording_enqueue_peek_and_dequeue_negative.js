let nock = require('nock');

module.exports.testInfo = {"queue":"queue156323818540305171"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .put('/queue156323818540305171')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '361f7225-7003-00e6-6370-3b6b61000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:44 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323818540305171/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(201, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>11ddc745-7d2e-4e68-b17f-c5ccd8784d8e</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:45 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:25 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAA7QPtXHA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:49:45 GMT</TimeNextVisible></QueueMessage></QueueMessagesList>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '255ba87a-6003-00bd-7370-3b6c1d000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:45 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .post('/queue156323818540305171/messages', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><QueueMessage><MessageText>Hello World</MessageText></QueueMessage>")
  .query(true)
  .reply(400, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>InvalidQueryParameterValue</Code><Message>Value for one of the query parameters specified in the request URI is invalid.\nRequestId:1f662979-1003-0018-7e70-3b5704000000\nTime:2019-07-16T00:49:46.1728249Z</Message><QueryParameterName>visibilitytimeout</QueryParameterName><QueryParameterValue>30</QueryParameterValue><Reason>messagettl must be greater than visibilitytimeout</Reason></Error>", [ 'Content-Length',
  '442',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1f662979-1003-0018-7e70-3b5704000000',
  'x-ms-version',
  '2018-03-28',
  'x-ms-error-code',
  'InvalidQueryParameterValue',
  'Date',
  'Tue, 16 Jul 2019 00:49:45 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323818540305171/messages')
  .query(true)
  .reply(400, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>OutOfRangeQueryParameterValue</Code><Message>One of the query parameters specified in the request URI is outside the permissible range.\nRequestId:8ebbf9d4-f003-003b-1370-3b38cf000000\nTime:2019-07-16T00:49:46.4742030Z</Message><QueryParameterName>numofmessages</QueryParameterName><QueryParameterValue>100</QueryParameterValue><MinimumAllowed>1</MinimumAllowed><MaximumAllowed>32</MaximumAllowed></Error>", [ 'Content-Length',
  '457',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8ebbf9d4-f003-003b-1370-3b38cf000000',
  'x-ms-version',
  '2018-03-28',
  'x-ms-error-code',
  'OutOfRangeQueryParameterValue',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-error-code,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:46 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323818540305171/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>11ddc745-7d2e-4e68-b17f-c5ccd8784d8e</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:45 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:25 GMT</ExpirationTime><DequeueCount>0</DequeueCount><MessageText>Hello World</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c349073d-4003-0022-5770-3b14a7000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:46 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/queue156323818540305171/messages')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><QueueMessagesList><QueueMessage><MessageId>11ddc745-7d2e-4e68-b17f-c5ccd8784d8e</MessageId><InsertionTime>Tue, 16 Jul 2019 00:49:45 GMT</InsertionTime><ExpirationTime>Tue, 16 Jul 2019 00:50:25 GMT</ExpirationTime><PopReceipt>AgAAAAMAAAAAAAAAvzV+dXA71QE=</PopReceipt><TimeNextVisible>Tue, 16 Jul 2019 00:50:27 GMT</TimeNextVisible><DequeueCount>1</DequeueCount><MessageText>Hello World</MessageText></QueueMessage></QueueMessagesList>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7a2a9d03-8003-009e-2a70-3b03d6000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 16 Jul 2019 00:49:46 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/queue156323818540305171')
  .query(true)
  .reply(204, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5f0ce218-9003-0009-1170-3b601f000000',
  'x-ms-version',
  '2018-03-28',
  'Date',
  'Tue, 16 Jul 2019 00:49:47 GMT',
  'Connection',
  'close' ]);

