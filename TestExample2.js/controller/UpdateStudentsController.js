window.UpdateStudentsController = function($scope,$http,$location,$routeParams){
let StudentsID = $routeParams.id;
    const apiStudents = "http://localhost:3000/students";
$http.get(`${apiStudents}/${StudentsID}`).then(function(response){
    $scope.newStudents = {
        id:response.data.id,
        name: response.data.name,
        year:response.data.year,
        couse:response.data.couse,
    }

})
  $scope.newStudents = {
        id:"",
        name: "",
        year:"",
        couse:""
  }
 $scope.updateStudents = function(){
    $http.put(`${apiStudents}/${StudentsID}`,$scope.newStudents).then(function(response){
        if(response.status == 200){
            $location.path("/trang-chu");

        }
    })

 }
}