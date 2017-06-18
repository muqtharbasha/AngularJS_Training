
(function () {

    angular.module('app').directive('passwordCompare', passwordCompare);

    function passwordCompare () {
        return {
            require: "ngModel",
            scope: {
                confirmPassword: "=passwordCompare"
            },
            link: function (scope, element, attributes, modelVal) {

                modelVal.$validators.passwordCompare = function (modelValue) {
                    return modelValue == scope.confirmPassword;
                };

                scope.$watch("confirmPassword", function () {
                    modelVal.$validate();
                });
            }
        };
    }

})();
