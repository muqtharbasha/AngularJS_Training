(function () {
    'use strict';
    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {
        var vm = this;
        vm.message = "●	The application should display a picture of a cat and a number of clicks";
        vm.imgSource = 'images/cat1.jpg';
    }

})();