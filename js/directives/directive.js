app.directive("rosHeader", function () {
    return {
        templateUrl: "../pages/directives/header.html"
        , restrict: "E"
    };
});
app.directive("rosFooter", function () {
    return {
        templateUrl: "../pages/directives/footer.html"
        , restrict: "E"
    };
});
app.filter("removeYear", function () {
    return function (str) {
        return str.substring(0, str.length - 5);
    };
});
