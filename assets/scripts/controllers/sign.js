angular.module('fbs.controllers')
.controller('signCtrl',function($scope,DataAPI,Tools) {
        $scope.signInData = {};
        $scope.signInData.action = "login";
        $scope.signInData.userid = "forbesuser1";
        $scope.signInData.pwd = "123456";
        $scope.login = function(){
            DataAPI.get($scope.signInData).$promise.then(function(resp) {
                if(resp.issuccess){
                    Tools.pageReturn();
                    console.log("登录成功");
                }else{
                    console.log(resp.message);
                }
            });
        }

        $scope.goToRegist = function(){
            Tools.pageSkip('regist');
        }

        $scope.registData = {};
        $scope.registData.action  = 'reg';
        $scope.registData.phone  = 18573619055;
        $scope.registData.pwd  = '123';
        $scope.registSub = function(){
            //console.log($scope.registData);
            //console.log("提交注册");
            DataAPI.get($scope.registData).$promise.then(function(resp) {
                    if(resp.errcode == 0){
                        console.log('注册成功');
                        Tools.pageReturn();
                    }else{
                        console.log('注册失败');
                        console.log(resp.errmsg);
                    }
                });
        };
        $scope.reqYzw = function(){
            DataAPI.get({
                action:'getsmsvercode',
                phone:$scope.registData.phone
            }).$promise.then(function(resp) {
                    console.log(resp);
            });

        };
})








