(function() {
  angular.module('simpleRedditClone').directive('dirPosts', dirPosts);

  function dirPosts() {
    var directive = {
      templateUrl: 'js/posts/posts.html'
    }

    return directive;
  }
})();
