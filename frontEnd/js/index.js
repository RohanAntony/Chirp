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

app.controller('authController',function($scope){
  $scope.user = {
    username:'',
    password:''
  }
  $scope.error_message = "";

  $scope.login = function(){
    //perform login stuff with backend support
    $scope.error_message = 'login request for '+ $scope.user.username;
  }

  $scope.register = function(){
    //perform registration operations with backend support
    $scope.error_message = 'registration request for '+ $scope.user.username;
  }

})
