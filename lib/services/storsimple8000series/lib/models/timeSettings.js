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
 * The time settings of a device.
 *
 * @extends models['BaseModel']
 */
class TimeSettings extends models['BaseModel'] {
  /**
   * Create a TimeSettings.
   * @member {string} timeZone The timezone of device, like '(UTC -06:00)
   * Central America'
   * @member {string} [primaryTimeServer] The primary Network Time Protocol
   * (NTP) server name, like 'time.windows.com'.
   * @member {array} [secondaryTimeServer] The secondary Network Time Protocol
   * (NTP) server name, like 'time.contoso.com'. It's optional.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TimeSettings
   *
   * @returns {object} metadata of TimeSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TimeSettings',
      type: {
        name: 'Composite',
        className: 'TimeSettings',
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
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'Series8000' ]
            }
          },
          timeZone: {
            required: true,
            serializedName: 'properties.timeZone',
            type: {
              name: 'String'
            }
          },
          primaryTimeServer: {
            required: false,
            serializedName: 'properties.primaryTimeServer',
            type: {
              name: 'String'
            }
          },
          secondaryTimeServer: {
            required: false,
            serializedName: 'properties.secondaryTimeServer',
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

module.exports = TimeSettings;