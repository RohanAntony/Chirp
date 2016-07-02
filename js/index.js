var app = angular.module('chirp',[]);

app.controller('mainController',function($scope){
  $scope.posts = [];
  $scope.newPost = {
    created_by:'',
    text:'',
    created_at:''
  };

  $scope.post = function(){
    $scope.newPost.created_at = new Date().toUTCString();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {
      created_by:'',
      text:'',
      created_at:''
    };
  };
});
