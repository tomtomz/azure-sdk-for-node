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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the GenericResource class.
 * @constructor
 * Resource information.
 *
 * @member {object} [plan] The plan of the resource.
 * 
 * @member {string} [plan.name] The plan ID.
 * 
 * @member {string} [plan.publisher] The publisher ID.
 * 
 * @member {string} [plan.product] The offer ID.
 * 
 * @member {string} [plan.promotionCode] The promotion code.
 * 
 * @member {object} [properties] The resource properties.
 * 
 * @member {string} [kind] The kind of the resource.
 * 
 * @member {string} [managedBy] ID of the resource that manages this resource.
 * 
 * @member {object} [sku] The SKU of the resource.
 * 
 * @member {string} [sku.name] The SKU name.
 * 
 * @member {string} [sku.tier] The SKU tier.
 * 
 * @member {string} [sku.size] The SKU size.
 * 
 * @member {string} [sku.family] The SKU family.
 * 
 * @member {string} [sku.model] The SKU model.
 * 
 * @member {number} [sku.capacity] The SKU capacity.
 * 
 * @member {object} [identity] The identity of the resource.
 * 
 * @member {string} [identity.principalId] The principal ID of resource
 * identity.
 * 
 * @member {string} [identity.tenantId] The tenant ID of resource.
 * 
 * @member {string} [identity.type] The identity type. Possible values
 * include: 'SystemAssigned'
 * 
 */
function GenericResource() {
  GenericResource['super_'].call(this);
}

util.inherits(GenericResource, models['Resource']);

/**
 * Defines the metadata of GenericResource
 *
 * @returns {object} metadata of GenericResource
 *
 */
GenericResource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GenericResource',
    type: {
      name: 'Composite',
      className: 'GenericResource',
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
        location: {
          required: false,
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
        plan: {
          required: false,
          serializedName: 'plan',
          type: {
            name: 'Composite',
            className: 'Plan'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Object'
          }
        },
        kind: {
          required: false,
          serializedName: 'kind',
          constraints: {
            Pattern: '^[-\w\._,\(\)]+$'
          },
          type: {
            name: 'String'
          }
        },
        managedBy: {
          required: false,
          serializedName: 'managedBy',
          type: {
            name: 'String'
          }
        },
        sku: {
          required: false,
          serializedName: 'sku',
          type: {
            name: 'Composite',
            className: 'Sku'
          }
        },
        identity: {
          required: false,
          serializedName: 'identity',
          type: {
            name: 'Composite',
            className: 'Identity'
          }
        }
      }
    }
  };
};

module.exports = GenericResource;