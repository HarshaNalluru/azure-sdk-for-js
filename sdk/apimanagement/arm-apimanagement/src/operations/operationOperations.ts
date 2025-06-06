/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { OperationOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  TagResourceContract,
  OperationListByTagsNextOptionalParams,
  OperationListByTagsOptionalParams,
  OperationListByTagsResponse,
  OperationListByTagsNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing OperationOperations operations. */
export class OperationOperationsImpl implements OperationOperations {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class OperationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of operations associated with tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  public listByTags(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: OperationListByTagsOptionalParams,
  ): PagedAsyncIterableIterator<TagResourceContract> {
    const iter = this.listByTagsPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
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
        return this.listByTagsPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByTagsPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: OperationListByTagsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TagResourceContract[]> {
    let result: OperationListByTagsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByTags(
        resourceGroupName,
        serviceName,
        apiId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByTagsNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByTagsPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: OperationListByTagsOptionalParams,
  ): AsyncIterableIterator<TagResourceContract> {
    for await (const page of this.listByTagsPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of operations associated with tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  private _listByTags(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: OperationListByTagsOptionalParams,
  ): Promise<OperationListByTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByTagsOperationSpec,
    );
  }

  /**
   * ListByTagsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param nextLink The nextLink from the previous successful call to the ListByTags method.
   * @param options The options parameters.
   */
  private _listByTagsNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: OperationListByTagsNextOptionalParams,
  ): Promise<OperationListByTagsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByTagsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operationsByTags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.includeNotTaggedOperations,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByTagsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.serviceName,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
