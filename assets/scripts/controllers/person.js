angular.module('fbs.controllers')
.controller('personCtrl',function($scope,$state,DataAPI,$location){
        $scope.personinf = DataAPI.get({
            action:'getcurrentuserinfo'
        });
        $scope.gxzl = function(){
            DataAPI.get({
                action:'updatecurrentuserinfo',
                truename:$scope.personinf.truename,
                postion:$scope.personinf.postion,
                company:$scope.personinf.company
            });
            $scope.$apply();
        }
        $scope.wdjf = DataAPI.get({
            action:'getscorerecordlist',
            pageindex:1,
            pagesize:10
        });
        $scope.redir = function(url,p){
            $state.go(url, {operat:p}, {location:true,reload: true});
        }
        $scope.islogin = DataAPI.get({
            action:'islogin'
        });
});












