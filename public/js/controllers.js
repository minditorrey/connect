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
    
    //mood
    $scope.openMoodModal = function() {
        $('#moodModal').modal('show');
    }

    $scope.addMood = function() {
        if($('#fatigued').is(':checked')) {
            $scope.negativeMood = "fatigued";
        } else if($('#bored').is(':checked')) {
            $scope.negativeMood = "bored";
        } else if($('#sad').is(':checked')) {
            $scope.negativeMood = "sad";
        } else if($('#upset').is(':checked')) {
            $scope.negativeMood = "upset";
        } else if($('#stressed').is(':checked')) {
            $scope.negativeMood = "stressed";
        } else if($('#nervous').is(':checked')) {
            $scope.negativeMood = "nervous";
        } else if($('#tense').is(':checked')) {
            $scope.negativeMood = "tense";
        };
        if($('#excited').is(':checked')) {
            $scope.positiveMood = "excited";
        } else if($('#elated').is(':checked')) {
            $scope.positiveMood = "elated";
        } else if($('#happy').is(':checked')) {
            $scope.positiveMood = "happy";
        } else if($('#content').is(':checked')) {
            $scope.positiveMood = "content";
        } else if($('#serene').is(':checked')) {
            $scope.positiveMood = "serene";
        } else if($('#relaxed').is(':checked')) {
            $scope.positiveMood = "relaxed";
        } else if($('#calm').is(':checked')) {
            $scope.positiveMood = "calm";
        }
       
    }

    $scope.cancelMood = function(){
        $('#moodModal').modal('hide');
    }

    // concerns
    $scope.openConcernsModal = function() {
        $('#concernsModal').modal('show');
    }

    $scope.addConcerns = function() {
        console.log('concernName:', $('#concernName'));
        $scope.concernName = $('#concernName').val();
        $scope.concernDescription = $('#concernDescription').val();
    }

    $scope.cancelConcerns = function(){
        $('#concernsModal').modal('hide');
    }

    // needs
    $scope.openNeedsModal = function() {
        $('#needsModal').modal('show');
    }

    $scope.addNeeds = function() {
        console.log('needName1:', $('#needName1'));
        console.log('needName2:', $('#needName2'));
        $scope.needName1 = $('#needName1').val();
        $scope.needName2 = $('#needName2').val();
        $scope.needDescription1 = $('#needDescription1').val();    
        $scope.needDescription2 = $('#needDescription2').val();
    }

    $scope.cancelNeeds = function(){
        $('#needsModal').modal('hide');
    }

    // goals
    $scope.openGoalsModal = function() {
        $('#goalsModal').modal('show');
    }

    $scope.addGoals = function() {
        console.log('goalName1:', $('#goalName1'));
        console.log('goalName2:', $('#goalName2'));
        $scope.goalName1 = $('#goalName1').val();
        $scope.goalName2 = $('#goalName2').val();
        $scope.goalDescription1 = $('#goalDescription1').val(); 
        $scope.goalDescription2 = $('#goalDescription2').val();
    }

    $scope.cancelGoals = function(){
        $('#goalsModal').modal('hide');
    }

    // hopes
    $scope.openHopesModal = function() {
        $('#hopesModal').modal('show');
    }

    $scope.addHopes = function() {
        console.log('hopeName1:', $('#hopeName1'));
        console.log('hopeName2:', $('#hopeName2'));
        $scope.hopeName1 = $('#hopeName1').val();
        $scope.hopeName2 = $('#hopeName2').val();
        $scope.hopeDescription1 = $('#hopeDescription1').val(); 
        $scope.hopeDescription2 = $('#hopeDescription2').val();
    }

    $scope.cancelHopes = function(){
        $('#hopesModal').modal('hide');
    }

    // thanks
    $scope.openThanksModal = function() {
        $('#thanksModal').modal('show');
    }

    $scope.addHopes = function() {
        console.log('thanksName1:', $('#thanksName1'));
        console.log('thanksName2:', $('#thanksName2'));
        $scope.thanksName1 = $('#thanksName1').val();
        $scope.thanksName2 = $('#thanksName2').val();
        $scope.thanksDescription1 = $('#thanksDescription1').val(); 
        $scope.thanksDescription2 = $('#thanksDescription2').val();
    }

    $scope.cancelThanks = function(){
        $('#thanksModal').modal('hide');
    }

    $scope.addCheckIn= function() {
        var checkIn = {
            positiveMood: $scope.positiveMood,
            negativeMood: $scope.negativeMood,
            concernName: $scope.concernName,
            concernDescription: $scope.concernDescription,
            needName1: $scope.needName1,
            needDescription1: $scope.needDescription1,
            needName2: $scope.needName2,
            needDescription2: $scope.needDescription2,
            goalName1: $scope.goalName1,
            goalDescription1: $scope.goalDescription1,
            goalName2: $scope.goalDescription1,
            goalDescription2: $scope.goalDescription2,
            hopeName1: $scope.hopeName1,
            hopeDescription1: $scope.hopeDescription1,
            hopeName2: $scope.hopeName2,
            hopeDescription2: $scope.hopeDescription2,
            thanksName1: $scope.thanksName1,
            thanksDescription1: $scope.thanksDescription1,
            thanksName2: $scope.thanksName2,
            thanksDescription2: $scope.thanksDescription2
        }

        CheckInService.create(checkIn)
            .then( (checkIn) => {
                $('#myModal1').modal('hide');
                swal({ title: "Congrats!", text: "You have added your checkin.",
                    type: "success", closeOnConfirm: true }
                    );
            
            });
    }

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

