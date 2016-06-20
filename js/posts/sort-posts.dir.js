(function() {
  angular.module('simpleRedditClone').directive('dirSortPosts', dirSortPosts);

  function dirSortPosts() {
    var directive = {
      templateUrl: 'js/posts/sort-posts.html'
    }

    return directive;
  }
})();
