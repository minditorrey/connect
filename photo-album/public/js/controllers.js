'use strict';

var app = angular.module('photoApp');

app.controller('mainController', function($scope, AlbumService) {
    $scope.isVisible = true; 

    $scope.toggleDiv = function(event) {
        if ($scope.isVisible === false){
            $scope.isVisible = true;
        } else {
            $scope.isVisible = false;
        }
    };

});

app.controller('detailsController', function($scope, $state, $stateParams, AlbumService, ImageService) {
    $scope.images = [];
    console.log('detailsCtrl!');

    AlbumService.getThisAlbum($stateParams.id)
    .then(res => {
        $scope.album = res.data;

        var albumID = $scope.album._id;
        console.log("album images:", $scope.album._images);
       
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.addImage = function(imageForm) {
    	imageForm._albumID = $stateParams.id
        ImageService.create($scope.imageForm)
        .then(res=>{
        $scope.images.push($scope.imageForm);
        $scope.imageForm = "";

        })
    }

    ImageService.getAll($scope.images)
        .then(res => {
            $scope.images = res.data;
        })
        .catch(err => {
            console.log('err:', err);
        });

    $scope.removeImage = function(image) {
        ImageService.removeImage(image);
        $scope.images.splice(0, 1);
    }


});




app.controller('homeController', function($scope) {
    console.log('homeCtrl!');


});

app.controller('imagesController', function($scope, ImageService) {
    console.log('imagesCtrl!');



    

});

app.controller('albumsController', function($scope, AlbumService) {
    console.log('albumsCtrl!');
    
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

    AlbumService.getAll($scope.albums)
    .then(res => {
        $scope.albums = res.data;
        // $scope.allAlbums = res.data;
        // var albums = $scope.albums;

    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.coverImage = "http://www.atuarios.org.br/10cba/icone_album.png"
    
    $scope.albumForm = false;

    $scope.showAlbumForm = function() {
      $albumForm = true;
    }

    $scope.showAlbumForm = function() {
        if($scope.albumForm = false) {
            $scope.albumForm = true;  
        } else {
            $scope.albumForm = false;
        };
    };


    $scope.addAlbum = function(editFormAlbum) {

        console.log("Form:", $scope.editFormAlbum);
        AlbumService.create($scope.editFormAlbum);
        $scope.albums.push($scope.editFormAlbum);
        $scope.editFormAlbum = "";
        $scope.albumForm = true;     
    }

    $scope.removeAlbum = function(album) {
        AlbumService.removeAlbum(album);
        $scope.albums.splice(0, 1);
    }

    $scope.saveChanges = () => {
        AlbumService.update($scope.editFormAlbum)
        .then(res => {
            $scope.albums.forEach((album, i) => {
                if(album._id === res.data._id) {
                    $scope.album[i] = res.data;
                }
            })
            $scope.editFormAlbum = null;
            $scope.albumForm = true;
        })
    }

    $scope.cancelEdit = () => {
        $scope.editFormAlbum = null;
        $scope.albumForm = true;
    };

});

