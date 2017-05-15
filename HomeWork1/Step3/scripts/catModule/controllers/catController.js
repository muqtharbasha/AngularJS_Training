(function () {

    'use strict';

    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {

        var vm = this;
        vm.message = "Display List of Cats with Display Area and Increase the Count on Image Click";

        vm.selectedCat = null;

        vm.getCatCount = function (catId) {
            angular.forEach(vm.catsList, function (item) {
                if (item.id == catId) {
                    item.count = item.count + 1;
                }
            });
        };

        vm.displayCatData = function (cat) {
            vm.selectedCat = cat;
        }


        vm.catsList = [{
            id: 1,
            imageUrl: 'images/cat1.jpg',
            catName: 'Cat 1',
            count: 0
        }, {
            id: 2,
            imageUrl: 'images/cat2.jpg',
            catName: 'Cat 2',
            count: 0
        }, {
            id: 3,
            imageUrl: 'images/cat3.jpg',
            catName: 'Cat 3',
            count: 0
        }, {
            id: 4,
            imageUrl: 'images/pic_mountain.jpg',
            catName: 'Cat 4',
            count: 0
        }];

    }

})();