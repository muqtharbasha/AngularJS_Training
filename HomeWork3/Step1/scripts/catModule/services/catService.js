(function () {
    'use strict';
    catService.$inject = [
        '$http',
        'q'
    ];

    angular.module('app').service('catService', catService);

    function catService($http, $q) {
        var getCatData = function () {
            return $http({
                 method:"GET",
                 url:"",
                 
            });
        }
    }
})();