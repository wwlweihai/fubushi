var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{
        	flavor:'@'
        },
        template:"<div>{{flavor}}</div>",
        //link:function(scope,element,attrs){
        //    element.bind('click',funciton(){
        //        console.log(ctrlFlavor);
        //    });
        //	//scope.flavor=attrs.flavor;
        //}
        link:function(scope,element,attr){
            element.bind("mouseenter",function(){
                console.log(ctrlFlavor);
            });
        }
    }
});