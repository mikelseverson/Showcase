'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl($scope, UserService) {
    var vm = this;

    $scope.signupParams = {
      username: null,
      password: null,
      passwordConfirm: null
    };

    vm.signup = function() {
      var params = $scope.signupParams;
      if(params.username === null || params.password === null) {
        alert('Please enter a username and password');
      }
      else if (params.password !== params.passwordConfirm) {
        alert('Passwords don\'t match');
      }
      else {
        UserService.createUser(params);
      }
    };
}
