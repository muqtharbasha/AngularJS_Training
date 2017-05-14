(function () {
    'use strict';
    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {
        var vm = this;
        vm.message = "Display List of Cats with Display Area";
        vm.imgSource = 'images/cat1.jpg';

        vm.getCatCount = function (imageId) {
            angular.forEach(vm.res, function (item) {
                if (item.id == imageId) {
                    item.count = item.count + 1;
                }
            });
        };
        vm.isVisibile = false;
        vm.displayCatData = function (catId) {
            vm.isVisibile = true;
            vm.res = vm.catDisplayData.filter(function (item){
                if (item.id == catId) {
                    return item;
                }
            });

            // angular.forEach(vm.catDisplayData, function (item) {
            //     if (item.id == catId) {
            //         return;                        
            //         // vm.catDisplayData = {
            //         //     id = item.id,
            //         //     imageUrl = item.imageUrl,
            //         //     catName = item.catName,
            //         //     count = item.count
            //         // }
            //         //break;
            //     }
            // });
        }

        vm.catsList = [{
            id: 0,
            catName: 'Cat 1',
        }, {
            id: 1,
            catName: 'Cat 2',
        }, {
            id: 2,
            catName: 'Cat 3',
        }, {
            id: 3,
            catName: 'Cat 4',
        }];

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
        }, {
            id: 2,
            imageUrl: 'images/cat3.jpg',
            catName: 'Cat 3',
            count: 0
        }, {
            id: 3,
            imageUrl: 'images/pic_mountain.jpg',
            catName: 'Cat 4',
            count: 0
        }
        ];

    }

})();