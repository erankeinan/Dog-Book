dogBookApp.factory("breedsSrv", function($http, $log, $q) {

    function Breed(bname, bimage) {
        this.bname = bname;
        this.bimage = bimage;
      }

      function getBreeds() {
    
        var async = $q.defer();   
        var breeds = [];

        //Read data from dog API for all breeds and save it in array by using the constructor
        // Then read again an image per breed and save it in the array
        // print error to console if there is one.
        var i;
        var dogApiGetBreeds = "https://dog.ceo/api/breeds/list/all";
        var defaultBreedImg = "https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2013/05/husky-featured.jpg"; 
        $http.get(dogApiGetBreeds).then(function(response) {
            // Success        
            var breedsNames = response.data.message;
            //var prt = JSON.stringify(breedsNames);
            //$log.debug("breedsNames: "+ prt);
            //console.log("breedsNames: "+ prt);
            //debugger;
            for ( i in breedsNames) {  
                breeds.push(new Breed(i, defaultBreedImg));
            }
            //var prt = JSON.stringify(breeds);
            //$log.debug("Breeds: " + prt + " ");
            //console.log("Breeds: " + prt + " ");
            async.resolve(breeds);

        }, function(error) {
            // Error
            async.reject(error);
        });

        return async.promise;
    }//end of getBreeds

    

    function getBreedImage(breed) {
    
        var asyncImage = $q.defer(); 
        var bimg = "";
        var dogApiGetBreedImg = "https://dog.ceo/api/breed/"+ breed.bname +"/images/random";
            //alert (" link " + dogApiGetBreedImg)
        $http.get(dogApiGetBreedImg).then(function(response) {
                //alert (" link " + response2.data.message)
                bimg = response.data.message;
                breed.bimage = bimg;
                asyncImage.resolve(bimg);

            } /*End http dogApiGetBreedImgs call */
                , function(error) {
                // error
                asyncImage.reject(error);
                });
        return asyncImage.promise;

    } //end of getBreedImage 


    return {
        getBreeds: getBreeds,
        getBreedImage: getBreedImage
      };

})
