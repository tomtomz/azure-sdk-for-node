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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the GetObjectsResult class.
 * @constructor
 * Server response for Active Directory objects inquiry API calls
 *
 * @member {string} [odatanextLink] the URL to get the next set of results.
 * 
 */
function GetObjectsResult() {
}

util.inherits(GetObjectsResult, Array);

/**
 * Defines the metadata of GetObjectsResult
 *
 * @returns {object} metadata of GetObjectsResult
 *
 */
GetObjectsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GetObjectsResult',
    type: {
      name: 'Composite',
      className: 'GetObjectsResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'AADObjectElementType',
                type: {
                  name: 'Composite',
                  className: 'AADObject'
                }
            }
          }
        },
        odatanextLink: {
          required: false,
          serializedName: 'odata\\.nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = GetObjectsResult;