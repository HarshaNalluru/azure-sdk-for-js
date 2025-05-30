/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SoftwareUpdateConfiguration } from "@azure/arm-automation";
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new software update configuration with the name given in the URI.
 *
 * @summary Create a new software update configuration with the name given in the URI.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfiguration/createSoftwareUpdateConfiguration.json
 */
async function createSoftwareUpdateConfiguration(): Promise<void> {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] || "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const softwareUpdateConfigurationName = "testpatch";
  const parameters: SoftwareUpdateConfiguration = {
    scheduleInfo: {
      advancedSchedule: { weekDays: ["Monday", "Thursday"] },
      expiryTime: new Date("2018-11-09T11:22:57+00:00"),
      frequency: "Hour",
      interval: 1,
      startTime: new Date("2017-10-19T12:22:57+00:00"),
      timeZone: "America/Los_Angeles",
    },
    tasks: {
      postTask: { parameters: {}, source: "GetCache" },
      preTask: {
        parameters: { computername: "Computer1" },
        source: "HelloWorld",
      },
    },
    updateConfiguration: {
      azureVirtualMachines: [
        "/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-01",
        "/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-02",
        "/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-03",
      ],
      duration: "PT2H0M",
      nonAzureComputerNames: ["box1.contoso.com", "box2.contoso.com"],
      operatingSystem: "Windows",
      targets: {
        azureQueries: [
          {
            locations: ["Japan East", "UK South"],
            scope: [
              "/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources",
              "/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067",
            ],
            tagSettings: {
              filterOperator: "All",
              tags: {
                tag1: ["tag1Value1", "tag1Value2", "tag1Value3"],
                tag2: ["tag2Value1", "tag2Value2", "tag2Value3"],
              },
            },
          },
        ],
        nonAzureQueries: [
          { functionAlias: "SavedSearch1", workspaceId: "WorkspaceId1" },
          { functionAlias: "SavedSearch2", workspaceId: "WorkspaceId2" },
        ],
      },
      windows: {
        excludedKbNumbers: ["168934", "168973"],
        includedUpdateClassifications: "Critical",
        rebootSetting: "IfRequired",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurations.create(
    resourceGroupName,
    automationAccountName,
    softwareUpdateConfigurationName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createSoftwareUpdateConfiguration();
}

main().catch(console.error);
