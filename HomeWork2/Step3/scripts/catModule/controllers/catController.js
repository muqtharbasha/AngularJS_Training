(function () {
    'use strict';

    //CatClicker.$Inject = ['imageUrlVerify'];

    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker() {

        var vm = this;

        vm.message = "Step 3. Create a separate page to add a new cat";

        function checkURL(url) {
            return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
        }
    };

})();