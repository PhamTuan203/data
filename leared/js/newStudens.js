let App = angular.module("myApp", []);
App.controller("myController", school);
function school($scope) {
  $scope.student = [
    {
      ten: "Phạm Anh Tuan",
      tuoi: 20,
      chuyenNganh: "PTPM",
    },
  ];

  $scope.addNew = function () {
    let newStudents = {
      ten: $scope.students.ten,
      tuoi: $scope.students.tuoi,
      chuyenNganh: $scope.students.chuyenNganh,
    };

    $scope.student.push(newStudents);
  };
}
