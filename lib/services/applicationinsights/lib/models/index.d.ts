/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates Insights service is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.Cdn
 * @member {string} [resource] Resource on which the operation is performed:
 * Profile, endpoint, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * CDN REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft.Cdn
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Profile, endpoint, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the Annotation class.
 * @constructor
 * Annotation associated with an application insights resource.
 *
 * @member {string} [annotationName] Name of annotation
 * @member {string} [category] Category of annotation, free form
 * @member {date} [eventTime] Time when event occurred
 * @member {string} [id] Unique Id for annotation
 * @member {string} [properties] Serialized JSON object for detailed properties
 * @member {string} [relatedAnnotation] Related parent annotation if any.
 * Default value: 'null' .
 */
export interface Annotation {
  annotationName?: string;
  category?: string;
  eventTime?: Date;
  id?: string;
  properties?: string;
  relatedAnnotation?: string;
}

/**
 * @class
 * Initializes a new instance of the InnerError class.
 * @constructor
 * Inner error
 *
 * @member {string} [diagnosticcontext] Provides correlation for request
 * @member {date} [time] Request time
 */
export interface InnerError {
  diagnosticcontext?: string;
  time?: Date;
}

/**
 * @class
 * Initializes a new instance of the AnnotationError class.
 * @constructor
 * Error associated with trying to create annotation with Id that already exist
 *
 * @member {string} [code] Error detail code and explanation
 * @member {string} [message] Error message
 * @member {object} [innererror]
 * @member {string} [innererror.diagnosticcontext] Provides correlation for
 * request
 * @member {date} [innererror.time] Request time
 */
export interface AnnotationError {
  code?: string;
  message?: string;
  innererror?: InnerError;
}

/**
 * @class
 * Initializes a new instance of the APIKeyRequest class.
 * @constructor
 * An Application Insights component API Key createion request definition.
 *
 * @member {string} [name] The name of the API Key.
 * @member {array} [linkedReadProperties] The read access rights of this API
 * Key.
 * @member {array} [linkedWriteProperties] The write access rights of this API
 * Key.
 */
