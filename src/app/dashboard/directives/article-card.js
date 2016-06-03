'use strict';

module.exports = articleCard;

/**
 * Directive displays article results from API as card
 */
function articleCard() {
    return {
        transclude: true,
        template:
        '<a ng-href="{{article.url}}" target="_blank"' +
          '<div class="card">' +
            '<div class="card-block">' +
              '<h3>{{article.title}}</h3>' +
              '<p>{{article.url}}</p>' +
            '</div>' +
          '</div>' +
        '</a>',
        restrict: 'AEC'
    };
}
