// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig } from "vitest/config";
import browserMap from "@azure-tools/vite-plugin-browser-test-map";
import { relativeRecordingsPath } from "./src";
import { AzureSDKReporter } from "../../../vitest.shared.config.js";

process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [browserMap()],
  test: {
    reporters: [new AzureSDKReporter(), "junit"],
    outputFile: {
      junit: "test-results.browser.xml",
    },
    browser: {
      instances: [
        {
          browser: "chromium",
          launch: {
            args: ["--disable-web-security"],
          },
        },
      ],
      enabled: true,
      headless: true,
      provider: "playwright",
    },
    fakeTimers: {
      toFake: ["setTimeout", "Date"],
    },
    watch: false,
    include: ["dist-test/browser/**/*.spec.js"],
    coverage: {
      include: ["dist-test/browser/**/*.js"],
      exclude: [
        "dist-test/browser/**/*./*-browser.mjs",
        "dist-test/browser/**/*./*-react-native.mjs",
      ],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage-browser",
    },
  },
});
