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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BatchAccountCreateParameters class.
 * @constructor
 * Parameters supplied to the Create operation.
 *
 * @member {string} location The region in which to create the account.
 * 
 * @member {object} [tags] The user specified tags associated with the account.
 * 
 * @member {object} [autoStorage] The properties related to auto storage
 * account.
 * 
 * @member {string} [autoStorage.storageAccountId] The resource id of the
 * storage account to be used for auto storage account.
 * 
 */
function BatchAccountCreateParameters() {
}

/**
 * Defines the metadata of BatchAccountCreateParameters
 *
 * @returns {object} metadata of BatchAccountCreateParameters
 *
 */
BatchAccountCreateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BatchAccountCreateParameters',
    type: {
      name: 'Composite',
      className: 'BatchAccountCreateParameters',
      modelProperties: {
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        autoStorage: {
          required: false,
          serializedName: 'properties.autoStorage',
          type: {
            name: 'Composite',
            className: 'AutoStorageBaseProperties'
          }
        }
      }
    }
  };
};

module.exports = BatchAccountCreateParameters;