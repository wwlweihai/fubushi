angular.module("fbs.directives").directive("searchByCategory",function(DataAPI){function link(scope,element){element.bind("click",function(){scope.$apply(function(){var dealDataName="licaishiList";scope.categoryAera=!1,scope.reqOptions.cateid=scope.categoryId,scope.targetDatas[dealDataName]=DataAPI.get(scope.reqOptions)})})}return{restrict:"A",scope:{categoryId:"=",reqOptions:"=",targetDatas:"=",categoryAera:"="},link:link}});