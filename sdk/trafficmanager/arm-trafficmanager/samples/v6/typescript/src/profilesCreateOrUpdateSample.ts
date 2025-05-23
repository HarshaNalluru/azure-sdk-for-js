/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Profile,
  TrafficManagerManagementClient
} from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-MultiValue.json
 */
async function profilePutMultiValue(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const parameters: Profile = {
    dnsConfig: { relativeName: "azsmnet6386", ttl: 35 },
    location: "global",
    maxReturn: 2,
    monitorConfig: { path: "/testpath.aspx", port: 80, protocol: "HTTP" },
    profileStatus: "Enabled",
    trafficRoutingMethod: "MultiValue",
    trafficViewEnrollmentStatus: "Disabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-NoEndpoints.json
 */
async function profilePutNoEndpoints(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const parameters: Profile = {
    dnsConfig: { relativeName: "azsmnet6386", ttl: 35 },
    location: "global",
    monitorConfig: { path: "/testpath.aspx", port: 80, protocol: "HTTP" },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Performance"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-WithAliasing.json
 */
async function profilePutWithAliasing(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager2583";
  const profileName = "azuresdkfornetautoresttrafficmanager6192";
  const parameters: Profile = {
    allowedEndpointRecordTypes: ["DomainName"],
    dnsConfig: {
      relativeName: "azuresdkfornetautoresttrafficmanager6192",
      ttl: 35
    },
    endpoints: [
      {
        name: "My external endpoint",
        type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
        endpointLocation: "North Europe",
        endpointStatus: "Enabled",
        target: "foobar.contoso.com"
      }
    ],
    location: "global",
    monitorConfig: {
      path: "/testpath.aspx",
      intervalInSeconds: 10,
      port: 80,
      timeoutInSeconds: 5,
      toleratedNumberOfFailures: 2,
      protocol: "HTTP"
    },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Performance"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-WithCustomHeaders.json
 */
async function profilePutWithCustomHeaders(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager2583";
  const profileName = "azuresdkfornetautoresttrafficmanager6192";
  const parameters: Profile = {
    dnsConfig: {
      relativeName: "azuresdkfornetautoresttrafficmanager6192",
      ttl: 35
    },
    endpoints: [
      {
        name: "My external endpoint",
        type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
        customHeaders: [{ name: "header-2", value: "value-2-overridden" }],
        endpointLocation: "North Europe",
        endpointStatus: "Enabled",
        target: "foobar.contoso.com"
      }
    ],
    location: "global",
    monitorConfig: {
      path: "/testpath.aspx",
      customHeaders: [
        { name: "header-1", value: "value-1" },
        { name: "header-2", value: "value-2" }
      ],
      expectedStatusCodeRanges: [
        { max: 205, min: 200 },
        { max: 410, min: 400 }
      ],
      intervalInSeconds: 10,
      port: 80,
      timeoutInSeconds: 5,
      toleratedNumberOfFailures: 2,
      protocol: "HTTP"
    },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Performance",
    trafficViewEnrollmentStatus: "Disabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-WithEndpoints.json
 */
async function profilePutWithEndpoints(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager2583";
  const profileName = "azuresdkfornetautoresttrafficmanager6192";
  const parameters: Profile = {
    dnsConfig: {
      relativeName: "azuresdkfornetautoresttrafficmanager6192",
      ttl: 35
    },
    endpoints: [
      {
        name: "My external endpoint",
        type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
        endpointLocation: "North Europe",
        endpointStatus: "Enabled",
        target: "foobar.contoso.com"
      }
    ],
    location: "global",
    monitorConfig: {
      path: "/testpath.aspx",
      intervalInSeconds: 10,
      port: 80,
      timeoutInSeconds: 5,
      toleratedNumberOfFailures: 2,
      protocol: "HTTP"
    },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Performance"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PUT-WithNestedEndpoints.json
 */
async function profilePutWithNestedEndpoints(): Promise<void> {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "myresourcegroup";
  const profileName = "parentprofile";
  const parameters: Profile = {
    dnsConfig: { relativeName: "parentprofile", ttl: 35 },
    endpoints: [
      {
        name: "MyFirstNestedEndpoint",
        type: "Microsoft.Network/trafficManagerProfiles/nestedEndpoints",
        endpointStatus: "Enabled",
        minChildEndpoints: 2,
        minChildEndpointsIPv4: 1,
        minChildEndpointsIPv6: 2,
        priority: 1,
        target: "firstnestedprofile.tmpreview.watmtest.azure-test.net",
        weight: 1
      },
      {
        name: "MySecondNestedEndpoint",
        type: "Microsoft.Network/trafficManagerProfiles/nestedEndpoints",
        endpointStatus: "Enabled",
        minChildEndpoints: 2,
        minChildEndpointsIPv4: 2,
        minChildEndpointsIPv6: 1,
        priority: 2,
        target: "secondnestedprofile.tmpreview.watmtest.azure-test.net",
        weight: 1
      }
    ],
    location: "global",
    monitorConfig: {
      path: "/testpath.aspx",
      intervalInSeconds: 10,
      port: 80,
      timeoutInSeconds: 5,
      toleratedNumberOfFailures: 2,
      protocol: "HTTP"
    },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Priority"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  profilePutMultiValue();
  profilePutNoEndpoints();
  profilePutWithAliasing();
  profilePutWithCustomHeaders();
  profilePutWithEndpoints();
  profilePutWithNestedEndpoints();
}

main().catch(console.error);
