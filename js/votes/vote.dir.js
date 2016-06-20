(function() {
  angular.module('simpleRedditClone').directive('dirVote', dirVote);

  function dirVote() {
    directive = {
      templateUrl : 'js/votes/vote.html',
      scope: {
        obj: '=',
        dir: '='
      }
    }

    return directive;
  }
})();
