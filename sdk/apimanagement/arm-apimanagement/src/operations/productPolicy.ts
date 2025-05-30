/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
    PolicyContract,
    PolicyIdName,
    ProductPolicyCreateOrUpdateOptionalParams,
    ProductPolicyCreateOrUpdateResponse,
    ProductPolicyDeleteOptionalParams,
    ProductPolicyGetEntityTagOptionalParams,
    ProductPolicyGetEntityTagResponse,
    ProductPolicyGetOptionalParams,
    ProductPolicyGetResponse,
    ProductPolicyListByProductOptionalParams,
    ProductPolicyListByProductResponse
} from "../models/index.js";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ProductPolicy } from "../operationsInterfaces/index.js";

/** Class containing ProductPolicy operations. */
export class ProductPolicyImpl implements ProductPolicy {
    private readonly client: ApiManagementClient;

    /**
     * Initialize a new instance of the class ProductPolicy class.
     * @param client Reference to the service client
     */
    constructor(client: ApiManagementClient) {
        this.client = client;
    }

    /**
     * Get the policy configuration at the Product level.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    listByProduct(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        options?: ProductPolicyListByProductOptionalParams
    ): Promise<ProductPolicyListByProductResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, options },
            listByProductOperationSpec
        );
    }

    /**
     * Get the ETag of the policy configuration at the Product level.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param policyId The identifier of the Policy.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        policyId: PolicyIdName,
        options?: ProductPolicyGetEntityTagOptionalParams
    ): Promise<ProductPolicyGetEntityTagResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, policyId, options },
            getEntityTagOperationSpec
        );
    }

    /**
     * Get the policy configuration at the Product level.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param policyId The identifier of the Policy.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        policyId: PolicyIdName,
        options?: ProductPolicyGetOptionalParams
    ): Promise<ProductPolicyGetResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, policyId, options },
            getOperationSpec
        );
    }

    /**
     * Creates or updates policy configuration for the Product.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param policyId The identifier of the Policy.
     * @param parameters The policy contents to apply.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        policyId: PolicyIdName,
        parameters: PolicyContract,
        options?: ProductPolicyCreateOrUpdateOptionalParams
    ): Promise<ProductPolicyCreateOrUpdateResponse> {
        return this.client.sendOperationRequest(
            {
                resourceGroupName,
                serviceName,
                productId,
                policyId,
                parameters,
                options
            },
            createOrUpdateOperationSpec
        );
    }

    /**
     * Deletes the policy configuration at the Product.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param policyId The identifier of the Policy.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        policyId: PolicyIdName,
        ifMatch: string,
        options?: ProductPolicyDeleteOptionalParams
    ): Promise<void> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, policyId, ifMatch, options },
            deleteOperationSpec
        );
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/policies",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyCollection
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/policies/{policyId}",
    httpMethod: "HEAD",
    responses: {
        200: {
            headersMapper: Mappers.ProductPolicyGetEntityTagHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.policyId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/policies/{policyId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyContract,
            headersMapper: Mappers.ProductPolicyGetHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.format],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.policyId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/policies/{policyId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyContract,
            headersMapper: Mappers.ProductPolicyCreateOrUpdateHeaders
        },
        201: {
            bodyMapper: Mappers.PolicyContract,
            headersMapper: Mappers.ProductPolicyCreateOrUpdateHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters5,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.policyId,
        Parameters.productId
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch
    ],
    mediaType: "json",
    serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/policies/{policyId}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        204: {},
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.policyId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer
};
