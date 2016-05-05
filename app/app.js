'use strict';

// Declare app level module which depends on views, and components
angular.module('memolistMagic', [
  'ngRoute',
  'memolistMagic.view1',
  'memolistMagic.view2',
  'memolistMagic.version'
])
.run(["$state", "ROUTES", function($state,ROUTES){
    return $state.go(ROUTES.VIEW1_PAGE);
}]);
