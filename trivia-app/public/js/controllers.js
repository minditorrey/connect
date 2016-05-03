'use strict';

var app = angular.module('triviaApp');

app.controller('mainController', function($scope) {
    $scope.setCategory = function(catChoice) {
        $scope.catChoice = catChoice;
       
    }

    $scope.isVisible = true; 

    $scope.toggleDiv = function(event) {
        // event.preventDefault(); // included to show how to prevent default behavior
        // event.stopPropagation(); // included to show how to stop propagation
        if ($scope.isVisible === false){
            $scope.isVisible = true;
        } else {
            $scope.isVisible = false;
        }
    };
});
app.controller('categoriesController', function($scope, $state) {

});

app.controller('dragDetailsController', function($scope, $state, Card) {
    Card.getByCategory()
     .then(res => {
        $scope.cards = res.data;
        var cards = $scope.cards;
       
    })
    .catch(err => {
        console.log('err:', err);
    });    
});

app.controller('bobDetailsController', function($scope, $state, Card) {
    Card.getByCategory()
     .then(res => {
        $scope.cards = res.data;
        var cards = $scope.cards;
       
    })
    .catch(err => {
        console.log('err:', err);
    });	
});

app.controller('deadDetailsController', function($scope, $state, Card) {
    Card.getByCategory()
     .then(res => {
        $scope.cards = res.data;
        var cards = $scope.cards;
        // console.log(cards);
    })
    .catch(err => {
        console.log('err:', err);
    });    
});

app.controller('cardsController', function($scope, $state, Card) {


    Card.getByCategory($scope.catChoice)
     .then(res => {
        $scope.cards = res.data;
        var cards = $scope.cards;
        console.log(cards);
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.isVisible = false; 

    $scope.toggleDiv = function(event) {
        // event.preventDefault(); // included to show how to prevent default behavior
        // event.stopPropagation(); // included to show how to stop propagation
        if ($scope.isVisible === false){
            $scope.isVisible = true;
        } else {
            $scope.isVisible = false;
        }
    };


    
});
