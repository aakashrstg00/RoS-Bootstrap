app.directive("rosHeader", function () {
    return {
        template: ""
        , restrict: "E"
    };
});
app.directive("rosFooter", function () {
    return {
        template: ""
        , restrict: "E"
    };
});
app.filter("removeYear", function () {
    return function (str) {
        return str.substring(0, str.length - 5);
    };
});