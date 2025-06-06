/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type {
  MigrationResource,
  MigrationsListByTargetServerOptionalParams,
  MigrationsCreateOptionalParams,
  MigrationsCreateResponse,
  MigrationsGetOptionalParams,
  MigrationsGetResponse,
  MigrationResourceForPatch,
  MigrationsUpdateOptionalParams,
  MigrationsUpdateResponse,
  MigrationsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Migrations. */
export interface Migrations {
  /**
   * List all the migrations on a given target server.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param options The options parameters.
   */
  listByTargetServer(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    options?: MigrationsListByTargetServerOptionalParams,
  ): PagedAsyncIterableIterator<MigrationResource>;
  /**
   * Creates a new migration.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param migrationName The name of the migration.
   * @param parameters The required parameters for creating a migration.
   * @param options The options parameters.
   */
  create(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    migrationName: string,
    parameters: MigrationResource,
    options?: MigrationsCreateOptionalParams,
  ): Promise<MigrationsCreateResponse>;
  /**
   * Gets details of a migration.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param migrationName The name of the migration.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    migrationName: string,
    options?: MigrationsGetOptionalParams,
  ): Promise<MigrationsGetResponse>;
  /**
   * Updates an existing migration. The request body can contain one to many of the mutable properties
   * present in the migration definition. Certain property updates initiate migration state transitions.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param migrationName The name of the migration.
   * @param parameters The required parameters for updating a migration.
   * @param options The options parameters.
   */
  update(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    migrationName: string,
    parameters: MigrationResourceForPatch,
    options?: MigrationsUpdateOptionalParams,
  ): Promise<MigrationsUpdateResponse>;
  /**
   * Deletes a migration.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param migrationName The name of the migration.
   * @param options The options parameters.
   */
  delete(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    migrationName: string,
    options?: MigrationsDeleteOptionalParams,
  ): Promise<void>;
}
