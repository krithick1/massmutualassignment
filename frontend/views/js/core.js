var scotchTodo = angular.module('massmutualApp', ['ngRoute','massmutualControllers']);
console.log("Inside Core js");

$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})


var res ="";

var name1 = "krithick";



scotchTodo.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when("/", {templateUrl: "templates/livemutual.html", controller: "MyCtrl"})
	.when("/blog", {
        templateUrl : "templates/blog.html"
    })
	/*when("/content/:id", {
    templateUrl: "blog.html",
    controller: "BlogController"
	//console.log
  }).
  otherwise({
    redirectTo: '/'
  });
*/
	
    // Pages
    //.when("/livemutual_blog", {templateUrl: "templates/blog.html", controller: "blogCtrl"})
    //.when("/faq", {templateUrl: "templates/faq.html", controller: "PageCtrl"})
    //.when("/pricing", {templateUrl: "templates/pricing.html", controller: "PageCtrl"})
    //.when("/services", {templateUrl: "templates/services.html", controller: "PageCtrl"})
    //.when("/contact", {templateUrl: "templates/contact.html", controller: "PageCtrl"})
    // Blog
    //.when("/blog", {templateUrl: "templates/blog.html", controller: "BlogCtrl"})
    //.when("/blog/post", {templateUrl: "templates/blog_item.html", controller: "BlogCtrl"})
    // else 404
    //.otherwise("/404", {templateUrl: "templates/404.html", controller: "PageCtrl"});
}]);




function mainController($scope, $http) {
    $scope.formData = {};
//console.log("Inside Core js controller");
	
$http.get('http://localhost:8081/getContents/')
        .success(function(data) {
            $scope.content = data.contentjson;
            console.log(data.contentjson);
			
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
	
$http.get('http://localhost:8081/getHeader/')
        .success(function(data) {
            $scope.header = data.Headerjson;
            console.log(data.Headerjson);
			
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });	
		
		$scope.generate = function() {
    // your code here
	console.log("Inside Blog Controller ");
	$http.get("http://localhost:8081/Content/1").success (function(data){
	$scope.blogcontent = data;

	 console.log(data);
	})
	.error(function(data) {
            console.log('Error Blog Controller: ' + data);
        }); 
		
    $location.path(templates/blog.html);
};
		
		}
		

		

