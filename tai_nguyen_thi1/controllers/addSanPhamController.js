window.addSanPhamController = function($scope,$http,$location){
    const apiSanPham = "http://localhost:3000/sanPham";


    $scope.newSanPham = {
        ten_sanpham:"",
        gia_sanpham:"",
        xuat_xu:""
    }
 $scope.addSanPham = function(){
    $http.post(apiSanPham,$scope.newSanPham).then(function(response){
         if(response.status ==201){
            $location.path("/sanpham/list");

         }
    })
 }

}