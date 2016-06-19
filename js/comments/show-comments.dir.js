(function() {
  angular
  .module('simpleRedditClone')
  .directive('dirShowComments', dirShowComments);

  function dirShowComments() {
    var directive = {
      templateUrl: 'js/comments/show-comments.html'
    }

    return directive;
    
  }
})();
