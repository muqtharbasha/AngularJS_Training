(function () {
    'use strict';

    CatClicker.$Inject = ['$scope'];

    angular
        .module('app')
        .controller('CatClicker', CatClicker);

    function CatClicker($scope) {

        var vm = this;
        
        vm.message = "Step 3. Create a separate page to add a new cat";

        vm.submit = function(cat){
            console.log(cat);
            
        }

        vm.reset = function () {
            $scope.catForm.$setUntouched();
            $scope.catForm.$setPristine();
            $scope.imageOk = false;
        }
    };
})();