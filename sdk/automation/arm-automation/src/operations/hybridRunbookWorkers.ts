/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { HybridRunbookWorkers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AutomationClient } from "../automationClient.js";
import {
  HybridRunbookWorker,
  HybridRunbookWorkersListByHybridRunbookWorkerGroupNextOptionalParams,
  HybridRunbookWorkersListByHybridRunbookWorkerGroupOptionalParams,
  HybridRunbookWorkersListByHybridRunbookWorkerGroupResponse,
  HybridRunbookWorkersDeleteOptionalParams,
  HybridRunbookWorkersGetOptionalParams,
  HybridRunbookWorkersGetResponse,
  HybridRunbookWorkerCreateParameters,
  HybridRunbookWorkersCreateOptionalParams,
  HybridRunbookWorkersCreateResponse,
  HybridRunbookWorkerMoveParameters,
  HybridRunbookWorkersMoveOptionalParams,
  HybridRunbookWorkersListByHybridRunbookWorkerGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing HybridRunbookWorkers operations. */
export class HybridRunbookWorkersImpl implements HybridRunbookWorkers {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class HybridRunbookWorkers class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of hybrid runbook workers.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  public listByHybridRunbookWorkerGroup(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkersListByHybridRunbookWorkerGroupOptionalParams
  ): PagedAsyncIterableIterator<HybridRunbookWorker> {
    const iter = this.listByHybridRunbookWorkerGroupPagingAll(
      resourceGroupName,
      automationAccountName,
      hybridRunbookWorkerGroupName,
      options
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
        return this.listByHybridRunbookWorkerGroupPagingPage(
          resourceGroupName,
          automationAccountName,
          hybridRunbookWorkerGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByHybridRunbookWorkerGroupPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkersListByHybridRunbookWorkerGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HybridRunbookWorker[]> {
    let result: HybridRunbookWorkersListByHybridRunbookWorkerGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHybridRunbookWorkerGroup(
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHybridRunbookWorkerGroupNext(
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHybridRunbookWorkerGroupPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkersListByHybridRunbookWorkerGroupOptionalParams
  ): AsyncIterableIterator<HybridRunbookWorker> {
    for await (const page of this.listByHybridRunbookWorkerGroupPagingPage(
      resourceGroupName,
      automationAccountName,
      hybridRunbookWorkerGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete a hybrid runbook worker.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerId The hybrid runbook worker id
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerId: string,
    options?: HybridRunbookWorkersDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerId,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve a hybrid runbook worker.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerId The hybrid runbook worker id
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerId: string,
    options?: HybridRunbookWorkersGetOptionalParams
  ): Promise<HybridRunbookWorkersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create a hybrid runbook worker.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerId The hybrid runbook worker id
   * @param hybridRunbookWorkerCreationParameters The create or update parameters for hybrid runbook
   *                                              worker.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerId: string,
    hybridRunbookWorkerCreationParameters: HybridRunbookWorkerCreateParameters,
    options?: HybridRunbookWorkersCreateOptionalParams
  ): Promise<HybridRunbookWorkersCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerId,
        hybridRunbookWorkerCreationParameters,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Move a hybrid worker to a different group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerId The hybrid runbook worker id
   * @param hybridRunbookWorkerMoveParameters The hybrid runbook worker move parameters
   * @param options The options parameters.
   */
  move(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerId: string,
    hybridRunbookWorkerMoveParameters: HybridRunbookWorkerMoveParameters,
    options?: HybridRunbookWorkersMoveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerId,
        hybridRunbookWorkerMoveParameters,
        options
      },
      moveOperationSpec
    );
  }

  /**
   * Retrieve a list of hybrid runbook workers.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  private _listByHybridRunbookWorkerGroup(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkersListByHybridRunbookWorkerGroupOptionalParams
  ): Promise<HybridRunbookWorkersListByHybridRunbookWorkerGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      },
      listByHybridRunbookWorkerGroupOperationSpec
    );
  }

  /**
   * ListByHybridRunbookWorkerGroupNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param nextLink The nextLink from the previous successful call to the ListByHybridRunbookWorkerGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listByHybridRunbookWorkerGroupNext(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    nextLink: string,
    options?: HybridRunbookWorkersListByHybridRunbookWorkerGroupNextOptionalParams
  ): Promise<HybridRunbookWorkersListByHybridRunbookWorkerGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        nextLink,
        options
      },
      listByHybridRunbookWorkerGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.hybridRunbookWorkerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorker
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.hybridRunbookWorkerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorker
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.hybridRunbookWorkerCreationParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.hybridRunbookWorkerId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const moveOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}/move",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.hybridRunbookWorkerMoveParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.hybridRunbookWorkerId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByHybridRunbookWorkerGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHybridRunbookWorkerGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
