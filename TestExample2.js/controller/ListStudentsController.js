window.ListStudentsController = function($scope,$http){

    const apiStudents = "http://localhost:3000/students";

  $http.get(apiStudents).then(function(response){
    if(response.status==200){
        $scope.listStudents=response.data;


    }
  })

  $scope.deleteStudents = function(id){
    $http.delete(apiStudents+"/"+id);

  }
}