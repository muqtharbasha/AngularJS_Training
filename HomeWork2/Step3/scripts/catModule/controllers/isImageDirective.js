(function(){

angular
.module('app')
.directive('imageUrlVerify', imageUrlVerify);

function imageUrlVerify(){
  return {
    restrict: 'A',
    replace: true,
    scope: { url: '=', imageValid: '=' },
    template: '<input ng-bind="url" placeholder="Image URL..." valid="imageValid" />',
    link: function(scope, element, attrs) {
      var image = new Image();

      element.on( 'blur', function() {
        image.src = scope.url;
        imageValid = scope.url != "" && image.complete ? true : false;
      });
    }
  }
}

})();

// angular.module('app', [])
// .directive('imageUrlVerify', function() {
//   return {
//     restrict: 'A',
//     replace: true,
//     scope: { url: '=', imageValid: '=' },
//     template: '<input ng-bind="url" placeholder="Image URL..." valid="imageValid" />',
//     link: function(scope, element, attrs) {
//       var image = new Image();

//       element.on( 'blur', function() {
//         image.src = url;
//         imageValid = url != "" && image.complete ? true : false;
//       });
//     }
//   }
// })