/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { StorageTaskAssignmentOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageActionsManagementClient } from "../storageActionsManagementClient.js";
import {
  StorageTaskAssignment,
  StorageTaskAssignmentListNextOptionalParams,
  StorageTaskAssignmentListOptionalParams,
  StorageTaskAssignmentListResponse,
  StorageTaskAssignmentListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageTaskAssignmentOperations operations. */
export class StorageTaskAssignmentOperationsImpl
  implements StorageTaskAssignmentOperations
{
  private readonly client: StorageActionsManagementClient;

  /**
   * Initialize a new instance of the class StorageTaskAssignmentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: StorageActionsManagementClient) {
    this.client = client;
  }

  /**
   * Lists Resource IDs of the Storage Task Assignments associated with this Storage Task.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTaskAssignmentListOptionalParams,
  ): PagedAsyncIterableIterator<StorageTaskAssignment> {
    const iter = this.listPagingAll(
      resourceGroupName,
      storageTaskName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          storageTaskName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTaskAssignmentListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageTaskAssignment[]> {
    let result: StorageTaskAssignmentListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, storageTaskName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        storageTaskName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTaskAssignmentListOptionalParams,
  ): AsyncIterableIterator<StorageTaskAssignment> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      storageTaskName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists Resource IDs of the Storage Task Assignments associated with this Storage Task.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTaskAssignmentListOptionalParams,
  ): Promise<StorageTaskAssignmentListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageTaskName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    storageTaskName: string,
    nextLink: string,
    options?: StorageTaskAssignmentListNextOptionalParams,
  ): Promise<StorageTaskAssignmentListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageTaskName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}/storageTaskAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTaskAssignmentsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxpagesize],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTaskAssignmentsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
