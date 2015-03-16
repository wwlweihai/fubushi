angular.module('fbs.controllers')
.controller('faxianCtrl',function($scope,$state,DataAPI,$sce) {
    $scope.details = function (activityId) {
        $state.go('activity_single',{activityId:activityId});
    };
    $scope.jfphList = DataAPI.get({
        action:'getscoreranklist',
        pagesize:10
    });
    $scope.pxintro  =  DataAPI.get({
        action:'getnewsdetail',
        newsid: '294991'
    });
    $scope.SkipValidation = function(value) {
        return $sce.trustAsHtml(value);
    };
    $scope.sexy = 1;
});











