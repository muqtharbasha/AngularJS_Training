(function () {

    angular.module('app').directive('onEnter', onEnter);

    function onEnter() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.onEnter);
                        });
                        event.preventDefault();
                    }
                });
            }
        }
    }

})();