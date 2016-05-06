'use strict';

var redditCloneCtrl = angular.module('redditCloneCtrl', []);



redditCloneCtrl.controller('loadPageCtrl', ['$scope',

  function($scope) {

    var calendarParameters = {
      sameDay: '[Today] MM/DD/YYYY',
      nextDay: '[Tomorrow] MM/DD/YYYY',
      nextWeek: 'dddd',
      lastDay: '[Yesterday] MM/DD/YYYY',
      lastWeek: '[Last] dddd',
      sameElse: 'MM/DD/YYYY'
    }

    $scope.vote = function(post, dir) {
      dir === 'up' ? post.vote +=1 : post.vote -=1 ;
    }


    $scope.posts = [
      {
        id: 0,
        title: 'the best Jimmy Eat World song',
        author: 'Erica Surrey',
        img: 'http://i.imgur.com/C3WIWj8.jpg',
        description: "On sleepless roads, the sleepless go. Then be happy with the consequence. Don't think we're not serious. woh oh oh oh oh oh. Get out of this place while we still have time. I won't always love these selfish things. woh oh oh oh oh oh. No one else will know these lonely dreams. Clear your thoughts with speyside. That once we said goodbye. I felt for sure last night. If you only once would let me. (string from your tether unwinds). (when words lose their meaning). Our coal",
        vote: 4,
        date: moment.unix(1462456413).calendar(null, calendarParameters),
        comments: [
          {
            post_id: 0,
            author: 'Mike Carol',
            comment: 'I believe the inspiration for this song was a time the band fought a bear, i could be wrong tho..',
            time: moment.unix(1462516226).calendar(null, calendarParameters),
            vote: -2
          }
        ]
      }
    ];

    $scope.timestamps = [
      {
        id: 0,
        date: 1462515998
      }
    ];

    $scope.commentForm = false;
    $scope.newComment = {};

    $scope.postComment = function(post, newComment) {
      var timestamp = Date.now();
      $scope.newComment.date = moment.unix(timestamp).calendar(null, calendarParameters);
      $scope.newComment.vote = 0;
      $scope.newComment.id = ((Math.random()*1000000)+timestamp);
      post.comments.push(newComment);
    };

  }]);
