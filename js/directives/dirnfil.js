app.directive("rosHeader", function () {
    return {
        template: "<nav class=\"navbar navbar-toggleable-sm navbar-inverse bg-inverse\"><div class=\"container\"><ul class=\"nav navbar-nav\"> <li class=\"nav-item\"><a class=\"nav-link \" href=\"#/home\" style=\"font-family:'Montserrat',sans-serif\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#/aboutus\" style=\"font-family:'Montserrat',sans-serif\">About Us</a></li></ul><a href=\"https://github.com/aakashrstg00/RoS-Bootstrap\" style=\"font-family:'Montserrat',sans-serif\" class=\"navbar-brand ml-sm-auto mr-0\" target=\"_blank\">Raindrops or Sunshine</a></div></nav>"
        , restrict: "E"
    };
});
app.directive("rosFooter", function () {
    return {
        template: "<footer class=\"footer container py-3 text-white\"><hr style=\"border-color: white\"><div class=\"row \"><div class=\"col-sm-7\">&psi;<strong> Aakash Rastogi </strong>&psi;</div><div class=\"col-sm-5 text-md-right\"> &copy; 2017 Raindrops or Sunshine</div></div></footer>"
        , restrict: "E"
    };
});
app.filter("removeYear", function () {
    return function (str) {
        return str.substring(0, str.length - 5);
    };
});