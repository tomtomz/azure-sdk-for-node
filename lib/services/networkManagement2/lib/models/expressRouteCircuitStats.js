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
 * @class
 * Initializes a new instance of the ExpressRouteCircuitStats class.
 * @constructor
 * Contains stats associated with the peering.
 *
 * @member {number} [primarybytesIn] Gets BytesIn of the peering.
 *
 * @member {number} [primarybytesOut] Gets BytesOut of the peering.
 *
 * @member {number} [secondarybytesIn] Gets BytesIn of the peering.
 *
 * @member {number} [secondarybytesOut] Gets BytesOut of the peering.
 *
 */
function ExpressRouteCircuitStats() {
}

/**
 * Defines the metadata of ExpressRouteCircuitStats
 *
 * @returns {object} metadata of ExpressRouteCircuitStats
 *
 */
ExpressRouteCircuitStats.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitStats',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitStats',
      modelProperties: {
        primarybytesIn: {
          required: false,
          serializedName: 'primarybytesIn',
          type: {
            name: 'Number'
          }
        },
        primarybytesOut: {
          required: false,
          serializedName: 'primarybytesOut',
          type: {
            name: 'Number'
          }
        },
        secondarybytesIn: {
          required: false,
          serializedName: 'secondarybytesIn',
          type: {
            name: 'Number'
          }
        },
        secondarybytesOut: {
          required: false,
          serializedName: 'secondarybytesOut',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ExpressRouteCircuitStats;