module.exports = {

  // Javascript
  JS_FILES: [
    'js/foundation.core.js',
    'js/foundation.util.*.js',
    'js/*.js',
    'bower_components/jquery-mousewheel/jquery.mousewheel.js',
    'bower_components/flickity/dist/flickity.pkgd.js'
  ],

  JS_DEPS: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/motion-ui/dist/motion-ui.js',
    'node_modules/what-input/dist/what-input.js'
  ],

  JS_DOCS: [
    'node_modules/clipboard/dist/clipboard.js',
    'node_modules/corejs-typeahead/dist/typeahead.bundle.js',
    'node_modules/tbg-foundation-docs/js/**/*.js',
    'docs/assets/js/docs.*.js',
    'docs/assets/js/docs.js'
  ],

  // Sass
  SASS_DEPS_FILES: [
    'node_modules/@(normalize-scss)/sass/**/*.scss',
    'node_modules/@(sassy-lists)/stylesheets/helpers/_missing-dependencies.scss',
    'node_modules/@(sassy-lists)/stylesheets/helpers/_true.scss',
    'node_modules/@(sassy-lists)/stylesheets/functions/_purge.scss',
    'node_modules/@(sassy-lists)/stylesheets/functions/_remove.scss',
    'node_modules/@(sassy-lists)/stylesheets/functions/_replace.scss',
    'node_modules/@(sassy-lists)/stylesheets/functions/_to-list.scss'
  ],

  SASS_DOC_PATHS: [
    'scss',
    'node_modules/motion-ui/src',
    'node_modules/tbg-foundation-docs/scss'
  ],

  SASS_LINT_FILES: [
    'scss/**/*.scss',
  ],

  CSS_COMPATIBILITY: [
    'last 2 versions',
    'ie >= 9',
    'Android >= 2.3',
    'ios >= 7'
  ],

  // Assets
  ASSETS_FILES: [
    'docs/assets/**/*',
    '!docs/assets/{js,scss}',
    '!docs/assets/{js,scss}/**/*'
  ],

  // Dist
  VERSIONED_FILES: [
    'bower.json',
    'composer.json',
    'docs/pages/installation.md',
    'js/foundation.core.js',
    'meteor-README.md',
    'package.js',
    'package.json',
    'scss/foundation.scss'
  ],

  DIST_FILES: [
    './_build/assets/css/foundation.css',
    './_build/assets/css/foundation-flex.css',
    './_build/assets/css/foundation-rtl.css',
    '_build/assets/js/foundation.js'
  ],

  // Tests
  TEST_JS_FILES: [
    'test/javascript/components/**/*.js',
    'test/javascript/util/**/*.js'
  ]
};
