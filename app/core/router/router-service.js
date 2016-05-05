'use strict';

angular.module('memolistMagic.core.router')
  /**
  * factory used to switch between pages
  */
  .factory(
    'router',
    ["$state", function router($state) {

      /**
       * Router re-direct page function
       * @param state The route state to be directed to
       * @parma parameters The route state parameters passed in
       * @returns {Function}
       */
      function directToPage(state, parameters) {
        return function _directToPage (_parameters) {
          _parameters = typeof _parameters === 'undefined' || _parameters === null ? parameters : _parameters;
          return $state.go(state, _parameters);
        };
      }

      return {
        /**
        * This is used to switch pages
        */
        directToPage: directToPage
      };
    }]
  );
