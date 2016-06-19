'use strict';

angular
  .module('simpleRedditClone')
  .controller('loadPageCtrl', loadPageCtrl);

loadPageCtrl.$inject = ['PostFactory'];

function loadPageCtrl(PostFactory) {

  var vm = this;
  vm.orderProp = 'sort';
  vm.vote = function(post, dir) {
    dir === 'up' ? post.vote +=1 : post.vote -=1 ;
  }

  vm.showComments = false;
  vm.commentForm = false;
  vm.hidePostForm = false;
  vm.newComment = {};


  vm.posts = PostFactory.getPosts();

  var Comment = function(newComment) {
    var timestamp = Date.now();
    this.author = newComment.author;
    this.comment = newComment.comment;
    this.time= moment().calendar(null, PostFactory.calendarParameters);
    this.vote= 0;
    this.id = Math.random()*1000000+timestamp;
  }

  var Post = function(newPost) {
    this.author = 'tupac';
    this.title = newPost.title;
    this.description = newPost.description;
    this.img = newPost.img;
    this.date = [new Date(), moment().calendar(null, PostFactory.calendarParameters)];
    this.vote= 0;
    this.comments = [];
  }

  vm.postComment = function(post, newComment) {
    if (!newComment.comment.trim() || !newComment.author.trim()) {
      return false;
      vm.newComment = {};
      vm.newComment.$setPristine();
    }
    post.comments.push(new Comment(newComment));
    vm.newComment = {};
  };

  vm.postPost = function(newPost) {
    vm.posts.push(new Post(newPost));
    vm.newPost = {};
    vm.createPost.$setPristine();
  }

}
