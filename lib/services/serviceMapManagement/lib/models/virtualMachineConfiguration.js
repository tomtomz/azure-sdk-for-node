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
 * Describes the virtualizaton-related configuration of a machine.
 *
 */
class VirtualMachineConfiguration {
  /**
   * Create a VirtualMachineConfiguration.
   * @member {string} [virtualMachineType] Specifies the virtualization
   * technology used by the machine (hyperv, vmware, etc.). Possible values
   * include: 'unknown', 'hyperv', 'ldom', 'lpar', 'vmware', 'virtualPc', 'xen'
   * @member {string} [nativeMachineId] The unique identifier of the virtual
   * machine as reported by the underlying virtualization sytem.
   * @member {string} [virtualMachineName] The Name of the virtual machine.
   * @member {string} [nativeHostMachineId] The unique identifier of the host
   * of this virtual machine as reported by the underlying virtualization
   * system.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineConfiguration
   *
   * @returns {object} metadata of VirtualMachineConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineConfiguration',
      type: {
        name: 'Composite',
        className: 'VirtualMachineConfiguration',
        modelProperties: {
          virtualMachineType: {
            required: false,
            serializedName: 'virtualMachineType',
            type: {
              name: 'Enum',
              allowedValues: [ 'unknown', 'hyperv', 'ldom', 'lpar', 'vmware', 'virtualPc', 'xen' ]
            }
          },
          nativeMachineId: {
            required: false,
            serializedName: 'nativeMachineId',
            type: {
              name: 'String'
            }
          },
          virtualMachineName: {
            required: false,
            serializedName: 'virtualMachineName',
            type: {
              name: 'String'
            }
          },
          nativeHostMachineId: {
            required: false,
            serializedName: 'nativeHostMachineId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineConfiguration;