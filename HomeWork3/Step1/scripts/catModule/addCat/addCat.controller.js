(function () {
    'use strict';

    addcatController.$Inject = ['$state', 'catService'];

    angular
        .module('app')
        .controller('addcatController', addcatController);

    function addcatController($state, catService) {

        var vm = this;

        vm.cat = {};
        vm.submit = function (isValid) {
            if (isValid) {
                catService.addCat(vm.cat).then(function (response) {
                    if (response) {
                        alert("Cat added successfully");
                        $state.go('catViewer');
                    } else {
                        alert("Failed to add cat");
                    }
                });
            } else {
                alert("Form Not Valid");
            }
        };

        vm.clear = function () {
            vm.cat = {};
        }
    };
})();