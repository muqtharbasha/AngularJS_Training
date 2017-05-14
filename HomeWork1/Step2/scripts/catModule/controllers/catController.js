(function () {
    'use strict';
    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {
        var vm = this;
        vm.message = "●	The application should display two cats with Name, Picture, Count and Increase the count on image click.";

        vm.getCatCount = function (imageId) {
            angular.forEach(vm.catDisplayData, function (item) {
                if (item.id == imageId) {
                    item.count = item.count + 1;
                }
            });
        };

        vm.catDisplayData = [{
            id: 0,
            imageUrl: 'images/cat1.jpg',
            catName: 'Cat 1',
            count: 0
        }, {
            id: 1,
            imageUrl: 'images/cat2.jpg',
            catName: 'Cat 2',
            count: 0
        }];

    }

})();