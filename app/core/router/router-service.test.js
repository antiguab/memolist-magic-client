// 'use strict';
// /*jshint -W030 */
// /* global R,Q*/
//
// describe('router service', function () {
//   var router, _currentState;
//
//   beforeEach(module('imclient.core.router'));
//
//   beforeEach(module(function ($provide) {
//     $provide.service('$state', function () {
//       return {
//         go : function(state,params){
//           _currentState = {
//             state:state,
//             params : params
//           };
//           return Q.when();
//         }
//       };
//     });
//   }));
//
//   beforeEach(function () {
//     inject(function ($injector) {
//       router = $injector.get('router');
//     });
//   });
//
//   it('should exist',function(){
//     expect(router).to.be.an('Object');
//     expect(router.directToPage).to.be.a('function');
//   });
//
//   it('should go to a state with the initialized params',function(){
//     var goToState = router.directToPage('state', {param:1} );
//     goToState();
//     expect(_currentState).to.deep.equal({state:'state',params:{param:1} });
//   });
//
//   it('should go to a state with the passed params',function(){
//     var goToState = router.directToPage('state',{param:1});
//     goToState({param:2});
//     expect(_currentState).to.deep.equal({state:'state',params:{param:2}});
//   });
// });
