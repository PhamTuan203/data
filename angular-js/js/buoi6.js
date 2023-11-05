let b6 = angular.module("Buoi6", []);
b6.controller("myController", myFunction);
function myFunction($scope) {

    $scope.nhanvien = [
        {
            ten: "Pham Anh Tuan",
            ngaysinh: "16/06/2003",
            gioitinh: 0,
            mucluong: "1000$"
        },
        {
            ten: "Trương Quang Vũ",
            ngaysinh: "16/06/2003",
            gioitinh: 0,
            mucluong: "1000$"
        },
        {
            ten: "Đinh La Thành",
            ngaysinh: "16/06/2003",
            gioitinh: 0,
            mucluong: "1000$"
        },





    ];
    // click
    $scope.sayHello = function ($name) {
        alert("XIN CHÀO " + $name);
    }


    //hover
    $scope.hover = function () {
        console.log("xin chào bạn");
    }

    $scope.fn = function ($age) {
        let tuoi = new Date().getFullYear - $age.getFullYear();
        if (tuoi < 18) {
console.log("Đi tù");
        } else {
            console.log(" không Đi tù");

        }

    }

}