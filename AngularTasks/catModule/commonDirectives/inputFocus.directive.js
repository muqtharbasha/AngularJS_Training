(function () {

    'use strict';
    angular.module('app').directive('inputFocus', inputFocus);

    function inputFocus() {
        return {
            restrict: 'A',
            scope: {
                inputValue: '=inputFocus'
            },
            link: function (scope, element) {
                scope.$watch('inputValue', function (value) {
                    if (value === true) {
                        element[0].focus();
                        scope.inputValue = false;
                    }
                });
            }
        }
    }
})();