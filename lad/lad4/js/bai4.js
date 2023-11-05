let myApp = angular.module("bai_4", []);
myApp.controller("myController", myFunction);
function myFunction($scope) {
  $scope.calculate = function () {
    var a = parseFloat($scope.width);
    var b = parseFloat($scope.length);
    $scope.acreage = a * b;
    $scope.perimeter = (a + b) * 2;
  };
}
