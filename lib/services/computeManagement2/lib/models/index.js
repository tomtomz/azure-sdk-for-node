/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.InstanceViewStatus = require('./instanceViewStatus');
exports.SubResource = require('./subResource');
exports.Sku = require('./sku');
exports.Resource = require('./resource');
exports.AvailabilitySet = require('./availabilitySet');
exports.AvailabilitySetListResult = require('./availabilitySetListResult');
exports.VirtualMachineSize = require('./virtualMachineSize');
exports.VirtualMachineSizeListResult = require('./virtualMachineSizeListResult');
exports.VirtualMachineExtensionImage = require('./virtualMachineExtensionImage');
exports.VirtualMachineImageResource = require('./virtualMachineImageResource');
exports.VirtualMachineExtensionInstanceView = require('./virtualMachineExtensionInstanceView');
exports.VirtualMachineExtension = require('./virtualMachineExtension');
exports.PurchasePlan = require('./purchasePlan');
exports.OSDiskImage = require('./oSDiskImage');
exports.DataDiskImage = require('./dataDiskImage');
exports.VirtualMachineImage = require('./virtualMachineImage');
exports.UsageName = require('./usageName');
exports.Usage = require('./usage');
exports.ListUsagesResult = require('./listUsagesResult');
exports.VirtualMachineCaptureParameters = require('./virtualMachineCaptureParameters');
exports.VirtualMachineCaptureResult = require('./virtualMachineCaptureResult');
exports.Plan = require('./plan');
exports.HardwareProfile = require('./hardwareProfile');
exports.ImageReference = require('./imageReference');
exports.KeyVaultSecretReference = require('./keyVaultSecretReference');
exports.KeyVaultKeyReference = require('./keyVaultKeyReference');
exports.DiskEncryptionSettings = require('./diskEncryptionSettings');
exports.VirtualHardDisk = require('./virtualHardDisk');
exports.ManagedDiskParameters = require('./managedDiskParameters');
exports.OSDisk = require('./oSDisk');
exports.DataDisk = require('./dataDisk');
exports.StorageProfile = require('./storageProfile');
exports.AdditionalUnattendContent = require('./additionalUnattendContent');
exports.WinRMListener = require('./winRMListener');
exports.WinRMConfiguration = require('./winRMConfiguration');
exports.WindowsConfiguration = require('./windowsConfiguration');
exports.SshPublicKey = require('./sshPublicKey');
exports.SshConfiguration = require('./sshConfiguration');
exports.LinuxConfiguration = require('./linuxConfiguration');
exports.VaultCertificate = require('./vaultCertificate');
exports.VaultSecretGroup = require('./vaultSecretGroup');
exports.OSProfile = require('./oSProfile');
exports.NetworkInterfaceReference = require('./networkInterfaceReference');
exports.NetworkProfile = require('./networkProfile');
exports.BootDiagnostics = require('./bootDiagnostics');
exports.DiagnosticsProfile = require('./diagnosticsProfile');
exports.VirtualMachineExtensionHandlerInstanceView = require('./virtualMachineExtensionHandlerInstanceView');
exports.VirtualMachineAgentInstanceView = require('./virtualMachineAgentInstanceView');
exports.DiskInstanceView = require('./diskInstanceView');
exports.BootDiagnosticsInstanceView = require('./bootDiagnosticsInstanceView');
exports.VirtualMachineInstanceView = require('./virtualMachineInstanceView');
exports.VirtualMachine = require('./virtualMachine');
exports.VirtualMachineListResult = require('./virtualMachineListResult');
exports.UpgradePolicy = require('./upgradePolicy');
exports.ImageOSDisk = require('./imageOSDisk');
exports.ImageDataDisk = require('./imageDataDisk');
exports.ImageStorageProfile = require('./imageStorageProfile');
exports.Image = require('./image');
exports.ImageListResult = require('./imageListResult');
exports.VirtualMachineScaleSetOSProfile = require('./virtualMachineScaleSetOSProfile');
exports.VirtualMachineScaleSetManagedDiskParameters = require('./virtualMachineScaleSetManagedDiskParameters');
exports.VirtualMachineScaleSetOSDisk = require('./virtualMachineScaleSetOSDisk');
exports.VirtualMachineScaleSetDataDisk = require('./virtualMachineScaleSetDataDisk');
exports.VirtualMachineScaleSetStorageProfile = require('./virtualMachineScaleSetStorageProfile');
exports.ApiEntityReference = require('./apiEntityReference');
exports.VirtualMachineScaleSetIPConfiguration = require('./virtualMachineScaleSetIPConfiguration');
exports.VirtualMachineScaleSetNetworkConfiguration = require('./virtualMachineScaleSetNetworkConfiguration');
exports.VirtualMachineScaleSetNetworkProfile = require('./virtualMachineScaleSetNetworkProfile');
exports.SubResourceReadOnly = require('./subResourceReadOnly');
exports.VirtualMachineScaleSetExtension = require('./virtualMachineScaleSetExtension');
exports.VirtualMachineScaleSetExtensionProfile = require('./virtualMachineScaleSetExtensionProfile');
exports.VirtualMachineScaleSetVMProfile = require('./virtualMachineScaleSetVMProfile');
exports.VirtualMachineScaleSet = require('./virtualMachineScaleSet');
exports.VirtualMachineScaleSetVMInstanceIDs = require('./virtualMachineScaleSetVMInstanceIDs');
exports.VirtualMachineScaleSetVMInstanceRequiredIDs = require('./virtualMachineScaleSetVMInstanceRequiredIDs');
exports.VirtualMachineStatusCodeCount = require('./virtualMachineStatusCodeCount');
exports.VirtualMachineScaleSetInstanceViewStatusesSummary = require('./virtualMachineScaleSetInstanceViewStatusesSummary');
exports.VirtualMachineScaleSetVMExtensionsSummary = require('./virtualMachineScaleSetVMExtensionsSummary');
exports.VirtualMachineScaleSetInstanceView = require('./virtualMachineScaleSetInstanceView');
exports.VirtualMachineScaleSetListResult = require('./virtualMachineScaleSetListResult');
exports.VirtualMachineScaleSetListWithLinkResult = require('./virtualMachineScaleSetListWithLinkResult');
exports.VirtualMachineScaleSetSkuCapacity = require('./virtualMachineScaleSetSkuCapacity');
exports.VirtualMachineScaleSetSku = require('./virtualMachineScaleSetSku');
exports.VirtualMachineScaleSetListSkusResult = require('./virtualMachineScaleSetListSkusResult');
exports.VirtualMachineScaleSetVM = require('./virtualMachineScaleSetVM');
exports.VirtualMachineScaleSetVMInstanceView = require('./virtualMachineScaleSetVMInstanceView');
exports.VirtualMachineScaleSetVMListResult = require('./virtualMachineScaleSetVMListResult');
exports.ApiErrorBase = require('./apiErrorBase');
exports.InnerError = require('./innerError');
exports.ApiError = require('./apiError');
exports.ComputeLongRunningOperationProperties = require('./computeLongRunningOperationProperties');
exports.OperationStatusResponse = require('./operationStatusResponse');
exports.ContainerServiceCustomProfile = require('./containerServiceCustomProfile');
exports.ContainerServiceServicePrincipalProfile = require('./containerServiceServicePrincipalProfile');
exports.ContainerServiceOrchestratorProfile = require('./containerServiceOrchestratorProfile');
exports.ContainerServiceMasterProfile = require('./containerServiceMasterProfile');
exports.ContainerServiceAgentPoolProfile = require('./containerServiceAgentPoolProfile');
exports.ContainerServiceWindowsProfile = require('./containerServiceWindowsProfile');
exports.ContainerServiceSshPublicKey = require('./containerServiceSshPublicKey');
exports.ContainerServiceSshConfiguration = require('./containerServiceSshConfiguration');
exports.ContainerServiceLinuxProfile = require('./containerServiceLinuxProfile');
exports.ContainerServiceVMDiagnostics = require('./containerServiceVMDiagnostics');
exports.ContainerServiceDiagnosticsProfile = require('./containerServiceDiagnosticsProfile');
exports.ContainerService = require('./containerService');
exports.ContainerServiceListResult = require('./containerServiceListResult');
exports.ResourceUpdate = require('./resourceUpdate');
exports.ImageDiskReference = require('./imageDiskReference');
exports.CreationData = require('./creationData');
exports.SourceVault = require('./sourceVault');
exports.KeyVaultAndSecretReference = require('./keyVaultAndSecretReference');
exports.KeyVaultAndKeyReference = require('./keyVaultAndKeyReference');
exports.EncryptionSettings = require('./encryptionSettings');
exports.Disk = require('./disk');
exports.DiskUpdate = require('./diskUpdate');
exports.DiskList = require('./diskList');
exports.GrantAccessData = require('./grantAccessData');
exports.AccessUri = require('./accessUri');
exports.Snapshot = require('./snapshot');
exports.SnapshotUpdate = require('./snapshotUpdate');
exports.SnapshotList = require('./snapshotList');
exports.AvailabilitySetListResult = require('./availabilitySetListResult');
exports.VirtualMachineSizeListResult = require('./virtualMachineSizeListResult');
exports.ListUsagesResult = require('./listUsagesResult');
exports.ImageListResult = require('./imageListResult');
exports.VirtualMachineListResult = require('./virtualMachineListResult');
exports.VirtualMachineScaleSetListResult = require('./virtualMachineScaleSetListResult');
exports.VirtualMachineScaleSetListWithLinkResult = require('./virtualMachineScaleSetListWithLinkResult');
exports.VirtualMachineScaleSetListSkusResult = require('./virtualMachineScaleSetListSkusResult');
exports.VirtualMachineScaleSetVMListResult = require('./virtualMachineScaleSetVMListResult');
exports.ContainerServiceListResult = require('./containerServiceListResult');
exports.DiskList = require('./diskList');
exports.SnapshotList = require('./snapshotList');