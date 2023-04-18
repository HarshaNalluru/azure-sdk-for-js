import { createPerfProgram } from "@azure/test-utils-perf";

// Expects the .env file at the same level
import * as dotenv from "dotenv";
import { QueryTest } from "./test.spec";
dotenv.config();

console.log("=== Starting the perf test ===");

const perfProgram = createPerfProgram(QueryTest);

perfProgram.run();
