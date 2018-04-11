Package.describe({
  name: 'zaku:deep-extend',
  summary: 'Recursive object extending.',
  version: '0.9.1',
  git: 'https://github.com/tamino-martinius/meteor-deep-extend.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'ecmascript@0.9.0'
  ], ['client', 'server']);
  api.addFiles('zaku:deep-extend.js');
  if (api.export) api.export('deepExtend');
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'zaku:deep-extend',
    'test-helpers',
    'tinytest'
  ], ['client', 'server']);
  api.add_files('zaku:deep-extend-tests.coffee', ['client', 'server']);
});
