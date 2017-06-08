(function () {
    
    'use strict';

    catService.$inject = [
        '$http',
        '$q'
    ];

    angular.module('app').service('catService', catService);

    function catService($http, $q) {

        var cats = [{
            id: 1,
            name: 'cat1',
            src: 'https://static.pexels.com/photos/69372/pexels-photo-69372.jpeg',
            isViewed: false,
            voteCount: 0
        }, {
            id: 2,
            name: 'cat2',
            src: 'https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg',
            isViewed: false,
            voteCount: 0
        }, {
            id: 3,
            name: 'cat3',
            src: 'https://static.pexels.com/photos/197457/pexels-photo-197457.jpeg',
            isViewed: false,
            voteCount: 0
        }, {
            id: 4,
            name: 'cat4',
            src: 'https://static.pexels.com/photos/207992/pexels-photo-207992.jpeg',
            isViewed: false,
            voteCount: 0
        }, {
            id: 5,
            name: 'cat5',
            src: 'https://static.pexels.com/photos/203016/pexels-photo-203016.jpeg',
            isViewed: false,
            voteCount: 0
        }];

        this.getCats = function () {
            var defered = $q.defer();
            defered.resolve(cats);
            return defered.promise
        };

        this.getCatById = function (id) {
            return cats.filter(function (cat) {
                return cat.id == id;
            })[0];
        }

        this.addCat = function (cat) {
            var defered = $q.defer();
            cats.push({
                id: new Date().getTime(),
                name: cat.name,
                src: cat.url,
                hasViewed: false,
                voteCount: 0
            });
            defered.resolve(true);
            return defered.promise
        };

        this.searchCat = function (name) {
            var defered = $q.defer();
            var searchResult = cats.filter(function (cat) {
                return cat.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
            });
            defered.resolve(searchResult);
            return defered.promise
        };
    }
})();