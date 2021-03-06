/**
 * Plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.plugins.noneditable.Plugin',
  [
    'tinymce.core.PluginManager',
    'tinymce.plugins.noneditable.core.FilterContent'
  ],
  function (PluginManager, FilterContent) {
    PluginManager.add('noneditable', function (editor) {
      FilterContent.setup(editor);
    });

    return function () { };
  }
);