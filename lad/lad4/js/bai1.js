let myApp = angular.module("bai_1", []);
myApp.controller("myController", myFunction);
function myFunction($scope) {
  $scope.sinhvien = [
    {
      ten: "Pham Anh Tuan",
      ngaysinh: "16/06/2003",
      gioitinh: "Nam",
      hinhanh: "anh.jpg",
      diem: "8.5",
    },
  ];
}
