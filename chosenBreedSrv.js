dogBookApp.factory("chosenBreedSrv", function($http, $log, $q) {

    // function Breed(bname, bimage) {
    //     this.bimage = bimage;
    // }



    function getBreedImages(breedId) {
      
        var async = $q.defer();   
        var breedImages = [];

        var dogApiGetBreedImgss = "https://dog.ceo/api/breed/" + breedId + "/images";

        console.log(" link: " + dogApiGetBreedImgss);

        $http.get(dogApiGetBreedImgss).then(function(response) {

            breedImages = response.data.message;                                
            var prt = JSON.stringify(response);
            console.log(prt);

            async.resolve(breedImages);

            }, function(error) {
            // error
            async.reject(error);
            });
            
        return async.promise;

      }//end of getBreedImages

      return {
        getBreedImages: getBreedImages
      };

})