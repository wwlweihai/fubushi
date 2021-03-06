angular.module('fbs.controllers')
.controller('articleListCtrl',function($scope,$state,DataAPI) {
    $scope.details = function (newsid) {
        console.log(newsid);
        $state.go('article_single',{newsid : newsid});
    };
    $scope.articles = DataAPI.get({
            action:'getnewslist',
            pageindex:1,
            pagesize:10
    });
})
.controller('articleSingleCtrl', function($scope,$stateParams,DataAPI,$sce) {
    var articleId = $stateParams.newsid;
    $scope.article = DataAPI.get({
        action:'getnewsdetail',
        newsid:articleId
    });
    $scope.SkipValidation = function(value) {
        return $sce.trustAsHtml(value);
    };
});










