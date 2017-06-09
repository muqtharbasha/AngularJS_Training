(function () {

    angular
        .module('app')
        .directive('imageUrlVerify', imageUrlVerify);

    function imageUrlVerify() {
        return {
            restrict: 'AE',
            replace: true,
            scope: { url: '=', imageValid: '=' },
            //template: '<input ng-model="url" placeholder="Image URL..."/>',

            template:  '<div ng-form="imgPreviewForm">' +
            '<div class="form-group" ng-class="{ \'has-error\' : imgPreviewForm.url.$invalid && !imgPreviewForm.url.$pristine }">' +
            '<label>Url</label>' +
            '<input type="text" name="url" class="form-control" ng-model="url" required>' +
            '<p ng-show="imgPreviewForm.url.$invalid && !imgPreviewForm.url.$pristine" class="help-block">cat url is not valid.</p>' +
            '</div>' +
            '<div class="form-group" ng-hide="imgPreviewForm.url.$invalid">' +
            '<label>Preview</label>' +
            '<img class="catimg" ng-src={{url}} alt="cat"></img>' +
            '</div></div>',

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
