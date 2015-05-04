Package.describe({
  name: 'sinda:easy-check',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary : "Easy-check package moved from meteorite to meteor. All credits to creator of this package - matteodem",
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/easy-check.js', ['client', 'server']);

  api.export('EasyCheck');
});
