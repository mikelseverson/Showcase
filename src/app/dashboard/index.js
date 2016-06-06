'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.dashboard', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .directive('articleCard', require('./directives/article-card'))
    .factory('DataService', require('./services/DataService'))
    .factory('UserService', require('../showcase/services/UserService'))
    .name;
