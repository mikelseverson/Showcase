'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl($scope, UserService) {
  var vm = this;

  $scope.loginParams = {
     username: null,
     password: null
   };

  vm.login = function() {
    var params = $scope.loginParams;

    if(params.username === null || params.password === null) {
      alert('Please enter a username and a password');
    }
    else {
      UserService.login(params);
    }
  };
}
