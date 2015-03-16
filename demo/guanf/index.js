angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('page1', {
                url: "/page1",
                views: {
                    'menuContent': {
                        templateUrl: "page1.html",
                        controller: "Page1Ctrl"
                    }
                }
            })
            //.state('page2', {
            //    url: "/page2",
            //    templateUrl: "templates/page2.html",
            //    controller: "Page2Ctrl"
            //})
            //.state('page3', {
            //    url: "/page3",
            //    templateUrl: "templates/page3.html",
            //    controller: "Page3Ctrl"
            //})

        $urlRouterProvider.otherwise("/page1");
    })

    .controller('Page1Ctrl', function($rootScope, $scope) {
        $scope.myTitle = 'Page 1';
    })

    .controller('Page2Ctrl', function($rootScope, $scope, $ionicHistory) {
        $scope.myTitle = 'Page 2';
    })

    .controller('Page3Ctrl', function($rootScope, $scope) {
        $scope.myTitle = 'Page 3';
    });