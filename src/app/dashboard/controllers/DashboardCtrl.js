'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl($scope, DataService, UserService) {
   var vm = this;
   $scope.articles = [];

   /**
    * Check if user is logged in
    */
   UserService.checkStatus();

    /**
     * API requests
     * @param number of articles to fetch
     */
    DataService.getArticleIds(16)
     .then(function() {
        $scope.articles = DataService.getArticles();
    });

    /**
     * logout button
     */
    vm.logout = UserService.logout;

}
