## Setting up the perf project

1. Build the cosmos perf test project `rush build -t perf-cosmos`.
2. Navigate to `cd sdk/cosmosdb/perf-tests/cosmos`.

## Environment setup

Create a cosmos account and populate the .env file with `COSMOS_CONNECTION_STRING` variable.

## Running the tests

QueryTest

> `npm run perf-test:node -- QueryTest --warmup 2 --duration 7 --parallel 2`

_Note: For more default options, refer [Perf-Framework-Default-Options](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/test-utils/perf/README.md#keyconcepts)._
