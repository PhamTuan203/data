window.trangChuController = function ($scope,$http) {
  $scope.title = "Đây là trang chủ";


const apiStudents = "http://localhost:3000/students";
$http.get(apiStudents).then(function(response){
  console.log(response.data);
  if(response.status == 200){
    $scope.listStudents = response.data;

  }
})
};