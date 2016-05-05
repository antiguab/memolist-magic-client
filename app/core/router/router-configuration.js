'use strict';

angular.module('memolistMagic.core.router')
  /**
  * Sets up the configuration for the router
  */
  .config(
    ["ROUTES", "$stateProvider", "$urlRouterProvider", function routerConfig(ROUTES, $stateProvider, $urlRouterProvider) {

      var states = [];

      /**
       * View1 view
       */
       var view1Views = {};
       view1Views[ROUTES.VIEW1_PAGE] = {
         templateUrl: 'sections/view1/view1.html',
         controller: 'View1Ctrl'
       };

       states.push({
         name: ROUTES.VIEW1_PAGE,
         url: '/view1',
         views: view1Views
       });

       /**
        * View2 view
        */
        var view2Views = {};
        view2Views[ROUTES.VIEW2_PAGE] = {
          templateUrl: 'sections/view2/view2.html',
          controller: 'View2Ctrl'
        };

        states.push({
          name: ROUTES.VIEW2_PAGE,
          url: '/view2',
          views: view2Views
        });

      /**
       * UI routes initialization
       */
      angular.forEach(states, function (state) {
        $stateProvider.state(state);
      });

      $urlRouterProvider.otherwise('/view1');

    }]
  );