app.controller('situationsController', function($scope, $state, $rootScope, $stateParams, SituationsService) {
    
    SituationsService.getAll()
    .then(res => {
        $scope.situations = res.data;
        var situations = $scope.situations;
        console.log(situations);
    })
    .catch(err => {
        console.log('err:', err);
    });
    

    $scope.openEventsModal = function() {
        $('#eventsModal').modal('show');
    }
    
    $scope.cancelEvent = function(){
        $('#eventsModal').modal('hide');
    }
    
    $scope.addEvent = function() {
        console.log('event:', $('#event'));
        $scope.event= $('#event').val();
    }


    $scope.openThoughtsModal = function() {
        $('#thoughtsModal').modal('show');
    }
    
    $scope.cancelThoughts = function(){
        $('#thoughtsModal').modal('hide');
    }
    
    $scope.addThoughts = function() {
        console.log('thoughts:', $('#thoughts'));
        $scope.thoughts = $('#thoughts').val();
    }


    $scope.openFeelingsModal = function() {
        $('#feelingsModal').modal('show');
    }
    
    $scope.cancelFeelings = function(){
        $('#feelingsModal').modal('hide');
    }
    
    $scope.addFeelings = function() {
        console.log('feelings:', $('#feelings'));
        $scope.feelings = $('#feelings').val();
    }


    $scope.openBehaviorsModal = function() {
        $('#behaviorsModal').modal('show');
    }
    
    $scope.cancelBehaviors = function(){
        $('#behaviorsModal').modal('hide');
    }
    
    $scope.addBehaviors = function() {
        console.log('behaviors:', $('#behaviors'));
        $scope.behaviors = $('#behaviors').val();
    }


    $scope.openBeliefsModal = function() {
        $('#beliefsModal').modal('show');
    }
    
    $scope.cancelBeliefs = function(){
        $('#beliefsModal').modal('hide');
    }
    
    $scope.addBeliefs = function() {
        console.log('beliefs:', $('#beliefs'));
        $scope.beliefs = $('#beliefs').val();
    }


    $scope.openEffectsModal = function() {
        $('#effectsModal').modal('show');
    }
    
    $scope.cancelEffects = function(){
        $('#effectsModal').modal('hide');
    }
    
    $scope.addEffects = function() {
        console.log('effects:', $('#effects'));
        $scope.effects = $('#effects').val();
    }


    $scope.openMeaningsModal = function() {
        $('#meaningsModal').modal('show');
    }
    
    $scope.cancelMeanings = function(){
        $('#meaningsModal').modal('hide');
    }
    
    $scope.addMeanings = function() {
        console.log('meanings:', $('#meanings'));
        $scope.meanings = $('#meanings').val();
    }


    $scope.openPotentialModal = function() {
        $('#potentialModal').modal('show');
    }
    
    $scope.cancelPotential = function(){
        $('#potentialModal').modal('hide');
    }
    
    $scope.addPotential = function() {
        console.log('potential:', $('#potential'));
        $scope.potential = $('#potential').val();
    }


    $scope.openResolutionModal = function() {
        $('#resolutionModal').modal('show');
    }
    
    $scope.cancelResolution = function(){
        $('#resolutionModal').modal('hide');
    }
    
    $scope.addResolution = function() {
        console.log('resolution:', $('#resolution'));
        $scope.resolution = $('#resolution').val();
    }


    $scope.addSituation = function() {
        var situation = {
            event: $scope.event,
            thoughts: $scope.thoughts,
            feelings: $scope.feelings,
            behaviors: $scope.behaviors,
            beliefs: $scope.beliefs,
            effects: $scope.effects,
            meanings: $scope.meanings,
            potential: $scope.potential,
            resolution: $scope.resolution  
        }

    SituationsService.create(situation)
        .then((situation) => {
            $scope.event = "";
            $scope.thoughts = "";
            $scope.feelings = "";
            $scope.behaviors = "";
            $scope.beliefs = "";
            $scope.effects = "";
            $scope.meanings = "";
            $scope.potential = "";
            $scope.resolution = "";
            swal({ title: "Congrats!", text: "You have added your situation.",
                type: "success", closeOnConfirm: true });       
        });
    }
});

app.controller('situationDetailsController', function($scope, $state, $rootScope, $stateParams, SituationsService) {
    SituationsService.getThisSituation($stateParams.id)
    .then(res => {
        $scope.situation = res.data;
        console.log('situation:', $scope.situation)
    })
    .catch(err => {
        console.log('err:', err);
    });
});

