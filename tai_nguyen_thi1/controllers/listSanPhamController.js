window.listSanPhamController = function($scope,$http){
    const apiSanPham = "http://localhost:3000/sanPham";

    $http.get(apiSanPham).then(function(response){
            if(response.status == 200){
                $scope.listSanPham =response.data;
            }
    })

    $scope.deleteSanPham = function(id){
        let result = confirm("Bạn có muốn xóa sản phẩm này không");
        if(result){
            $http.delete(apiSanPham+"/"+id)
        }else{
            alert("Bạn không muốn xóa sản phẩm")
        }
    }
}