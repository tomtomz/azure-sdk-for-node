// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"subscriptionId\":\"3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"displayName\":\"AzSdkCore1\",\"state\":\"Enabled\",\"subscriptionPolicies\":{\"locationPlacementId\":\"Public_2014-09-01\",\"quotaId\":\"PayAsYouGo_2014-09-01\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '274',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': 'defd1125-ba1d-416a-973e-ab2a52e1a757',
  'x-ms-correlation-request-id': 'defd1125-ba1d-416a-973e-ab2a52e1a757',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:defd1125-ba1d-416a-973e-ab2a52e1a757',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"subscriptionId\":\"3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"displayName\":\"AzSdkCore1\",\"state\":\"Enabled\",\"subscriptionPolicies\":{\"locationPlacementId\":\"Public_2014-09-01\",\"quotaId\":\"PayAsYouGo_2014-09-01\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '274',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': 'defd1125-ba1d-416a-973e-ab2a52e1a757',
  'x-ms-correlation-request-id': 'defd1125-ba1d-416a-973e-ab2a52e1a757',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:defd1125-ba1d-416a-973e-ab2a52e1a757',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:11 GMT',
  connection: 'close' });
 return result; }]];