(function () {
    'use strict';

    catViewerController.$Inject = ['catService'];

    angular
        .module('app')
        .controller('catViewerController', catViewerController);

    function catViewerController(catService) {
        var vm = this;

        vm.selectedCat = null;
        vm.catInfo = [];

        vm.getCatInfo = function (cat) {
            cat.isViewed = true;
            vm.selectedCat = cat;
        }

        vm.searchCatData = function (catName) {
            vm.selectedCat = vm.catInfo.filter(function (item) {
                if (item.name === catName) {
                    return item;
                }
            })[0];
        };

        vm.setOrder = function (sortBy) {
            vm.order = (sortBy ==='dsc') ? '-name':'name';
        }

        vm.getSearchResults = function () {
            catService.getCats().then(function (response) {
                vm.catInfo = response;
            });
        }
        vm.getSearchResults();
    }

})();

