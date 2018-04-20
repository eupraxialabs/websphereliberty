// tag::module[]
/*eslint-disable no-undef */
var app = angular.module('consumeRestApp', ['ngResource']);
// end::module[]
// tag::factory[]
app.factory("artists", function($resource) {
  return $resource(location.origin + "/artists");
  
});
// end::factory[]

// tag::controller[]
app.controller("ArtistsCtrl", function($scope, artists) {
    artists.query(function(data) {
        $scope.artists = data;
    }, function(err) {
        console.error("Error occurred: ", err);
    });
});
// end::controller[]
