/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConnectionSetting,
  BotConnectionListByBotServiceOptionalParams,
  BotConnectionListServiceProvidersOptionalParams,
  BotConnectionListServiceProvidersResponse,
  BotConnectionListWithSecretsOptionalParams,
  BotConnectionListWithSecretsResponse,
  BotConnectionCreateOptionalParams,
  BotConnectionCreateResponse,
  BotConnectionUpdateOptionalParams,
  BotConnectionUpdateResponse,
  BotConnectionGetOptionalParams,
  BotConnectionGetResponse,
  BotConnectionDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BotConnection. */
export interface BotConnection {
  /**
   * Returns all the Connection Settings registered to a particular BotService resource
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  listByBotService(
    resourceGroupName: string,
    resourceName: string,
    options?: BotConnectionListByBotServiceOptionalParams
  ): PagedAsyncIterableIterator<ConnectionSetting>;
  /**
   * Lists the available Service Providers for creating Connection Settings
   * @param options The options parameters.
   */
  listServiceProviders(
    options?: BotConnectionListServiceProvidersOptionalParams
  ): Promise<BotConnectionListServiceProvidersResponse>;
  /**
   * Get a Connection Setting registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param connectionName The name of the Bot Service Connection Setting resource.
   * @param options The options parameters.
   */
  listWithSecrets(
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: BotConnectionListWithSecretsOptionalParams
  ): Promise<BotConnectionListWithSecretsResponse>;
  /**
   * Register a new Auth Connection for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param connectionName The name of the Bot Service Connection Setting resource.
   * @param parameters The parameters to provide for creating the Connection Setting.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    parameters: ConnectionSetting,
    options?: BotConnectionCreateOptionalParams
  ): Promise<BotConnectionCreateResponse>;
  /**
   * Updates a Connection Setting registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param connectionName The name of the Bot Service Connection Setting resource.
   * @param parameters The parameters to provide for updating the Connection Setting.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    parameters: ConnectionSetting,
    options?: BotConnectionUpdateOptionalParams
  ): Promise<BotConnectionUpdateResponse>;
  /**
   * Get a Connection Setting registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param connectionName The name of the Bot Service Connection Setting resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: BotConnectionGetOptionalParams
  ): Promise<BotConnectionGetResponse>;
  /**
   * Deletes a Connection Setting registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param connectionName The name of the Bot Service Connection Setting resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: BotConnectionDeleteOptionalParams
  ): Promise<void>;
}
