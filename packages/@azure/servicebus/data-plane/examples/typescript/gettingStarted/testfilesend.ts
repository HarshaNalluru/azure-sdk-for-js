import { Namespace } from "../../../lib";

// Define connection string and related Service Bus entity names here
const connectionString = "";
const queueName = "";
const ns = Namespace.createFromConnectionString(connectionString);

const client = ns.createQueueClient(queueName);
const sender = client.getSender();

const numMessages = 100;
async function sendMsgs(): Promise<void> {
  for (let index = 0; index < numMessages; index++) {
    const testMessage = {
      body: `message body ${index}`,
      messageId: `message id ${index}`,
      partitionKey: "dummy"
    };
    await sender.send(testMessage);
    if (index % 9 === 0) console.log("send " + index);
  }
}

async function main(): Promise<void> {
  await sendMsgs();

  await client.close();
  await ns.close();
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
