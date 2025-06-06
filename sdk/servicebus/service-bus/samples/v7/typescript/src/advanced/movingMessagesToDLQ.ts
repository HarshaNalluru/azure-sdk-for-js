// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates scenarios as to how a Service Bus message can be explicitly moved to
 * the DLQ. For other implicit ways when Service Bus messages get moved to DLQ, refer to -
 * https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues
 *
 * Run processMessagesInDLQ example after this to see how the messages in DLQ can be reprocessed.
 *
 * @summary Demonstrates scenarios as to how a Service Bus message can be explicitly moved to
 * the DLQ
 */
import type { ServiceBusMessage } from "@azure/service-bus";
import { ServiceBusClient } from "@azure/service-bus";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import "dotenv/config";
// Define connection string and related Service Bus entity names here
const fqdn = process.env.SERVICEBUS_FQDN || "<your-servicebus-namespace>.servicebus.windows.net";
const queueName = process.env.QUEUE_NAME || "<queue name>";
const credential = new DefaultAzureCredential();
const sbClient: ServiceBusClient = new ServiceBusClient(fqdn, credential);

export async function main(): Promise<void> {
  try {
    // Sending a message to ensure that there is atleast one message in the main queue
    await sendMessage();

    await receiveMessage();
  } finally {
    await sbClient.close();
  }
}

async function sendMessage(): Promise<void> {
  // createSender() can also be used to create a sender for a topic.
  const sender = sbClient.createSender(queueName);

  const message: ServiceBusMessage = {
    body: {
      name: "Creamy Chicken Pasta",
      type: "Dinner",
    },
    contentType: "application/json",
    subject: "Recipe",
  };
  await sender.sendMessages(message);
  await sender.close();
}

async function receiveMessage(): Promise<void> {
  // If receiving from a subscription you can use the createReceiver(topicName, subscriptionName) overload
  const receiver = sbClient.createReceiver(queueName);

  const messages = await receiver.receiveMessages(1);

  if (messages.length) {
    console.log(
      ">>>>> Deadletter the one message received from the main queue - ",
      messages[0].body,
    );
    // Deadletter the message received
    await receiver.deadLetterMessage(messages[0], {
      deadLetterReason: "Incorrect Recipe type",
      deadLetterErrorDescription: "Recipe type does not match preferences.",
    });
  } else {
    console.log(">>>> Error: No messages were received from the main queue.");
  }

  await receiver.close();
}

main().catch((err) => {
  console.log("Moving Messages To DLQ Sample - Error occurred: ", err);
  process.exit(1);
});
