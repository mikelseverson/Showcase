'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.login', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .factory('UserService', require('../showcase/services/UserService'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .name;
