
var dogBookApp = angular.module("dogBookApp" , ["ngRoute"]);


dogBookApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html"
    }).when("/home", {
      templateUrl: "home.html"
    }).when("/breeds", {
      templateUrl: "breeds.html",
      controller: "breedsCtrl"
    }).when("/breeds/:breedId", {
        templateUrl: "chosenBreed.html",
        controller: "chosenBreedCtrl"
    }).when("/about", {
        templateUrl: "about.html"
    }).otherwise({
        templateUrl: "404.html"
    })
  })