window.detailEmployeeController = function($scope,$http,$location,$routeParams){
        const aipEmployee = "http://localhost:3000/Employee";
    let EmployeeID = $routeParams.id;

    $http.get(`${aipEmployee}/${EmployeeID}`).then(function(response){
        if(response.status ==200){
            $scope.newEmployee = {
                id:response.data.id,
                ma: response.data.ma,
                ho_ten: response.data.ho_ten,
                sdt: response.data.sdt,
                chuc_vu:response.data.chuc_vu,
                ngay_sinh:response.data.ngay_sinh,
            }

        }
    })
}