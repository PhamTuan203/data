window.listEmployeeController = function($scope,$http){


    const aipEmployee = "http://localhost:3000/Employee";
 $http.get(aipEmployee).then(function(response){
    if(response.status ==200){
        $scope.listEmployee = response.data;

    }
 })

 $scope.deleteEmployee = function(id){
    $http.delete(aipEmployee+"/"+id);
 }
}