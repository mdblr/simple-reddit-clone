'use strict';

var redditCloneCtrl = angular.module('redditCloneCtrl', []);

redditCloneCtrl.controller('loadPageCtrl', ['$scope',

  function($scope) {

    $scope.orderProp = '-vote';

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
        date: [new Date(1462456413), moment.unix(1462456413).calendar(null, calendarParameters)],
        comments: [
          {
            post_id: 0,
            author: 'Mike Carol',
            comment: 'I believe the inspiration for this song was a time the band fought a bear, i could be wrong tho..',
            time: moment.unix(1462516226).calendar(null, calendarParameters),
            vote: -2
          }
        ]
      },
      {
        id: 1,
        title: "please don't headbang on the bust",
        author: 'James Masir',
        img: 'http://blog.iavm.org/wp-content/uploads/2014/07/headbanging.gif',
        description: "The last thing I wan't after a long day is to get whipped in the face with your nasty-ass hair",
        vote: -1,
        date: [new Date(1462573531), moment.unix(1462573531).calendar(null, calendarParameters)],
        comments: [
          {
            post_id: 0,
            author: 'Hillary Peterson',
            comment: '666',
            time: moment.unix(1462514116).calendar(null, calendarParameters),
            vote: 666
          },
          {
            post_id: 0,
            author: 'Briane White',
            comment: 'can you describe what their hair was like?',
            time: moment.unix(1462501116).calendar(null, calendarParameters),
            vote: 22
          }
        ]
      },
      {
        id: 2,
        title: 'RDGLDGRN',
        author: 'Marcus Kim',
        img: 'http://49.media.tumblr.com/3507ca77d500eec0ca2e3f133fd324d4/tumblr_mkgli9QcZ71qc64uno1_r1_1280.gif',
        description: "these dudes are legit: https://www.youtube.com/watch?v=tuPcTYWfKI4",
        vote: 12,
        date: [new Date(1461974400), moment.unix(1461974400).calendar(null, calendarParameters)],
        comments: [
          {
            post_id: 0,
            author: 'Treasure Weekly',
            comment: 'BOYS REPRESENTIN DC <3 YALL',
            time: moment.unix(1461974500).calendar(null, calendarParameters),
            vote: -2
          }
        ]
      }
    ];

    $scope.showComments = false;
    $scope.commentForm = false;
    $scope.hidePostForm = false;
    $scope.newComment = {};

    $scope.postComment = function(post, newComment) {
      var timestamp = Date.now();
      $scope.newComment.time = moment().calendar(null, calendarParameters);
      $scope.newComment.vote = 0;
      $scope.newComment.id = ((Math.random()*1000000)+timestamp);
      post.comments.push(newComment);
    };

    $scope.newPost = {};
    $scope.postPost = function(newPost) {
      var timestamp = moment().calendar;
      $scope.newPost.author = 'tupac';
      $scope.newPost.date = [new Date(), moment().calendar(null, calendarParameters)];
      $scope.newPost.vote = 0;
      $scope.newPost.id = ((Math.random()*1000000)+timestamp);
      console.log($scope.newPost)
      $scope.posts.push(newPost);
    }

  }]);
