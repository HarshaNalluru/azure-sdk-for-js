import { ExclusiveSuiteFunction, PendingSuiteFunction, Suite } from "mocha";
import { RecorderStartOptions, TestProxyHttpClient } from ".";

declare module "mocha" {
  export interface Suite {
    recorder: TestProxyHttpClient;
  }
}

export const describeWithRecorder: ExtendedSuiteFunction = ((
  title: string,
  recorderStartOptions: RecorderStartOptions,
  fn: (this: Mocha.Suite) => void
) => {
  funcToBeCalled(title, recorderStartOptions, fn, undefined);
}) as ExtendedSuiteFunction;

interface ExtendedSuiteFunction {
  (
    title: string,
    recorderStartOptions: RecorderStartOptions,
    fn: (this: Mocha.Suite) => void
  ): Suite;
  only: ExclusiveSuiteFunction;
  skip: PendingSuiteFunction;
}

function funcToBeCalled(
  title: string,
  recorderStartOptions: RecorderStartOptions,
  fn: (this: Mocha.Suite) => void,
  type: "only" | "skip" | undefined
) {
  describe("", () => {
    beforeEach(async function() {
      this.recorder = new TestProxyHttpClient(this.context);
      await this.recorder.start(recorderStartOptions);
    });
    afterEach(async function() {
      await this.recorder.stop();
    });
    if (type === "only") {
      describe.only(title, fn);
    } else if (type === "skip") {
      describe.skip(title, fn);
    } else {
      describe(title, fn);
    }
  });
}

// console.log(describeWithRecorder);
// Object.defineProperty(describeWithRecorder, "only", {
//   value: (
//     title: string,
//     recorderStartOptions: RecorderStartOptions,
//     fn: (this: Mocha.Suite) => void
//   ) => {
//     funcToBeCalled(title, recorderStartOptions, fn, "only");
//   }
// });

// Object.defineProperty(describeWithRecorder, "skip", {
//   value: (
//     title: string,
//     recorderStartOptions: RecorderStartOptions,
//     fn: (this: Mocha.Suite) => void
//   ) => {
//     funcToBeCalled(title, recorderStartOptions, fn, "skip");
//   }
// });
