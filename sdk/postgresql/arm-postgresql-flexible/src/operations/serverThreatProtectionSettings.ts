/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { ServerThreatProtectionSettings } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { PostgreSQLManagementFlexibleServerClient } from "../postgreSQLManagementFlexibleServerClient.js";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import type {
  ServerThreatProtectionSettingsModel,
  ServerThreatProtectionSettingsListByServerNextOptionalParams,
  ServerThreatProtectionSettingsListByServerOptionalParams,
  ServerThreatProtectionSettingsListByServerResponse,
  ThreatProtectionName,
  ServerThreatProtectionSettingsGetOptionalParams,
  ServerThreatProtectionSettingsGetResponse,
  ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ServerThreatProtectionSettingsCreateOrUpdateResponse,
  ServerThreatProtectionSettingsListByServerNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerThreatProtectionSettings operations. */
export class ServerThreatProtectionSettingsImpl implements ServerThreatProtectionSettings {
  private readonly client: PostgreSQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class ServerThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Get a list of server's Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerThreatProtectionSettingsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerThreatProtectionSettingsModel> {
    const iter = this.listByServerPagingAll(resourceGroupName, serverName, options);
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
        return this.listByServerPagingPage(resourceGroupName, serverName, options, settings);
      },
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerThreatProtectionSettingsListByServerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ServerThreatProtectionSettingsModel[]> {
    let result: ServerThreatProtectionSettingsListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerThreatProtectionSettingsListByServerOptionalParams,
  ): AsyncIterableIterator<ServerThreatProtectionSettingsModel> {
    for await (const page of this.listByServerPagingPage(resourceGroupName, serverName, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of server's Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerThreatProtectionSettingsListByServerOptionalParams,
  ): Promise<ServerThreatProtectionSettingsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec,
    );
  }

  /**
   * Get a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    options?: ServerThreatProtectionSettingsGetOptionalParams,
  ): Promise<ServerThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, threatProtectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param parameters The Advanced Threat Protection state for the flexible server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    parameters: ServerThreatProtectionSettingsModel,
    options?: ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerThreatProtectionSettingsCreateOrUpdateResponse>,
      ServerThreatProtectionSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ServerThreatProtectionSettingsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        threatProtectionName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ServerThreatProtectionSettingsCreateOrUpdateResponse,
      OperationState<ServerThreatProtectionSettingsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param parameters The Advanced Threat Protection state for the flexible server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    parameters: ServerThreatProtectionSettingsModel,
    options?: ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<ServerThreatProtectionSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      threatProtectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerThreatProtectionSettingsListByServerNextOptionalParams,
  ): Promise<ServerThreatProtectionSettingsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerThreatProtectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerThreatProtectionSettingsModel,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.threatProtectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerThreatProtectionSettingsModel,
    },
    201: {
      bodyMapper: Mappers.ServerThreatProtectionSettingsModel,
    },
    202: {
      bodyMapper: Mappers.ServerThreatProtectionSettingsModel,
    },
    204: {
      bodyMapper: Mappers.ServerThreatProtectionSettingsModel,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.threatProtectionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerThreatProtectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
