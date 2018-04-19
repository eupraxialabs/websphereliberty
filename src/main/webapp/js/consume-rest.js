// tag::module[]
var app = angular.module('consumeRestApp', ['ngResource']);
// end::module[]
//var url = $location.url();
//$scope.baseUrl = new $window.URL($location.absUrl()).origin;
//$location.$$absUrl.replace($location.$$url, '')
// tag::factory[]
app.factory("artists", function($resource) {
  return $resource("http://192.168.0.143:32970/artists");
  //   return $resource("$location.$$absUrl/artists");
  //    return $resource("$location.absUrl().origin/artists");
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
