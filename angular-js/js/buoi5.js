// khởi tạo module
// set agular cho vùng Angularjs
let Buoi1 = angular.module("Angularjs", []); // truyền vào hai tham số, 1.Tên vùng ng-js(Angularjs) 2. thành phần phụ thuộc
// khởi tạo conTroller
Buoi1.controller("demoController", myFunction);// tham sô1 tên của controller,
function myFunction($scope) {
    // tham số $scope phải có để render dữ liệu

    // khai báo biến
    $scope.xinchao = "con mèo con đáng yêu vkl";
    console.log($scope.xinchao);



}
Buoi1.controller("demoController2", proFile);
function proFile($scope) {
    $scope.ten = "Phạm Anh Tuấn";
    $scope.namsinh = " hai ca 3 ";
    $scope.chuyennganh = "Phân tích dữ liệu hệ thốnG CỤC BỘ";

    // khai biến bảng
    $scope.student = [
        {
            ten: "Phạm Anh Tuấn",
            namsinh: "HAi ca BA",
            chuyennganh: "UDPM"
        },
        {
            ten: "Phạm Anh Tuấn",
            namsinh: "HAi ca BA",
            chuyennganh: "UDPM"
        }

    ];

}