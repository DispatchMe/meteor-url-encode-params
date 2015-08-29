Package.describe({
  name: 'dispatch:url-encode-params',
  version: '1.0.0',
  summary: 'Fixes the Meteor core url package to encode params with nested objects properly'
});

Package.onUse(function (api) {
  api.use([
    'url',
  ], ['server', 'client']);

  api.imply(['url']);

  api.addFiles([
    'lib.js'
  ], ['server', 'client']);
});

Package.onTest(function (api) {
  api.use([
    'sanjo:jasmine@0.16.4',
    'dispatch:url-encode-params'
  ], ['server', 'client']);

  api.addFiles([
    'tests.js'
  ], ['server', 'client']);
});
