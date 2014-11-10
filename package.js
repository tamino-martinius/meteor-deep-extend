Package.describe({
    summary: 'Recursive object extending.'
});

Package.on_use(function (api) {
  if (api.export) api.export("deepExtend");
  api.add_files('extend.js',['client', 'server']);
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'deep-extend',
    'test-helpers',
    'tinytest'
  ], ['client', 'server']);
  api.add_files('extend-test.coffee',['client', 'server']);
});
