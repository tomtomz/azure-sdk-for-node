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
 * Send only to users whose first app use is more than {threshold} days old.
 *
 * @extends models['Filter']
 */
class EngageOldUsersFilter extends models['Filter'] {
  /**
   * Create a EngageOldUsersFilter.
   * @member {number} [threshold] An integer value representing the threshold
   * to apply on this filter.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EngageOldUsersFilter
   *
   * @returns {object} metadata of EngageOldUsersFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'engage-old-users',
      type: {
        name: 'Composite',
        className: 'EngageOldUsersFilter',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          threshold: {
            required: false,
            serializedName: 'threshold',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = EngageOldUsersFilter;