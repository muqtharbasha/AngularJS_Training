(function () {
    'use strict';
    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {

        var vm = this;

        vm.message = "Step 2. Add a search box and orderBy fields";
        vm.tickImg = 'images/tick.png';

        vm.selectedCat = null;


        vm.getCatInfo = function (cat) {
            vm.selectedCat = cat;
        }

        vm.searchCatData = function (catName) {
            vm.selectedCat = vm.catInfo.filter(function (item) {
                if (item.catName === catName) {
                    return item;
                }
            })[0];
        };
        vm.setOrder = function(sortBy){
            if(sortBy === 'asc'){
                vm.order = 'catName';
            }else{
                vm.order = '-catName';
            }
        }

        vm.catInfo = [{
            id: 1,
            imageUrl: 'images/cat1.jpg',
            catName: 'Cat1'
        }, {
            id: 2,
            imageUrl: 'images/cat2.jpg',
            catName: 'Cat2'
        }, {
            id: 3,
            imageUrl: 'images/cat3.jpg',
            catName: 'Cat3'
        }, {
            id: 4,
            imageUrl: 'images/pic_mountain.jpg',
            catName: 'Cat4'
        }];
    }

})();