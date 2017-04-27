app.directive("rosHeader", function () {
    return {
        template: " <div id=\"header\"><ul id = \"navmenu\" ><li><a href = \"#\"> HOME </a></li><li><a href = \"#/aboutus\"> About Us </a></li><li style = \"float:left;background-color:#2a54a3\"><a href = \"#/aboutus\"><b> Raindrops or Sunshine ? </b></a></li></ul></div>"
        , restrict: "E"
    };
});
app.directive("rosFooter", function () {
    return {
        template: "<img src=\"images/favicon.ico\"><img src=\"images/favicon.ico\">"
        , restrict: "E"
    };
});
app.filter("removeYear", function () {
    return function (str) {
        return str.substring(0, str.length - 5);
    };
});