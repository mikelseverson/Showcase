'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl($scope, UserService) {

  $scope.loginParams = {
     username: null,
     password: null
   };

  $scope.submitForm = function() {
    var params = $scope.loginParams;
    if(params.username === null || params.password === null) {
      return;
    }
    else {
      UserService.login(params);
    }
  };
}
