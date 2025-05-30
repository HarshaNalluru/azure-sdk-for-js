/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
    OperationState,
    SimplePollerLike,
    createHttpPoller
} from "@azure/core-lro";
import { ApiManagementClient } from "../apiManagementClient.js";
import { createLroSpec } from "../lroImpl.js";
import {
    PolicyFragmentContract,
    PolicyFragmentCreateOrUpdateOptionalParams,
    PolicyFragmentCreateOrUpdateResponse,
    PolicyFragmentDeleteOptionalParams,
    PolicyFragmentGetEntityTagOptionalParams,
    PolicyFragmentGetEntityTagResponse,
    PolicyFragmentGetOptionalParams,
    PolicyFragmentGetResponse,
    PolicyFragmentListByServiceOptionalParams,
    PolicyFragmentListByServiceResponse,
    PolicyFragmentListReferencesOptionalParams,
    PolicyFragmentListReferencesResponse
} from "../models/index.js";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PolicyFragment } from "../operationsInterfaces/index.js";

/** Class containing PolicyFragment operations. */
export class PolicyFragmentImpl implements PolicyFragment {
    private readonly client: ApiManagementClient;

    /**
     * Initialize a new instance of the class PolicyFragment class.
     * @param client Reference to the service client
     */
    constructor(client: ApiManagementClient) {
        this.client = client;
    }

    /**
     * Gets all policy fragments.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    listByService(
        resourceGroupName: string,
        serviceName: string,
        options?: PolicyFragmentListByServiceOptionalParams
    ): Promise<PolicyFragmentListByServiceResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, options },
            listByServiceOperationSpec
        );
    }

    /**
     * Gets the entity state (Etag) version of a policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        options?: PolicyFragmentGetEntityTagOptionalParams
    ): Promise<PolicyFragmentGetEntityTagResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, id, options },
            getEntityTagOperationSpec
        );
    }

    /**
     * Gets a policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        options?: PolicyFragmentGetOptionalParams
    ): Promise<PolicyFragmentGetResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, id, options },
            getOperationSpec
        );
    }

    /**
     * Creates or updates a policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param parameters The policy fragment contents to apply.
     * @param options The options parameters.
     */
    async beginCreateOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        parameters: PolicyFragmentContract,
        options?: PolicyFragmentCreateOrUpdateOptionalParams
    ): Promise<
        SimplePollerLike<
            OperationState<PolicyFragmentCreateOrUpdateResponse>,
            PolicyFragmentCreateOrUpdateResponse
        >
    > {
        const directSendOperation = async (
            args: coreClient.OperationArguments,
            spec: coreClient.OperationSpec
        ): Promise<PolicyFragmentCreateOrUpdateResponse> => {
            return this.client.sendOperationRequest(args, spec);
        };
        const sendOperationFn = async (
            args: coreClient.OperationArguments,
            spec: coreClient.OperationSpec
        ) => {
            let currentRawResponse:
                | coreClient.FullOperationResponse
                | undefined = undefined;
            const providedCallback = args.options?.onResponse;
            const callback: coreClient.RawResponseCallback = (
                rawResponse: coreClient.FullOperationResponse,
                flatResponse: unknown
            ) => {
                currentRawResponse = rawResponse;
                providedCallback?.(rawResponse, flatResponse);
            };
            const updatedArgs = {
                ...args,
                options: {
                    ...args.options,
                    onResponse: callback
                }
            };
            const flatResponse = await directSendOperation(updatedArgs, spec);
            return {
                flatResponse,
                rawResponse: {
                    statusCode: currentRawResponse!.status,
                    body: currentRawResponse!.parsedBody,
                    headers: currentRawResponse!.headers.toJSON()
                }
            };
        };

        const lro = createLroSpec({
            sendOperationFn,
            args: { resourceGroupName, serviceName, id, parameters, options },
            spec: createOrUpdateOperationSpec
        });
        const poller = await createHttpPoller<
            PolicyFragmentCreateOrUpdateResponse,
            OperationState<PolicyFragmentCreateOrUpdateResponse>
        >(lro, {
            restoreFrom: options?.resumeFrom,
            intervalInMs: options?.updateIntervalInMs,
            resourceLocationConfig: "location"
        });
        await poller.poll();
        return poller;
    }

    /**
     * Creates or updates a policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param parameters The policy fragment contents to apply.
     * @param options The options parameters.
     */
    async beginCreateOrUpdateAndWait(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        parameters: PolicyFragmentContract,
        options?: PolicyFragmentCreateOrUpdateOptionalParams
    ): Promise<PolicyFragmentCreateOrUpdateResponse> {
        const poller = await this.beginCreateOrUpdate(
            resourceGroupName,
            serviceName,
            id,
            parameters,
            options
        );
        return poller.pollUntilDone();
    }

    /**
     * Deletes a policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        ifMatch: string,
        options?: PolicyFragmentDeleteOptionalParams
    ): Promise<void> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, id, ifMatch, options },
            deleteOperationSpec
        );
    }

    /**
     * Lists policy resources that reference the policy fragment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param id A resource identifier.
     * @param options The options parameters.
     */
    listReferences(
        resourceGroupName: string,
        serviceName: string,
        id: string,
        options?: PolicyFragmentListReferencesOptionalParams
    ): Promise<PolicyFragmentListReferencesResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, id, options },
            listReferencesOperationSpec
        );
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyFragmentCollection
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [
        Parameters.filter,
        Parameters.top,
        Parameters.skip,
        Parameters.apiVersion,
        Parameters.orderby
    ],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments/{id}",
    httpMethod: "HEAD",
    responses: {
        200: {
            headersMapper: Mappers.PolicyFragmentGetEntityTagHeaders
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
        Parameters.id
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyFragmentContract,
            headersMapper: Mappers.PolicyFragmentGetHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.format2],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.id
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments/{id}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.PolicyFragmentContract,
            headersMapper: Mappers.PolicyFragmentCreateOrUpdateHeaders
        },
        201: {
            bodyMapper: Mappers.PolicyFragmentContract,
            headersMapper: Mappers.PolicyFragmentCreateOrUpdateHeaders
        },
        202: {
            bodyMapper: Mappers.PolicyFragmentContract,
            headersMapper: Mappers.PolicyFragmentCreateOrUpdateHeaders
        },
        204: {
            bodyMapper: Mappers.PolicyFragmentContract,
            headersMapper: Mappers.PolicyFragmentCreateOrUpdateHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters57,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.id
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
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments/{id}",
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
        Parameters.id
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer
};
const listReferencesOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyFragments/{id}/listReferences",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.ResourceCollection
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.top, Parameters.skip, Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.id
    ],
    headerParameters: [Parameters.accept],
    serializer
};
