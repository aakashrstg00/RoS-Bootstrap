app.controller("aboutuscontroller", function ($scope) {
    $scope.msg = "Want to know about the weather?Stay connected to the latest in weather forecasting with Sunshine or Raindrops – Weather for Life. This free weather app is available for every place in India and for more minutes than any other minute-by-minute precipitation forecast.";
});
app.controller("citycontroller", function ($scope, cityfactory) {
    $scope.searchClicked = false;
    $scope.searchByCid = function () {
        $scope.searchClicked = true;
        $scope.searchWorked = false;
        console.log("Checking for city data");
        var city = $scope.cityName || "Delhi";
        var promise = cityfactory.serverCall(city);
        promise.then(function (data) {
            if (data.data.query.results) {
                $scope.searchWorked = true;
                $scope.searchClicked = true;
                $scope.result = data.data.query.results.channel;
                console.log($scope.result);
                console.log("search worked");
            }
            else {
                console.log("search not worked");
            }
        }, function (error) {
            $scope.error = error;
        });
        console.log("city", city);
        $scope.cityName = "";
    };
    $scope.searchByCid();
});