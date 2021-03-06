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
 * The LegalHold property of a blob container.
 *
 */
class LegalHold {
  /**
   * Create a LegalHold.
   * @member {boolean} [hasLegalHold] The hasLegalHold public property is set
   * to true by SRP if there are at least one existing tag. The hasLegalHold
   * public property is set to false by SRP if all existing legal hold tags are
   * cleared out. There can be a maximum of 1000 blob containers with
   * hasLegalHold=true for a given account.
   * @member {array} tags Each tag should be 3 to 23 alphanumeric characters
   * and is normalized to lower case at SRP.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegalHold
   *
   * @returns {object} metadata of LegalHold
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegalHold',
      type: {
        name: 'Composite',
        className: 'LegalHold',
        modelProperties: {
          hasLegalHold: {
            required: false,
            readOnly: true,
            serializedName: 'hasLegalHold',
            type: {
              name: 'Boolean'
            }
          },
          tags: {
            required: true,
            serializedName: 'tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LegalHold;
