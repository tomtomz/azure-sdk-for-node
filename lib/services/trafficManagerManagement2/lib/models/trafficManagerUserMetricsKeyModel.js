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

const models = require('./index');

/**
 * Class representing a Traffic Manager Real User Metrics key response.
 *
 * @extends models['ProxyResource']
 */
class TrafficManagerUserMetricsKeyModel extends models['ProxyResource'] {
  /**
   * Create a TrafficManagerUserMetricsKeyModel.
   * @member {string} [key] The key returned by the Real User Metrics
   * operation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TrafficManagerUserMetricsKeyModel
   *
   * @returns {object} metadata of TrafficManagerUserMetricsKeyModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrafficManagerUserMetricsKeyModel',
      type: {
        name: 'Composite',
        className: 'TrafficManagerUserMetricsKeyModel',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrafficManagerUserMetricsKeyModel;