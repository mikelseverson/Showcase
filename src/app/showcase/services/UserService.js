'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService($state) {
  var loggedIn = false;
  var userDB = [
    { username: 'bookbottles',
      password: 'showcase' }
    ];
  var UserService = {
        login: login,
        logout: logout,
        createUser: createUser,
        checkStatus: checkStatus
  };

  return UserService;

  /**
  * Redirects to home if user is not logged in
  */
  function checkStatus() {
    if (loggedIn === false) {
      $state.go('home');
    }
    else {
      $state.go('dashboard');
    }
  }

  /**
   * Checks for unique username, and checks password confirmation
   * Adds user to userDB array
   * Redirect to dashboard
   * @param newUser
   */
   function createUser(newUser) {
      for (var i = 0; i < userDB.length; i++) {
          if (newUser.username === userDB[i].username) {
            alert('This username is already in use');
            return;
          }
      }
      userDB.push(newUser);
      loggedIn = true;
      $state.go('dashboard');
  }

  /**
   * Validate username / Password on login
   * @param loginParams
   */
  function login(loginParams) {
      for (var i = 0; i < userDB.length; i++) {
          if (loginParams.username === userDB[i].username
            && loginParams.password === userDB[i].password) {
              loggedIn = true;
              $state.go('dashboard');
              return;
          }
      }
      alert('Username / Password not found.');
  }

  /**
   * Logs user out
   * Redirects to home
   */
  function logout() {
    loggedIn = false;
    $state.go('home');
  }
}
