// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155/purge?api-version=2017-10-12', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"invalidPath!\\\". ContentPath for purge action must be a relative path: either for a single resource \\\"/path/pic.jpg\\\" or a wild card \\\"/path/*\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '235',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '0ca2eb60-0224-4d03-994b-291339ca0f8c',
  'x-ms-client-request-id': '3495b2f4-2665-4b6f-b676-1be4aa2730cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2a0e1bad-de64-455b-954d-2e250aee42fe',
  'x-ms-routing-request-id': 'WESTUS2:20180226T194749Z:2a0e1bad-de64-455b-954d-2e250aee42fe',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:47:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155/purge?api-version=2017-10-12', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"invalidPath!\\\". ContentPath for purge action must be a relative path: either for a single resource \\\"/path/pic.jpg\\\" or a wild card \\\"/path/*\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '235',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '0ca2eb60-0224-4d03-994b-291339ca0f8c',
  'x-ms-client-request-id': '3495b2f4-2665-4b6f-b676-1be4aa2730cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2a0e1bad-de64-455b-954d-2e250aee42fe',
  'x-ms-routing-request-id': 'WESTUS2:20180226T194749Z:2a0e1bad-de64-455b-954d-2e250aee42fe',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:47:48 GMT',
  connection: 'close' });
 return result; }]];