(function() {
  angular
  .module('simpleRedditClone')
  .directive('dirNewPost', dirNewPost);

  function dirNewPost() {
    var directive = {
      templateUrl: 'js/posts/new-post.html'
    }

    return directive;
    
  }
})();
