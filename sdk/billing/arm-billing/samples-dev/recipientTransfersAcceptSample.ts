/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { AcceptTransferRequest } from "@azure/arm-billing";
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Accepts a transfer request.
 *
 * @summary Accepts a transfer request.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/recipientTransfersAccept.json
 */
async function acceptTransfer(): Promise<void> {
  const transferName = "aabb123";
  const parameters: AcceptTransferRequest = {
    productDetails: [
      { productId: "subscriptionId", productType: "AzureSubscription" },
      { productId: "reservedInstanceId", productType: "AzureReservation" },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.recipientTransfers.accept(transferName, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  await acceptTransfer();
}

main().catch(console.error);
