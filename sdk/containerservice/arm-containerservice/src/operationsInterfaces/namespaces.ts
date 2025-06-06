/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import type {
  Namespace,
  NamespacesListByManagedClusterOptionalParams,
  NamespacesGetOptionalParams,
  NamespacesGetResponse,
  NamespacesCreateOrUpdateOptionalParams,
  NamespacesCreateOrUpdateResponse,
  NamespacesDeleteOptionalParams,
  NamespacesDeleteResponse,
  TagsObject,
  NamespacesUpdateOptionalParams,
  NamespacesUpdateResponse,
  NamespacesListCredentialOptionalParams,
  NamespacesListCredentialResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Namespaces. */
export interface Namespaces {
  /**
   * Gets a list of managed namespaces in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listByManagedCluster(
    resourceGroupName: string,
    resourceName: string,
    options?: NamespacesListByManagedClusterOptionalParams,
  ): PagedAsyncIterableIterator<Namespace>;
  /**
   * Gets the specified namespace of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    options?: NamespacesGetOptionalParams,
  ): Promise<NamespacesGetResponse>;
  /**
   * Creates or updates a namespace in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param parameters The namespace to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    parameters: Namespace,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesCreateOrUpdateResponse>,
      NamespacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a namespace in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param parameters The namespace to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    parameters: Namespace,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<NamespacesCreateOrUpdateResponse>;
  /**
   * Deletes a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesDeleteResponse>,
      NamespacesDeleteResponse
    >
  >;
  /**
   * Deletes a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ): Promise<NamespacesDeleteResponse>;
  /**
   * Updates tags on a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param parameters Parameters supplied to the patch namespace operation, we only support patch tags
   *                   for now.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    parameters: TagsObject,
    options?: NamespacesUpdateOptionalParams,
  ): Promise<NamespacesUpdateResponse>;
  /**
   * Lists the credentials of a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param namespaceName The name of the namespace.
   * @param options The options parameters.
   */
  listCredential(
    resourceGroupName: string,
    resourceName: string,
    namespaceName: string,
    options?: NamespacesListCredentialOptionalParams,
  ): Promise<NamespacesListCredentialResponse>;
}
