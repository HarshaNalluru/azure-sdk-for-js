// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ExpressRouteCircuitAuthorizationsDeleteParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient, { getLongRunningPoller } from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes the specified authorization from the specified express route circuit.
 *
 * @summary Deletes the specified authorization from the specified express route circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ExpressRouteCircuitAuthorizationDelete.json
 */
async function deleteExpressRouteCircuitAuthorization(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const authorizationName = "authorizationName";
  const options: ExpressRouteCircuitAuthorizationsDeleteParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      circuitName,
      authorizationName,
    )
    .delete(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

deleteExpressRouteCircuitAuthorization().catch(console.error);
