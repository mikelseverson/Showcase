'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl($scope, UserService) {
    var vm = this;

    $scope.signupParams = {
      username : null,
      password : null,
      passwordConfirm: null
    };

    $scope.submit = () => {
      var params = $scope.signupParams;
      if(params.username == null || params.password == null) {
        return;
      }
      else if (params.password !== params.passwordConfirm) {
        return;
      }
      else {
        UserService.createUser(params)
      }
    }
}
