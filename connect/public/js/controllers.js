'use strict';

var app = angular.module('connectApp');

app.controller('checkInsController', function($scope, CheckInService) {
    console.log('checkInsCtrl!');

    CheckInService.getAll()
    .then(res => {
        $scope.checkIns = res.data;
        var checkIns = $scope.checkIns;
        console.log(checkIns);
    })
    .catch(err => {
        console.log('err:', err);
    });
});

app.controller('homeController', function($scope, CheckInService) {
    console.log('homeCtrl!');

    CheckInService.getAll()
    .then(res => {
        $scope.checkIns = res.data;
        var checkIns = $scope.checkIns;
 
    })
    .catch(err => {
        console.log('err:', err);
    });

	$scope.addCheckIn = function(checkInEdit) {
	    CheckInService.create($scope.checkInEdit);
	    $scope.checkIns.push($scope.checkInEdit);
	    console.log('checkInEdit:', $scope.checkInEdit)
	    $scope.checkInEdit = null;
	    $scope.checkInForm = true;
	}

    $scope.checkInForm = true;

    $scope.showCheckInForm = function() {
      $checkInForm = true;
  	}

  	$scope.showCheckInForm = function() {
    	if($scope.checkInForm = false) {
    		$scope.checkInForm = true;  
		} else {
    		$scope.checkInForm = false;
		};
	};

    $scope.editCheckIn = (checkIn) => {
        $scope.checkInEdit = checkIn;
        $scope.showCheckInForm(); 
        $scope.editedCheckIn = angular.copy(checkIn); 
    }

    $scope.saveChanges = (checkInEdit) => {
   // console.log(thisAuctionEdit)
        CheckInService.update(checkInEdit) 	
        .then(res => {
            $scope.checkIns.forEach((checkIn, i) => {
                if(checkIn._id === res.data._id) {
                $scope.checkIns[i] = res.data;
                }
            })

       $scope.checkIns.push($scope.checkInEdit);
       $scope.checkInEdit = null;

        })
    }

    $scope.cancelEdit = () => {
        $scope.checkInEdit = null;
        $scope.checkInForm = true;  

    };

});

app.controller('profilesController', function($scope, $state, $rootScope) {
    console.log('profileCtrl!');
    console.log('user:', $scope.user);

    var username = $rootScope.user.username;
    console.log('username', username);
    $scope.user = $rootScope.user;
    $scope.profilePic = $rootScope.user.customData.profilePic;

  });

app.controller('detailsController', function($scope, $state, $rootScope, $stateParams, CheckInService) {


CheckInService.getThisCheckIn($stateParams.id)
    .then(res => {
        $scope.checkIn = res.data;

    })
    .catch(err => {
        console.log('err:', err);
    });
     
});

