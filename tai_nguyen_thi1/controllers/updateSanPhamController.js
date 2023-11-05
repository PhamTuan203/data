window.updateSanPhamController = function($scope,$http,$routeParams,$location){
    const apiSanPham = "http://localhost:3000/sanPham";
    let sanPhamID = $routeParams.id;

    $http.get(`${apiSanPham}/${sanPhamID}`).then(function(response){
            if(response.status == 200){
                $scope.newSanPham = {
                    ten_sanpham :response.data.ten_sanpham,
                    gia_sanpham:response.data.gia_sanpham,
                    xuat_xu:response.data.xuat_xu,
                }
            }
    })

      $scope.newSanPham = {
        ten_sanpham:"",
        gia_sanpham:"",
        xuat_xu:""
      }
    $scope.updateSanPham = function(){
   $http.put(`${apiSanPham}/${sanPhamID}`,$scope.newSanPham).then(function(response){
     if(response.status == 201){
   $location.path("/sanpham/list");
     }
   })
    }
}