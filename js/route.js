app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "pages/home.html"
        , controller: "citycontroller"
    }).when('/aboutus', {
        templateUrl: "pages/aboutus.html"
        , controller: "aboutuscontroller"
    }).when('/home', {
        templateUrl: "pages/home.html"
        , controller: "citycontroller"
    });
    /*.otherwise({
            redirectTo: '/'
        });*/
    $locationProvider.hashPrefix('');
});