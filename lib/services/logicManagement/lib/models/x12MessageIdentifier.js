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
 * The X12 message identifier.
 *
 */
class X12MessageIdentifier {
  /**
   * Create a X12MessageIdentifier.
   * @member {string} messageId The message id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of X12MessageIdentifier
   *
   * @returns {object} metadata of X12MessageIdentifier
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'X12MessageIdentifier',
      type: {
        name: 'Composite',
        className: 'X12MessageIdentifier',
        modelProperties: {
          messageId: {
            required: true,
            serializedName: 'messageId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = X12MessageIdentifier;