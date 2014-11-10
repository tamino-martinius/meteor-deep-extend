Package.describe({
  name: 'zaku:deep-extend',
  summary: 'Recursive object extending.',
  version: '0.9.0',
  git: 'https://github.com/Zaku-eu/meteor-deep-extend.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('zaku:deep-extend.js');
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'zaku:deep-extend',
    'test-helpers',
    'tinytest'
  ], ['client', 'server']);
  api.add_files('zaku:deep-extend-tests.coffee',['client', 'server']);
});
