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
 * Initializes a new instance of the VirtualMachineScaleSetListSkusResult class.
 * @constructor
 * The Virtual Machine Scale Set List Skus operation response.
 *
 * @member {string} [nextLink] The uri to fetch the next page of Virtual
 * Machine Scale Set Skus. Call ListNext() with this to fetch the next page of
 * VMSS Skus.
 *
 */
function VirtualMachineScaleSetListSkusResult() {
}

util.inherits(VirtualMachineScaleSetListSkusResult, Array);

/**
 * Defines the metadata of VirtualMachineScaleSetListSkusResult
 *
 * @returns {object} metadata of VirtualMachineScaleSetListSkusResult
 *
 */
VirtualMachineScaleSetListSkusResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetListSkusResult',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetListSkusResult',
      modelProperties: {
        value: {
          required: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VirtualMachineScaleSetSkuElementType',
                type: {
                  name: 'Composite',
                  className: 'VirtualMachineScaleSetSku'
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
};

module.exports = VirtualMachineScaleSetListSkusResult;