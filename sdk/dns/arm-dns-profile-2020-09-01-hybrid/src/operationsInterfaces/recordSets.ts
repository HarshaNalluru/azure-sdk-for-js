/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecordSet,
  RecordType,
  RecordSetsListByTypeOptionalParams,
  RecordSetsListByDnsZoneOptionalParams,
  RecordSetsUpdateOptionalParams,
  RecordSetsUpdateResponse,
  RecordSetsCreateOrUpdateOptionalParams,
  RecordSetsCreateOrUpdateResponse,
  RecordSetsDeleteOptionalParams,
  RecordSetsGetOptionalParams,
  RecordSetsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecordSets. */
export interface RecordSets {
  /**
   * Lists the record sets of a specified type in a DNS zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate.
   * @param options The options parameters.
   */
  listByType(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    options?: RecordSetsListByTypeOptionalParams
  ): PagedAsyncIterableIterator<RecordSet>;
  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  listByDnsZone(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListByDnsZoneOptionalParams
  ): PagedAsyncIterableIterator<RecordSet>;
  /**
   * Updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    parameters: RecordSet,
    options?: RecordSetsUpdateOptionalParams
  ): Promise<RecordSetsUpdateResponse>;
  /**
   * Creates or updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be updated
   *                   but not created (they are created when the DNS zone is created).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    parameters: RecordSet,
    options?: RecordSetsCreateOrUpdateOptionalParams
  ): Promise<RecordSetsCreateOrUpdateResponse>;
  /**
   * Deletes a record set from a DNS zone. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   *                   deleted (they are deleted when the DNS zone is deleted).
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    options?: RecordSetsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets a record set.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    options?: RecordSetsGetOptionalParams
  ): Promise<RecordSetsGetResponse>;
}
