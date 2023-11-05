window.updateEmployeeController = function($scope,$http,$location,$routeParams){
        const aipEmployee = "http://localhost:3000/Employee";
    let EmployeeID = $routeParams.id;

    $http.get(`${aipEmployee}/${EmployeeID}`).then(function(response){
        if(response.status ==200){
            $scope.newEmployee = {
                ma: response.data.ma,
                ho_ten: response.data.ho_ten,
                sdt: response.data.sdt,
                chuc_vu:response.data.chuc_vu,
                ngay_sinh:response.data.ngay_sinh,
            }

        }
    })

     $scope.newEmployee = {
            ma:"",
            ho_ten:"",
            sdt:"",
            chuc_vu:"",
            ngay_sinh:""
        }
    $scope.updateEmployee = function(){
$http.put(`${aipEmployee}/${EmployeeID}`,$scope.newEmployee).then(function(response){
    if(response.status==201){
        $location.path("/list-employee");

    }
})
    }
}