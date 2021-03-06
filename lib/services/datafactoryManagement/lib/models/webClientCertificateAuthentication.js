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
 * A WebLinkedService that uses client certificate based authentication to
 * communicate with an HTTP endpoint. This scheme follows mutual
 * authentication; the server must also provide valid credentials to the
 * client.
 *
 * @extends models['WebLinkedServiceTypeProperties']
 */
class WebClientCertificateAuthentication extends models['WebLinkedServiceTypeProperties'] {
  /**
   * Create a WebClientCertificateAuthentication.
   * @member {object} pfx Base64-encoded contents of a PFX file.
   * @member {string} [pfx.type] Polymorphic Discriminator
   * @member {object} password Password for the PFX file.
   * @member {string} [password.type] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebClientCertificateAuthentication
   *
   * @returns {object} metadata of WebClientCertificateAuthentication
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClientCertificate',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'authenticationType',
          clientName: 'authenticationType'
        },
        uberParent: 'WebLinkedServiceTypeProperties',
        className: 'WebClientCertificateAuthentication',
        modelProperties: {
          url: {
            required: true,
            serializedName: 'url',
            type: {
              name: 'Object'
            }
          },
          authenticationType: {
            required: true,
            serializedName: 'authenticationType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          pfx: {
            required: true,
            serializedName: 'pfx',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          }
        }
      }
    };
  }
}

module.exports = WebClientCertificateAuthentication;
