// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor/register?api-version=2014-08-01-preview')
  .reply(200, "{\"name\":\"Microsoft.Sql/IndexAdvisor\",\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:6b3f9a2a-14e6-4458-b23f-7db1c69201a3',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd0300af7-a072-4b39-adf1-aa985b3d14c4',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:d0300af7-a072-4b39-adf1-aa985b3d14c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor/register?api-version=2014-08-01-preview')
  .reply(200, "{\"name\":\"Microsoft.Sql/IndexAdvisor\",\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:6b3f9a2a-14e6-4458-b23f-7db1c69201a3',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd0300af7-a072-4b39-adf1-aa985b3d14c4',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:d0300af7-a072-4b39-adf1-aa985b3d14c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:10 GMT',
  connection: 'close' });
 return result; }]];