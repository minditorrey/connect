'use strict';

var app = angular.module('likeItApp');

app.controller('profileCtrl', function() {
  console.log('profileCtrl!');
});

app.controller('mainCtrl', function($scope, $state, Auth) {

  $scope.$watch(function() {
    return Auth.currentUser;
  }, function(newVal, oldVal) {
    $scope.currentUser = newVal;
  });

  $scope.logout = () => {
    Auth.logout()
      .then(res => {
        $state.go('home');
      })
  }

});

app.controller('homeCtrl', function($scope, PostSvc) {
	$scope.posts = [];
	$scope.submitPost = function(thisPost) {
		PostSvc.create($scope.thisPost);
		console.log(thisPost);
		$scope.posts.push($scope.thisPost);
		// $scope.saveChanges();
		$scope.thisPost = "null";
	};
	PostSvc.getAll($scope.posts)
		.then(res => {
			$scope.posts = res.data;
			var posts = $scope.posts;
		})

	$scope.removePost = function(post) {
        PostSvc.removePost(post);
        $scope.posts.splice(0, 1);
        location.reload;
    }

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

    $scope.likes = "";
    $scope.likePost = (post) => {
    	$scope.likes ++;
    }

});



app.controller('authFormCtrl', function($scope, $state, Auth) {
  console.log('authFormCtrl!');

  $scope.currentState = $state.current.name;

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
