(function () {
    'use strict';
    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {

        var vm = this;

        vm.message = "Step 1. Enhance cat’s list with votes and ticks";
        vm.tickImg = 'images/tick.png';

        vm.selectedCat = null;


        vm.getCatInfo = function (cat) {
            cat.isViewed = true;
            vm.selectedCat = cat;
        }

        vm.catInfo = [{
            id: 0,
            imageUrl: 'images/cat1.jpg',
            catName: 'Cat 1',
            isViewed: false,
            voteCount: 0
        }, {
            id: 1,
            imageUrl: 'images/cat2.jpg',
            catName: 'Cat 2',
            isViewed: false,
            voteCount: 0
        }, {
            id: 2,
            imageUrl: 'images/cat3.jpg',
            catName: 'Cat 3',
            isViewed: false,
            voteCount: 0
        }, {
            id: 3,
            imageUrl: 'images/pic_mountain.jpg',
            catName: 'Cat 4',
            isViewed: false,
            voteCount: 0
        }];
    }

})();