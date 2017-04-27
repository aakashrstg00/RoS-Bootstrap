var reversegeo = {
    myapikey: 'AIzaSyDA1P7FIgpxvanTfmvPU_RNxEEqbC2bbUY'
    , url: "'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + myapikey"
    , url1: "https://maps.googleapis.com/maps/api/geocode/json?latlng="
    , parseformat: "{{result.results[1].formatted_address}}"
};

/*function geo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var arr = [position.coords.latitude, position.coords.longitude];
            return arr;
            console.log("geo()", arr);
        });
    }
    else {
        console.log("Geolocation not supported!");
        return null;
    }
}
app.factory("revgeofactory", function ($http, $q) {
    return {
        serverCall: function () {
            var pr = $q.defer();
            var arr = geo();
            console.log("arr", arr);
            var url = reversegeo.url1 + arr[0] + ',' + arr[1] + '&key=' + reversegeo.myapikey;
            $http.get(url).then(function (data) {
                pr.resolve(data);
                console.log("geo data recieved");
            }, function (error) {
                pr.reject(error);
                console.log("geo data not recieved");
            });
            return pr.promise;
        }
    };
});
app.controller("revgeoctrl", function ($scope, revgeofactory) {
    var promise = revgeofactory.serverCall();
    promise.then(function (data) {
        $scope.result = data.data;
        console.log($scope.result);
    }, function (error) {
        $scope.error = error;
    });
});*/