let App = angular.module("myApp", []);
App.controller("myController", school);
function login($scope) {
  $scope.click = function () {
    let tk = $scope.taiKhoan;
    let mk = $scope.matKhau;

    if (mk != "" && mk == "tuantienti1") {
      alert("Xin chao tuan quan tro lai");
    } else {
      alert("Ban sai mat khau");
    }
  };
}
