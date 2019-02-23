import { Namespace, ServiceBusMessage, delay } from "../../../lib";

function unExpectedErrorHandler(err: Error): void {
  if (err) {
    console.log(err);
  }
}
async function checkWithTimeout(
  predicate: () => boolean,
  delayBetweenRetriesInMilliseconds: number = 1000,
  maxWaitTimeInMilliseconds: number = 10000
): Promise<boolean> {
  const maxTime = Date.now() + maxWaitTimeInMilliseconds;
  while (Date.now() < maxTime) {
    if (predicate()) return true;
    await delay(delayBetweenRetriesInMilliseconds);
  }
  return false;
}

// Define connection string and related Service Bus entity names here
const connectionString = "";
const queueName = "";
const ns = Namespace.createFromConnectionString(connectionString);

const client = ns.createQueueClient(queueName);

const numMessages = 100;

async function main(): Promise<void> {
  const date = new Date();
  console.log(date.getUTCMinutes() + ":" + date.getUTCSeconds() + ":" + date.getUTCMilliseconds());
  for (let index = 0; index < 10; index++) {
    console.log("######################################################");
  }
  const receiverClient = ns.createQueueClient(queueName);
  const receiver = receiverClient.getReceiver();

  const receivedMsgs: ServiceBusMessage[] = [];
  let index = 0;
  receiver.receive((msg: ServiceBusMessage) => {
    receivedMsgs.push(msg);
    index++;
    if (index % 1 === 0) {
      for (let i = 0; i < 5; i++) {
        console.log("######################################################");
      }
      const date = new Date();
      console.log(
        date.getUTCMinutes() + ":" + date.getUTCSeconds() + ":" + date.getUTCMilliseconds()
      );
      console.log("receive " + index);
      for (let i = 0; i < 5; i++) {
        console.log("######################################################");
      }
    }
    return Promise.resolve();
  }, unExpectedErrorHandler);

  const msgsCheck = await checkWithTimeout(() => receivedMsgs.length === numMessages, 1000, 500000);
  receivedMsgs.forEach(async (element) => {
    await checkWithTimeout(() => element.delivery.remote_settled === true, 1000, 500000);
  });

  await delay(3000);
  if (!msgsCheck) {
    if (receivedMsgs.length !== numMessages) {
      console.log(`Expected ${numMessages}, received ${receivedMsgs.length} messages`);
    } else {
      console.log("Message didnt get auto-completed in time");
    }
  }
  await receiver.close();

  await client.close();
  await ns.close();
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
