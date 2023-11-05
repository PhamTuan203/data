window.addEmployeeController = function($scope,$http,$location){
            const aipEmployee = "http://localhost:3000/Employee"

        $scope.newEmployee = {
            ma:"",
            ho_ten:"",
            sdt:"",
            chuc_vu:"",
            ngay_sinh:""
        }

       
   $scope.addEmployee = function(){
    $http.post(aipEmployee,$scope.newEmployee).then(function(response){
     if(response.status == 201){
        $location.path("/list-employee");
         }
      })
    }
}