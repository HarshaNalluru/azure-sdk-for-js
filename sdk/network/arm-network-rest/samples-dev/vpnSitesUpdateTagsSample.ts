// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { VpnSitesUpdateTagsParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates VpnSite tags.
 *
 * @summary Updates VpnSite tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VpnSiteUpdateTags.json
 */
async function vpnSiteUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const vpnSiteName = "vpnSite1";
  const options: VpnSitesUpdateTagsParameters = {
    body: { tags: { key1: "value1", key2: "value2" } },
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
      subscriptionId,
      resourceGroupName,
      vpnSiteName,
    )
    .patch(options);
  console.log(result);
}

vpnSiteUpdate().catch(console.error);
