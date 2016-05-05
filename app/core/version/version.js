'use strict';

angular.module('memolistMagic.version', [
  'memolistMagic.version.interpolate-filter',
  'memolistMagic.version.version-directive'
])

.value('version', '0.1');
