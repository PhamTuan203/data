let myApp = angular.module("bai_2", []);
myApp.controller("myController", myFunction);
function myFunction($scope) {
  $scope.sinhvien = [
    {
      ten: "Pham Anh Tuan",
      ngaysinh: "16/06/2003",
      gioitinh: "Nam",
      hinhanh: "anh2.jpg",
      diem: "8.5",
    },
    {
      ten: "Truong Quang vu",
      ngaysinh: "16/06/2004",
      gioitinh: "Nam",
      hinhanh: "anh2.jpg",
      diem: "7",
    },
    {
      ten: "Pham Thanh Nam",
      ngaysinh: "16/06/2004",
      gioitinh: "Nam",
      hinhanh: "anh2.jpg",
      diem: "9",
    },
  ];
}
