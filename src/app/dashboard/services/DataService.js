'use strict';

module.exports = DataService;

/**
 * @ngInject
 */
function DataService($http) {
  var DataService = {
      getArticleIds: getArticleIds,
      populateArticle: populateArticle,
      getArticles: getArticles
  };

  var articleDB = [];

  return DataService;

  /**
   * Calls API to get ids of articles from hacker news
   * @param amount of articles
   */
  function getArticleIds(amount) {
      var articleIds = [];
      var promise = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
          .then(function(response) {
              articleIds = response.data;
               for (var i = 0; i < amount; i++) {
                   populateArticle(articleIds[i]);
               }
          });
      return promise;
  }

  /**
   * Consumes articleId, requests article data
   * Once data is received, adds article to array
   * @param articleId i.e "538475"
   */
  function populateArticle(articleId) {
    $http.get('https://hacker-news.firebaseio.com/v0/item/' + articleId + '.json')
        .then(function(response) {
            articleDB.push(response.data);
          });
  }

  function getArticles() {
    return articleDB;
  }
}
