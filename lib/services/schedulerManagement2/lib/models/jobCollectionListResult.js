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
 * Class representing a JobCollectionListResult.
 */
class JobCollectionListResult extends Array {
  /**
   * Create a JobCollectionListResult.
   * @member {string} [nextLink] Gets or sets the URL to get the next set of
   * job collections.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobCollectionListResult
   *
   * @returns {object} metadata of JobCollectionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCollectionListResult',
      type: {
        name: 'Composite',
        className: 'JobCollectionListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobCollectionDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobCollectionDefinition'
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

module.exports = JobCollectionListResult;