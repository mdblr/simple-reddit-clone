(function() {
  'use strict';

  angular
  .module('simpleRedditClone')
  .directive('dirAddComment', dirAddComment);

  function dirAddComment() {

    var directive = {
      templateUrl: 'js/comments/add-comment.html'
    }

    return directive;
  }

})();