export interface APIKeyRequest {
  name?: string;
  linkedReadProperties?: string[];
  linkedWriteProperties?: string[];
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentAPIKey class.
 * @constructor
 * Properties that define an API key of an Application Insights Component.
 *
 * @member {string} [id] The unique ID of the API key inside an Applciation
 * Insights component. It is auto generated when the API key is created.
 * @member {string} [apiKey] The API key value. It will be only return once
 * when the API Key was created.
 * @member {string} [createdDate] The create date of this API key.
 * @member {string} [name] The name of the API key.
 * @member {array} [linkedReadProperties] The read access rights of this API
 * Key.
 * @member {array} [linkedWriteProperties] The write access rights of this API
 * Key.
 */
export interface ApplicationInsightsComponentAPIKey {
  readonly id?: string;
  readonly apiKey?: string;
  createdDate?: string;
  name?: string;
  linkedReadProperties?: string[];
  linkedWriteProperties?: string[];
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentExportRequest class.
 * @constructor
 * An Application Insights component Continuous Export configuration request
 * definition.
 *
 * @member {string} [recordTypes] The document types to be exported, as comma
 * separated values. Allowed values include 'Requests', 'Event', 'Exceptions',
 * 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters',
 * 'Availability', 'Messages'.
 * @member {string} [destinationType] The Continuous Export destination type.
 * This has to be 'Blob'.
 * @member {string} [destinationAddress] The SAS URL for the destination
 * storage container. It must grant write permission.
 * @member {string} [isEnabled] Set to 'true' to create a Continuous Export
 * configuration as enabled, otherwise set it to 'false'.
 * @member {string} [notificationQueueEnabled] Deprecated
 * @member {string} [notificationQueueUri] Deprecated
 * @member {string} [destinationStorageSubscriptionId] The subscription ID of
 * the destination storage container.
 * @member {string} [destinationStorageLocationId] The location ID of the
 * destination storage container.
 * @member {string} [destinationAccountId] The name of destination storage
 * account.
 */
export interface ApplicationInsightsComponentExportRequest {
  recordTypes?: string;
  destinationType?: string;
  destinationAddress?: string;
  isEnabled?: string;
  notificationQueueEnabled?: string;
  notificationQueueUri?: string;
  destinationStorageSubscriptionId?: string;
  destinationStorageLocationId?: string;
  destinationAccountId?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentExportConfiguration class.
 * @constructor
 * Properties that define a Continuous Export configuration.
 *
 * @member {string} [exportId] The unique ID of the export configuration inside
 * an Applciation Insights component. It is auto generated when the Continuous
 * Export configuration is created.
 * @member {string} [instrumentationKey] The instrumentation key of the
 * Application Insights component.
 * @member {string} [recordTypes] This comma separated list of document types
 * that will be exported. The possible values include 'Requests', 'Event',
 * 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd',
 * 'PerformanceCounters', 'Availability', 'Messages'.
 * @member {string} [applicationName] The name of the Application Insights
 * component.
 * @member {string} [subscriptionId] The subscription of the Application
 * Insights component.
 * @member {string} [resourceGroup] The resource group of the Application
 * Insights component.
 * @member {string} [destinationStorageSubscriptionId] The destination storage
 * account subscription ID.
 * @member {string} [destinationStorageLocationId] The destination account
 * location ID.
 * @member {string} [destinationAccountId] The name of destination account.
 * @member {string} [destinationType] The destination type.
 * @member {string} [isUserEnabled] This will be 'true' if the Continuous
 * Export configuration is enabled, otherwise it will be 'false'.
 * @member {string} [lastUserUpdate] Last time the Continuous Export
 * configuration was updated.
 * @member {string} [notificationQueueEnabled] Deprecated
 * @member {string} [exportStatus] This indicates current Continuous Export
 * configuration status. The possible values are 'Preparing', 'Success',
 * 'Failure'.
 * @member {string} [lastSuccessTime] The last time data was successfully
 * delivered to the destination storage container for this Continuous Export
 * configuration.
 * @member {string} [lastGapTime] The last time the Continuous Export
 * configuration started failing.
 * @member {string} [permanentErrorReason] This is the reason the Continuous
 * Export configuration started failing. It can be 'AzureStorageNotFound' or
 * 'AzureStorageAccessDenied'.
 * @member {string} [storageName] The name of the destination storage account.
 * @member {string} [containerName] The name of the destination storage
 * container.
 */
export interface ApplicationInsightsComponentExportConfiguration {
  readonly exportId?: string;
  readonly instrumentationKey?: string;
  recordTypes?: string;
  readonly applicationName?: string;
  readonly subscriptionId?: string;
  readonly resourceGroup?: string;
  readonly destinationStorageSubscriptionId?: string;
  readonly destinationStorageLocationId?: string;
  readonly destinationAccountId?: string;
  readonly destinationType?: string;
  readonly isUserEnabled?: string;
  readonly lastUserUpdate?: string;
  notificationQueueEnabled?: string;
  readonly exportStatus?: string;
  readonly lastSuccessTime?: string;
  readonly lastGapTime?: string;
  readonly permanentErrorReason?: string;
  readonly storageName?: string;
  readonly containerName?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentDataVolumeCap class.
 * @constructor
 * An Application Insights component daily data volumne cap
 *
 * @member {number} [cap] Daily data volume cap in GB.
 * @member {number} [resetTime] Daily data volume cap UTC reset hour.
 * @member {number} [warningThreshold] Reserved, not used for now.
 * @member {boolean} [stopSendNotificationWhenHitThreshold] Reserved, not used
 * for now.
 * @member {boolean} [stopSendNotificationWhenHitCap] Do not send a
 * notification email when the daily data volume cap is met.
 * @member {number} [maxHistoryCap] Maximum daily data volume cap that the user
 * can set for this component.
 */
export interface ApplicationInsightsComponentDataVolumeCap {
  cap?: number;
  readonly resetTime?: number;
  warningThreshold?: number;
  stopSendNotificationWhenHitThreshold?: boolean;
  stopSendNotificationWhenHitCap?: boolean;
  readonly maxHistoryCap?: number;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentBillingFeatures class.
 * @constructor
 * An Application Insights component billing features
 *
 * @member {object} [dataVolumeCap] An Application Insights component daily
 * data volumne cap
 * @member {number} [dataVolumeCap.cap] Daily data volume cap in GB.
 * @member {number} [dataVolumeCap.resetTime] Daily data volume cap UTC reset
 * hour.
 * @member {number} [dataVolumeCap.warningThreshold] Reserved, not used for
 * now.
 * @member {boolean} [dataVolumeCap.stopSendNotificationWhenHitThreshold]
 * Reserved, not used for now.
 * @member {boolean} [dataVolumeCap.stopSendNotificationWhenHitCap] Do not send
 * a notification email when the daily data volume cap is met.
 * @member {number} [dataVolumeCap.maxHistoryCap] Maximum daily data volume cap
 * that the user can set for this component.
 * @member {array} [currentBillingFeatures] Current enabled pricing plan. When
 * the component is in the Enterprise plan, this will list both 'Basic' and
 * 'Application Insights Enterprise'.
 */
export interface ApplicationInsightsComponentBillingFeatures {
  dataVolumeCap?: ApplicationInsightsComponentDataVolumeCap;
  currentBillingFeatures?: string[];
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentQuotaStatus class.
 * @constructor
 * An Application Insights component daily data volume cap status
 *
 * @member {string} [appId] The Application ID for the Application Insights
 * component.
 * @member {boolean} [shouldBeThrottled] The daily data volume cap is met, and
 * data ingestion will be stopped.
 * @member {string} [expirationTime] Date and time when the daily data volume
 * cap will be reset, and data ingestion will resume.
 */
export interface ApplicationInsightsComponentQuotaStatus {
  readonly appId?: string;
  readonly shouldBeThrottled?: boolean;
  readonly expirationTime?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentFeatureCapabilities class.
 * @constructor
 * An Application Insights component feature capabilities
 *
 * @member {boolean} [supportExportData] Whether allow to use continuous export
 * feature.
 * @member {string} [burstThrottlePolicy] Reserved, not used now.
 * @member {string} [metadataClass] Reserved, not used now.
 * @member {boolean} [liveStreamMetrics] Reserved, not used now.
 * @member {boolean} [applicationMap] Reserved, not used now.
 * @member {boolean} [workItemIntegration] Whether allow to use work item
 * integration feature.
 * @member {boolean} [powerBIIntegration] Reserved, not used now.
 * @member {boolean} [openSchema] Reserved, not used now.
 * @member {boolean} [proactiveDetection] Reserved, not used now.
 * @member {boolean} [analyticsIntegration] Reserved, not used now.
 * @member {boolean} [multipleStepWebTest] Whether allow to use multiple steps
 * web test feature.
 * @member {string} [apiAccessLevel] Reserved, not used now.
 * @member {string} [trackingType] The applciation insights component used
 * tracking type.
 * @member {number} [dailyCap] Daily data volume cap in GB.
 * @member {number} [dailyCapResetTime] Daily data volume cap UTC reset hour.
 * @member {number} [throttleRate] Reserved, not used now.
 */
export interface ApplicationInsightsComponentFeatureCapabilities {
  readonly supportExportData?: boolean;
  readonly burstThrottlePolicy?: string;
  readonly metadataClass?: string;
  readonly liveStreamMetrics?: boolean;
  readonly applicationMap?: boolean;
  readonly workItemIntegration?: boolean;
  readonly powerBIIntegration?: boolean;
  readonly openSchema?: boolean;
  readonly proactiveDetection?: boolean;
  readonly analyticsIntegration?: boolean;
  readonly multipleStepWebTest?: boolean;
  readonly apiAccessLevel?: string;
  readonly trackingType?: string;
  readonly dailyCap?: number;
  readonly dailyCapResetTime?: number;
  readonly throttleRate?: number;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentFeatureCapability class.
 * @constructor
 * An Application Insights component feature capability
 *
 * @member {string} [name] The name of the capability.
 * @member {string} [description] The description of the capability.
 * @member {string} [value] The vaule of the capability.
 * @member {string} [unit] The unit of the capability.
 * @member {string} [meterId] The meter used for the capability.
 * @member {string} [meterRateFrequency] The meter rate of the meter.
 */
export interface ApplicationInsightsComponentFeatureCapability {
  readonly name?: string;
  readonly description?: string;
  readonly value?: string;
  readonly unit?: string;
  readonly meterId?: string;
  readonly meterRateFrequency?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentFeature class.
 * @constructor
 * An Application Insights component daily data volume cap status
 *
 * @member {string} [featureName] The pricing feature name.
 * @member {string} [meterId] The meter id used for the feature.
 * @member {string} [meterRateFrequency] The meter meter rate for the feature's
 * meter.
 * @member {string} [resouceId] Reserved, not used now.
 * @member {boolean} [isHidden] Reserved, not used now.
 * @member {array} [capabilities] A list of Application Insigths component
 * feature capability.
 * @member {string} [title] Desplay name of the feature.
 * @member {boolean} [isMainFeature] Whether can apply addon feature on to it.
 * @member {string} [supportedAddonFeatures] The add on features on main
 * feature.
 */
export interface ApplicationInsightsComponentFeature {
  readonly featureName?: string;
  readonly meterId?: string;
  readonly meterRateFrequency?: string;
  readonly resouceId?: string;
  readonly isHidden?: boolean;
  readonly capabilities?: ApplicationInsightsComponentFeatureCapability[];
  readonly title?: string;
  readonly isMainFeature?: boolean;
  readonly supportedAddonFeatures?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentAvailableFeatures class.
 * @constructor
 * An Application Insights component available features.
 *
 * @member {array} [result] A list of Application Insigths component feature.
 */
export interface ApplicationInsightsComponentAvailableFeatures {
  readonly result?: ApplicationInsightsComponentFeature[];
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions class.
 * @constructor
 * Static definitions of the ProactiveDetection configuration rule (same values
 * for all components).
 *
 * @member {string} [name] The rule name
 * @member {string} [displayName] The rule name as it is displayed in UI
 * @member {string} [description] The rule description
 * @member {string} [helpUrl] URL which displays aditional info about the
 * proactive detection rule
 * @member {boolean} [isHidden] A flag indicating whether the rule is hidden
 * (from the UI)
 * @member {boolean} [isEnabledByDefault] A flag indicating whether the rule is
 * enabled by default
 * @member {boolean} [isInPreview] A flag indicating whether the rule is in
 * preview
 * @member {boolean} [supportsEmailNotifications] A flag indicating whether
 * email notifications are supported for detections for this rule
 */
export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions {
  name?: string;
  displayName?: string;
  description?: string;
  helpUrl?: string;
  isHidden?: boolean;
  isEnabledByDefault?: boolean;
  isInPreview?: boolean;
  supportsEmailNotifications?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentProactiveDetectionConfiguration class.
 * @constructor
 * Properties that define a ProactiveDetection configuration.
 *
 * @member {string} [name] The rule name
 * @member {boolean} [enabled] A flag that indicates whether this rule is
 * enabled by the user
 * @member {boolean} [sendEmailsToSubscriptionOwners] A flag that indicated
 * whether notifications on this rule should be sent to subscription owners
 * @member {array} [customEmails] Custom email addresses for this rule
 * notifications
 * @member {string} [lastUpdatedTime] The last time this rule was updated
 * @member {object} [ruleDefinitions] Static definitions of the
 * ProactiveDetection configuration rule (same values for all components).
 * @member {string} [ruleDefinitions.name] The rule name
 * @member {string} [ruleDefinitions.displayName] The rule name as it is
 * displayed in UI
 * @member {string} [ruleDefinitions.description] The rule description
 * @member {string} [ruleDefinitions.helpUrl] URL which displays aditional info
 * about the proactive detection rule
 * @member {boolean} [ruleDefinitions.isHidden] A flag indicating whether the
 * rule is hidden (from the UI)
 * @member {boolean} [ruleDefinitions.isEnabledByDefault] A flag indicating
 * whether the rule is enabled by default
 * @member {boolean} [ruleDefinitions.isInPreview] A flag indicating whether
 * the rule is in preview
 * @member {boolean} [ruleDefinitions.supportsEmailNotifications] A flag
 * indicating whether email notifications are supported for detections for this
 * rule
 */
export interface ApplicationInsightsComponentProactiveDetectionConfiguration extends BaseResource {
  name?: string;
  enabled?: boolean;
  sendEmailsToSubscriptionOwners?: boolean;
  customEmails?: string[];
  lastUpdatedTime?: string;
  ruleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * An azure resource object
 *
 * @member {string} [id] Azure resource Id
 * @member {string} [name] Azure resource name
 * @member {string} [type] Azure resource type
 * @member {string} location Resource location
 * @member {object} [tags] Resource tags
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the TagsResource class.
 * @constructor
 * A container holding only the Tags for a resource, allowing the user to
 * update the tags on a WebTest instance.
 *
 * @member {object} [tags] Resource tags
 */
export interface TagsResource {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponent class.
 * @constructor
 * An Application Insights component definition.
 *
 * @member {string} kind The kind of application that this component refers to,
 * used to customize UI. This value is a freeform string, values should
 * typically be one of the following: web, ios, other, store, java, phone.
 * @member {string} [applicationId] The unique ID of your application. This
 * field mirrors the 'Name' field and cannot be changed.
 * @member {string} [appId] Application Insights Unique ID for your
 * Application.
 * @member {string} applicationType Type of application being monitored.
 * Possible values include: 'web', 'other'. Default value: 'web' .
 * @member {string} [flowType] Used by the Application Insights system to
 * determine what kind of flow this component was created by. This is to be set
 * to 'Bluefield' when creating/updating a component via the REST API. Possible
 * values include: 'Bluefield'. Default value: 'Bluefield' .
 * @member {string} [requestSource] Describes what tool created this
 * Application Insights component. Customers using this API should set this to
 * the default 'rest'. Possible values include: 'rest'. Default value: 'rest' .
 * @member {string} [instrumentationKey] Application Insights Instrumentation
 * key. A read-only value that applications can use to identify the destination
 * for all telemetry sent to Azure Application Insights. This value will be
 * supplied upon construction of each new Application Insights component.
 * @member {date} [creationDate] Creation Date for the Application Insights
 * component, in ISO 8601 format.
 * @member {string} [tenantId] Azure Tenant Id.
 * @member {string} [hockeyAppId] The unique application ID created when a new
 * application is added to HockeyApp, used for communications with HockeyApp.
 * @member {string} [hockeyAppToken] Token used to authenticate communications
 * with between Application Insights and HockeyApp.
 * @member {string} [provisioningState] Current state of this component:
 * whether or not is has been provisioned within the resource group it is
 * defined. Users cannot change this value but are able to read from it. Values
 * will include Succeeded, Deploying, Canceled, and Failed.
 * @member {number} [samplingPercentage] Percentage of the data produced by the
 * application being monitored that is being sampled for Application Insights
 * telemetry.
 */
export interface ApplicationInsightsComponent extends Resource {
  kind: string;
  readonly applicationId?: string;
  readonly appId?: string;
  applicationType: string;
  flowType?: string;
  requestSource?: string;
  readonly instrumentationKey?: string;
  readonly creationDate?: Date;
  readonly tenantId?: string;
  hockeyAppId?: string;
  readonly hockeyAppToken?: string;
  readonly provisioningState?: string;
  samplingPercentage?: number;
}

/**
 * @class
 * Initializes a new instance of the ComponentPurgeBodyFilters class.
 * @constructor
 * User-defined filters to return data which will be purged from the table.
 *
 * @member {string} [column] The column of the table over which the given query
 * should run
 * @member {string} [filter] A query to to run over the provided table and
 * column to purge the corresponding data.
 */
export interface ComponentPurgeBodyFilters {
  column?: string;
  filter?: string;
}

/**
 * @class
 * Initializes a new instance of the ComponentPurgeBody class.
 * @constructor
 * Describes the body of a purge request for an App Insights component
 *
 * @member {string} table Table from which to purge data.
 * @member {array} filters The set of columns and filters (queries) to run over
 * them to purge the resulting data.
 */
export interface ComponentPurgeBody {
  table: string;
  filters: ComponentPurgeBodyFilters[];
}

/**
 * @class
 * Initializes a new instance of the ComponentPurgeResponse class.
 * @constructor
 * Response containing operationId for a specific purge action.
 *
 * @member {string} operationId Id to use when querying for status for a
 * particular purge operation.
 */
export interface ComponentPurgeResponse {
  operationId: string;
}

/**
 * @class
 * Initializes a new instance of the ComponentPurgeStatusResponse class.
 * @constructor
 * Response containing status for a specific purge operation.
 *
 * @member {string} status Status of the operation represented by the requested
 * Id. Possible values include: 'Pending', 'Completed'
 */
export interface ComponentPurgeStatusResponse {
  status: string;
}

/**
 * @class
 * Initializes a new instance of the WorkItemConfiguration class.
 * @constructor
 * Work item configuration associated with an application insights resource.
 *
 * @member {string} [connectorId] Connector identifier where work item is
 * created
 * @member {string} [configDisplayName] Configuration friendly name
 * @member {boolean} [isDefault] Boolean value indicating whether configuration
 * is default
 * @member {string} [id] Unique Id for work item
 * @member {string} [configProperties] Serialized JSON object for detailed
 * properties
 */
export interface WorkItemConfiguration {
  connectorId?: string;
  configDisplayName?: string;
  isDefault?: boolean;
  id?: string;
  configProperties?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkItemCreateConfiguration class.
 * @constructor
 * Work item configuration creation payload
 *
 * @member {string} [connectorId] Unique connector id
 * @member {string} [connectorDataConfiguration] Serialized JSON object for
 * detaile d properties
 * @member {boolean} [validateOnly] Boolean indicating validate only
 * @member {string} [workItemProperties] Custom work item properties
 */
export interface WorkItemCreateConfiguration {
  connectorId?: string;
  connectorDataConfiguration?: string;
  validateOnly?: boolean;
  workItemProperties?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkItemConfigurationError class.
 * @constructor
 * Error associated with trying to get work item configuration or
 * configurations
 *
 * @member {string} [code] Error detail code and explanation
 * @member {string} [message] Error message
 * @member {object} [innererror]
 * @member {string} [innererror.diagnosticcontext] Provides correlation for
 * request
 * @member {date} [innererror.time] Request time
 */
export interface WorkItemConfigurationError {
  code?: string;
  message?: string;
  innererror?: InnerError;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentFavorite class.
 * @constructor
 * Properties that define a favorite that is associated to an Application
 * Insights component.
 *
 * @member {string} [name] The user-defined name of the favorite.
 * @member {string} [config] Configuration of this particular favorite, which
 * are driven by the Azure portal UX. Configuration data is a string containing
 * valid JSON
 * @member {string} [version] This instance's version of the data model. This
 * can change as new features are added that can be marked favorite. Current
 * examples include MetricsExplorer (ME) and Search.
 * @member {string} [favoriteId] Internally assigned unique id of the favorite
 * definition.
 * @member {string} [favoriteType] Enum indicating if this favorite definition
 * is owned by a specific user or is shared between all users with access to
 * the Application Insights component. Possible values include: 'shared',
 * 'user'
 * @member {string} [sourceType] The source of the favorite definition.
 * @member {string} [timeModified] Date and time in UTC of the last
 * modification that was made to this favorite definition.
 * @member {array} [tags] A list of 0 or more tags that are associated with
 * this favorite definition
 * @member {string} [category] Favorite category, as defined by the user at
 * creation time.
 * @member {boolean} [isGeneratedFromTemplate] Flag denoting wether or not this
 * favorite was generated from a template.
 * @member {string} [userId] Unique user id of the specific user that owns this
 * favorite.
 */
export interface ApplicationInsightsComponentFavorite {
  name?: string;
  config?: string;
  version?: string;
  readonly favoriteId?: string;
  favoriteType?: string;
  sourceType?: string;
  readonly timeModified?: string;
  tags?: string[];
  category?: string;
  isGeneratedFromTemplate?: boolean;
  readonly userId?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentWebTestLocation class.
 * @constructor
 * Properties that define a web test location available to an Application
 * Insights Component.
 *
 * @member {string} [displayName] The display name of the web test location.
 * @member {string} [tag] Internally defined geographic location tag.
 */
export interface ApplicationInsightsComponentWebTestLocation {
  readonly displayName?: string;
  readonly tag?: string;
}

/**
 * @class
 * Initializes a new instance of the WebTestGeolocation class.
 * @constructor
 * Geo-physical location to run a web test from. You must specify one or more
 * locations for the test to run from.
 *
 * @member {string} [location] Location ID for the webtest to run from.
 */
export interface WebTestGeolocation {
  location?: string;
}

/**
 * @class
 * Initializes a new instance of the WebTestPropertiesConfiguration class.
 * @constructor
 * An XML configuration specification for a WebTest.
 *
 * @member {string} [webTest] The XML specification of a WebTest to run against
 * an application.
 */
export interface WebTestPropertiesConfiguration {
  webTest?: string;
}

/**
 * @class
 * Initializes a new instance of the WebTest class.
 * @constructor
 * An Application Insights web test definition.
 *
 * @member {string} [kind] The kind of web test that this web test watches.
 * Choices are ping and multistep. Possible values include: 'ping',
 * 'multistep'. Default value: 'ping' .
 * @member {string} syntheticMonitorId Unique ID of this WebTest. This is
 * typically the same value as the Name field.
 * @member {string} webTestName User defined name if this WebTest.
 * @member {string} [description] Purpose/user defined descriptive test for
 * this WebTest.
 * @member {boolean} [enabled] Is the test actively being monitored.
 * @member {number} [frequency] Interval in seconds between test runs for this
 * WebTest. Default value is 300. Default value: 300 .
 * @member {number} [timeout] Seconds until this WebTest will timeout and fail.
 * Default value is 30. Default value: 30 .
 * @member {string} webTestKind The kind of web test this is, valid choices are
 * ping and multistep. Possible values include: 'ping', 'multistep'. Default
 * value: 'ping' .
 * @member {boolean} [retryEnabled] Allow for retries should this WebTest fail.
 * @member {array} locations A list of where to physically run the tests from
 * to give global coverage for accessibility of your application.
 * @member {object} [configuration] An XML configuration specification for a
 * WebTest.
 * @member {string} [configuration.webTest] The XML specification of a WebTest
 * to run against an application.
 * @member {string} [provisioningState] Current state of this component,
 * whether or not is has been provisioned within the resource group it is
 * defined. Users cannot change this value but are able to read from it. Values
 * will include Succeeded, Deploying, Canceled, and Failed.
 */
export interface WebTest extends Resource {
  kind?: string;
  syntheticMonitorId: string;
  webTestName: string;
  description?: string;
  enabled?: boolean;
  frequency?: number;
  timeout?: number;
  webTestKind: string;
  retryEnabled?: boolean;
  locations: WebTestGeolocation[];
  configuration?: WebTestPropertiesConfiguration;
  readonly provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the Workbook class.
 * @constructor
 * An Application Insights workbook definition.
 *
 * @member {string} [kind] The kind of workbook. Choices are user and shared.
 * Possible values include: 'user', 'shared'
 * @member {string} workbookName The user-defined name of the workbook.
 * @member {string} serializedData Configuration of this particular workbook.
 * Configuration data is a string containing valid JSON
 * @member {string} [version] This instance's version of the data model. This
 * can change as new features are added that can be marked workbook.
 * @member {string} workbookId Internally assigned unique id of the workbook
 * definition.
 * @member {string} sharedTypeKind Enum indicating if this workbook definition
 * is owned by a specific user or is shared between all users with access to
 * the Application Insights component. Possible values include: 'user',
 * 'shared'. Default value: 'shared' .
 * @member {string} [timeModified] Date and time in UTC of the last
 * modification that was made to this workbook definition.
 * @member {string} category Workbook category, as defined by the user at
 * creation time.
 * @member {array} [workbookTags] A list of 0 or more tags that are associated
 * with this workbook definition
 * @member {string} userId Unique user id of the specific user that owns this
 * workbook.
 * @member {string} [sourceResourceId] Optional resourceId for a source
 * resource.
 */
export interface Workbook extends Resource {
  kind?: string;
  workbookName: string;
  serializedData: string;
  version?: string;
  workbookId: string;
  sharedTypeKind: string;
  readonly timeModified?: string;
  category: string;
  workbookTags?: string[];
  userId: string;
  sourceResourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkbookListResult class.
 * @constructor
 * Workbook list result.
 *
 * @member {array} [value] An array of workbooks.
 */
export interface WorkbookListResult {
  value?: Workbook[];
}

/**
 * @class
 * Initializes a new instance of the ErrorFieldContract class.
 * @constructor
 * Error Field contract.
 *
 * @member {string} [code] Property level error code.
 * @member {string} [message] Human-readable representation of property-level
 * error.
 * @member {string} [target] Property name.
 */
export interface ErrorFieldContract {
  code?: string;
  message?: string;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkbookErrorResponse class.
 * @constructor
 * Error message body that will indicate why the operation failed.
 *
 * @member {string} [code] Service-defined error code. This code serves as a
 * sub-status for the HTTP error code specified in the response.
 * @member {string} [message] Human-readable representation of the error.
 * @member {array} [details] The list of invalid fields send in request, in
 * case of validation error.
 */
export interface WorkbookErrorResponse {
  code?: string;
  message?: string;
  details?: ErrorFieldContract[];
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list CDN operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentAPIKeyListResult class.
 * @constructor
 * Describes the list of API Keys of an Application Insights Component.
 *
 */
export interface ApplicationInsightsComponentAPIKeyListResult extends Array<ApplicationInsightsComponentAPIKey> {
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsComponentListResult class.
 * @constructor
 * Describes the list of Application Insights Resources.
 *
 * @member {string} [nextLink] The URI to get the next set of Application
 * Insights component defintions if too many components where returned in the
 * result set.
 */
export interface ApplicationInsightsComponentListResult extends Array<ApplicationInsightsComponent> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationInsightsWebTestLocationsListResult class.
 * @constructor
 * Describes the list of web test locations available to an Application
 * Insights Component.
 *
 */
export interface ApplicationInsightsWebTestLocationsListResult extends Array<ApplicationInsightsComponentWebTestLocation> {
}

/**
 * @class
 * Initializes a new instance of the WebTestListResult class.
 * @constructor
 * A list of 0 or more Application Insights web test definitions.
 *
 * @member {string} [nextLink] The link to get the next part of the returned
 * list of web tests, should the return set be too large for a single request.
 * May be null.
 */
export interface WebTestListResult extends Array<WebTest> {
  nextLink?: string;
}
