window.AddStudentsController = function($scope,$http,$location){
     const apiStudents = "http://localhost:3000/students";
   
     $scope.newStudents = {
        name:"",
        year:"",
        couse:""

     }
    $scope.addStudents= function(){
         $http.post(apiStudents,$scope.newStudents).then(function(response){
      if(response.status == 201){
        $location.path("/trang-chu");
 
      }
     })
    }
}