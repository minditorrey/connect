'use strict';

var app = angular.module('facePageApp');

app.controller('profileCtrl', function($scope, ProfileSvc) {


  $scope.profileForm = true;

    $scope.showProfileForm = function(){
      $scope.profileForm = true;  
    };

  $scope.showProfileForm = function() {
    if($scope.profileForm = false) {
      $scope.profileForm = true;  
    } else {
      $scope.profileForm = false;
    };
  };

  $scope.profiles = [];
  $scope.saveProfileForm = function(thisProfileEdit) {
    ProfileSvc.create($scope.thisProfileEdit);
    console.log($scope.thisProfileEdit);
    $scope.thisProfile = $scope.thisProfileEdit;  
    $scope.profiles.push($scope.thisProfileEdit);
    $scope.updateUser();
    $scope.thisProfileEdit = "null";
    $scope.profileForm = true;
    
  }
 
  $scope.updateUser = () => {
    ProfileSvc.update($scope.thisProfileEdit)
      .then(res => {
        $scope.users.forEach((user, i) => {
          if(user._id === res.data._id) {
            $scope.users[i] = res.data;
          }
        })
      })


  }

  console.log('profileCtrl!');
});

app.controller('mainCtrl', function($scope, $state, Auth, $auth) {

  // $scope.$watch(function() {
  //   return Auth.currentUser;
  // }, function(newVal, oldVal) {
  //   $scope.currentUser = newVal;
  // });

  $scope.logout = () => {
    $auth.logout();
  }

  $scope.isAuthenticated = () => {
    // return $auth.isAuthenticated();
  }

});

app.controller('homeCtrl', function($scope) {
	// $scope.posts = [];
	// $scope.submitPost = function(thisPost) {
	// 	PostSvc.create($scope.thisPost);
	// 	console.log(thisPost);
	// 	$scope.posts.push($scope.thisPost);
	// 	// $scope.saveChanges();
	// 	$scope.thisPost = "null";
	// };
	// PostSvc.getAll($scope.posts)
	// 	.then(res => {
	// 		$scope.posts = res.data;
	// 		var posts = $scope.posts;
	// 	})

	// $scope.removePost = function(post) {
 //        PostSvc.removePost(post);
 //        $scope.posts.splice(0, 1);
 //        location.reload;
 //    }

	// $scope.editPost = (post) => {
 //        $scope.thisPost = angular.copy(post);
 //        PostSvc.update($scope.thisPost)
 //        .then(res => {
 //            $scope.posts.forEach((post, i) => {
 //                if(post._id === res.data._id) {
 //                    $scope.post[i] = res.data;
 //                }
 //            })
 //            $scope.thisPost = null;
 //        })
 //    }

    // $scope.likes = "";
    // $scope.likePost = (post) => {
    // $scope.likes ++;
    // }

});



app.controller('authFormCtrl', function($scope, $state, Auth, $auth) {
  console.log('authFormCtrl!');

  $scope.currentState = $state.current.name;

  $scope.authenticate = provider => {
    $auth.authenticate(provider);

  };


  $scope.submitForm = () => {
    if($scope.currentState === 'register') {

      // register user
      if($scope.user.password !== $scope.user.password2) {
        
        $scope.user.password = '';
        $scope.user.password2 = '';
        
        alert('Passwords must match.')
      } else {
        Auth.register($scope.user)
          .then(res => {
            return Auth.login($scope.user);
          })
          .then(res => {
            $state.go('home');
          })
          .catch(res => {
            alert(res.data.error);
          });
      }
    } else {
      Auth.login($scope.user)
        .then(res => {
          $state.go('home');
        })
        .catch(res => {
          alert(res.data.error);
        })
    }
  };

});