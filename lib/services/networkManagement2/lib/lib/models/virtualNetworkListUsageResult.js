/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response for the virtual networks GetUsage API service call.
 */
class VirtualNetworkListUsageResult extends Array {
  /**
   * Create a VirtualNetworkListUsageResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualNetworkListUsageResult
   *
   * @returns {object} metadata of VirtualNetworkListUsageResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkListUsageResult',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkListUsageResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualNetworkUsageElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualNetworkUsage'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkListUsageResult;