dogBookApp.controller("chosenBreedCtrl", function($scope, $routeParams,  chosenBreedSrv) {
    
    $scope.breedImages = [];
    //alert($routeParams.breedId);

   // Selected specific breed images  
   chosenBreedSrv.getBreedImages($routeParams.breedId).then(function(breedImages) {
    console.log("inside " + $routeParams.breedId);
        
        $scope.breedImages = breedImages;
        $scope.breedName = $routeParams.breedId;
        var prt = JSON.stringify($scope.breedImages);
        console.log(prt);

    }, function(error) {
       $log.error(error);
   });
 
   $scope.ImgEnlarge = function(breedImg) {
    $scope.currentImg = breedImg;
      
    $("#dogModal").modal({display: true});
  };      
 

});