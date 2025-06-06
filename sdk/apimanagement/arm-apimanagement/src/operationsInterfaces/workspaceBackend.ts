/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BackendContract,
  WorkspaceBackendListByWorkspaceOptionalParams,
  WorkspaceBackendGetEntityTagOptionalParams,
  WorkspaceBackendGetEntityTagResponse,
  WorkspaceBackendGetOptionalParams,
  WorkspaceBackendGetResponse,
  WorkspaceBackendCreateOrUpdateOptionalParams,
  WorkspaceBackendCreateOrUpdateResponse,
  BackendUpdateParameters,
  WorkspaceBackendUpdateOptionalParams,
  WorkspaceBackendUpdateResponse,
  WorkspaceBackendDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceBackend. */
export interface WorkspaceBackend {
  /**
   * Lists a collection of backends in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceBackendListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<BackendContract>;
  /**
   * Gets the entity state (Etag) version of the backend specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    backendId: string,
    options?: WorkspaceBackendGetEntityTagOptionalParams,
  ): Promise<WorkspaceBackendGetEntityTagResponse>;
  /**
   * Gets the details of the backend specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    backendId: string,
    options?: WorkspaceBackendGetOptionalParams,
  ): Promise<WorkspaceBackendGetResponse>;
  /**
   * Creates or Updates a backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    backendId: string,
    parameters: BackendContract,
    options?: WorkspaceBackendCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceBackendCreateOrUpdateResponse>;
  /**
   * Updates an existing backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    backendId: string,
    ifMatch: string,
    parameters: BackendUpdateParameters,
    options?: WorkspaceBackendUpdateOptionalParams,
  ): Promise<WorkspaceBackendUpdateResponse>;
  /**
   * Deletes the specified backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    backendId: string,
    ifMatch: string,
    options?: WorkspaceBackendDeleteOptionalParams,
  ): Promise<void>;
}
