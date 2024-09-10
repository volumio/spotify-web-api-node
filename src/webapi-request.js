'use strict';

var Request = require('./base-request');

var DEFAULT_HOST = 'api.spotify.com',
  DEFAULT_PORT = 443,
  DEFAULT_SCHEME = 'https';

let defaultHeaders = null;

module.exports.builder = function(accessToken) {
  return Request.builder()
    .withHost(DEFAULT_HOST)
    .withPort(DEFAULT_PORT)
    .withScheme(DEFAULT_SCHEME)
    .withHeaders(defaultHeaders)
    .withAuth(accessToken);
};

module.exports.setDefaultHeaders = function(headers) {
  defaultHeaders = headers;
}
