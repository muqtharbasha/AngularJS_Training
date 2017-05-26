(function () {

    angular
        .module('app')
        .directive('imageUrlVerify', imageUrlVerify);

    function imageUrlVerify() {
        return {
            restrict: 'A',
            replace: true,
            scope: { url: '=', imageValid: '=' },
            template: '<input ng-model="url" placeholder="Image URL..."/>',
            link: function (scope, element, attrs) {
                var image = new Image();

                element.on('blur', function () {
                    image.src = scope.url;
                });

                image.onload = function () {
                    scope.$apply(function () {
                        scope.imageValid = true;
                    });
                };

                image.onerror = function () {
                    scope.$apply(function () {
                        scope.imageValid = false;
                    });
                };
            }
        }

    };

})();
