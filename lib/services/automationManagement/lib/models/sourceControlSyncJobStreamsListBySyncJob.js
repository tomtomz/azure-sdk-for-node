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
 * The response model for the list source control sync job streams operation.
 *
 */
class SourceControlSyncJobStreamsListBySyncJob {
  /**
   * Create a SourceControlSyncJobStreamsListBySyncJob.
   * @member {array} [value] Gets a list of source control sync job streams.
   * @member {string} [nextLink] Gets or sets the next link.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlSyncJobStreamsListBySyncJob
   *
   * @returns {object} metadata of SourceControlSyncJobStreamsListBySyncJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlSyncJobStreamsListBySyncJob',
      type: {
        name: 'Composite',
        className: 'SourceControlSyncJobStreamsListBySyncJob',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SourceControlSyncJobStreamElementType',
                  type: {
                    name: 'Composite',
                    className: 'SourceControlSyncJobStream'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = SourceControlSyncJobStreamsListBySyncJob;