/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Indexers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SearchServiceClient } from "../searchServiceClient.js";
import {
  IndexersResetOptionalParams,
  IndexersResetDocsOptionalParams,
  IndexersRunOptionalParams,
  SearchIndexer,
  IndexersCreateOrUpdateOptionalParams,
  IndexersCreateOrUpdateResponse,
  IndexersDeleteOptionalParams,
  IndexersGetOptionalParams,
  IndexersGetResponse,
  IndexersListOptionalParams,
  IndexersListResponse,
  IndexersCreateOptionalParams,
  IndexersCreateResponse,
  IndexersGetStatusOptionalParams,
  IndexersGetStatusResponse,
} from "../models/index.js";

/** Class containing Indexers operations. */
export class IndexersImpl implements Indexers {
  private readonly client: SearchServiceClient;

  /**
   * Initialize a new instance of the class Indexers class.
   * @param client Reference to the service client
   */
  constructor(client: SearchServiceClient) {
    this.client = client;
  }

  /**
   * Resets the change tracking state associated with an indexer.
   * @param indexerName The name of the indexer to reset.
   * @param options The options parameters.
   */
  reset(
    indexerName: string,
    options?: IndexersResetOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      resetOperationSpec,
    );
  }

  /**
   * Resets specific documents in the datasource to be selectively re-ingested by the indexer.
   * @param indexerName The name of the indexer to reset documents for.
   * @param options The options parameters.
   */
  resetDocs(
    indexerName: string,
    options?: IndexersResetDocsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      resetDocsOperationSpec,
    );
  }

  /**
   * Runs an indexer on-demand.
   * @param indexerName The name of the indexer to run.
   * @param options The options parameters.
   */
  run(indexerName: string, options?: IndexersRunOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      runOperationSpec,
    );
  }

  /**
   * Creates a new indexer or updates an indexer if it already exists.
   * @param indexerName The name of the indexer to create or update.
   * @param indexer The definition of the indexer to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    indexerName: string,
    indexer: SearchIndexer,
    options?: IndexersCreateOrUpdateOptionalParams,
  ): Promise<IndexersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { indexerName, indexer, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes an indexer.
   * @param indexerName The name of the indexer to delete.
   * @param options The options parameters.
   */
  delete(
    indexerName: string,
    options?: IndexersDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Retrieves an indexer definition.
   * @param indexerName The name of the indexer to retrieve.
   * @param options The options parameters.
   */
  get(
    indexerName: string,
    options?: IndexersGetOptionalParams,
  ): Promise<IndexersGetResponse> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists all indexers available for a search service.
   * @param options The options parameters.
   */
  list(options?: IndexersListOptionalParams): Promise<IndexersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates a new indexer.
   * @param indexer The definition of the indexer to create.
   * @param options The options parameters.
   */
  create(
    indexer: SearchIndexer,
    options?: IndexersCreateOptionalParams,
  ): Promise<IndexersCreateResponse> {
    return this.client.sendOperationRequest(
      { indexer, options },
      createOperationSpec,
    );
  }

  /**
   * Returns the current status and execution history of an indexer.
   * @param indexerName The name of the indexer for which to retrieve status.
   * @param options The options parameters.
   */
  getStatus(
    indexerName: string,
    options?: IndexersGetStatusOptionalParams,
  ): Promise<IndexersGetStatusResponse> {
    return this.client.sendOperationRequest(
      { indexerName, options },
      getStatusOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const resetOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')/search.reset",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [Parameters.accept],
  serializer,
};
const resetDocsOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')/search.resetdocs",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.keysOrIds,
  queryParameters: [Parameters.apiVersion, Parameters.overwrite],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const runOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')/search.run",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexer,
    },
    201: {
      bodyMapper: Mappers.SearchIndexer,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.indexer,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipIndexerResetRequirementForCache,
    Parameters.disableCacheReprocessingChangeDetection,
  ],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexer,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/indexers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListIndexersResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/indexers",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SearchIndexer,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.indexer,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getStatusOperationSpec: coreClient.OperationSpec = {
  path: "/indexers('{indexerName}')/search.status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexerStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexerName],
  headerParameters: [Parameters.accept],
  serializer,
};
