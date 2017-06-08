(function () {
    'use strict';

    angular.module('app', ['ui.router'])

        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('addCat', {
                    url: '/addCat',
                    templateUrl: 'Homework3/step1/scripts/catModule/addCat/addCat.tmpl.html'
                })
                .state('catViewer', {
                    url: '/cats',
                    resolve: {
                        catresults: ['catService', function (catService) {
                            return catService.getCats();
                        }]
                    },
                    templateUrl: 'Homework3/step1/scripts/catModule/catviewer/catviewer.tmpl.html',
                    controller: 'catViewerController as ctrl'
                })
                .state('hello', {
                    url: '/hello',
                    template: '<h3>hello world!</h3>'
                })
                .state('about', {
                    url: '/about',
                    template: '<h3>Cat Clicker Application - AngularJs!</h3>'
                });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });
})();