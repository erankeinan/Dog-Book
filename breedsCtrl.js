dogBookApp.controller("breedsCtrl", function($scope, breedsSrv, $routeParams, $location, $log, $rootScope) {
    
   
    $scope.breeds = [];
    breedsSrv.getBreeds().then(function(breeds) {     
        $scope.breeds = breeds;
        $scope.refresh();
    }, function(error) {
        $log.error(error);
    });

    // Refresh images button:
     $scope.refresh = function(){
         for (var i in $scope.breeds){
            //var prt1 = JSON.stringify($scope.breeds[i].bname);
            //console.log("item i,  bname in loop: " + prt1);
            $scope.getBreedImg($scope.breeds[i]);            
         }  // End of for
    }// End of refresh()

    $scope.getBreedImg= function(breed) {
        $scope.breedRandImgUrl = "";
        breedsSrv.getBreedImage(breed).then(function(bimg) {    
            //$scope.breeds[i].bimage = bimg;
            //var prt2 = JSON.stringify($scope.breeds[i]);
           // console.log(" i: " + prt2 + " bimg " + bimg); 
            $scope.breedRandImgUrl = bimg;
            return $scope.breedRandImgUrl;
        }, function(error) {
          $log.error(error);
        });
    } // end of getBreedImg


    // Search by:
      $scope.searchText = "";
      $scope.filterBreeds = function(breed) {
        
        // search by breed name: first or last breed name 
        
        if (breed.bname.toLowerCase().includes($scope.searchText.toLowerCase() )) {
          return true;
        } else {
          return false;
        }
        
     }

     $scope.cardclick = function(breed) {            
          var breedId = breed.bname;
          $location.path("/breeds/" + breedId);
     }

});