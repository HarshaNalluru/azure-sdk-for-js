### Guide

1. Build the keyvault-keys package `rush build -t keyvault-keys`.
2. Navigate to `keyvault-keys` folder `cd sdk\keyvault\keyvault-keys\`.
3. Create a storage account and populate the .env file at `keyvault\keyvault-keys` folder with `KEYVAULT_NAME`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET` and `AZURE_TENANT_ID` variables.
4. Run the tests as follows
   - create
     - `npm run perfstress-test:node -- KeyVaultCreateTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - get
     - `npm run perfstress-test:node -- KeyVaultGetTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - update
     - `npm run perfstress-test:node -- KeyVaultUpdateTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
   - list keys
     - `npm run perfstress-test:node -- KeyVaultListTest --warmup 2 --duration 7 --iterations 2 --parallel 2`
